
import apiFetch from '@wordpress/api-fetch';
import { useState, useEffect } from '@wordpress/element';

const blockResponse = {
    queryString: '',
    rendered: 'hello world',
};

const ApiRenderBlock = ( { attributes, blockName, onChange } ) => {

    const [ blockRendered, setBlockRendered ] = useState( '' );

    blockName   = blockName.replace('/', '--' );
    let queryString = Object.keys( attributes ).map( key => encodeURIComponent( key ) + '=' + encodeURIComponent( attributes[key] ) ).join('&');

    useEffect(() => {
        apiFetch( {
            path: '/wsu-gutenberg/v1/render-block/' + blockName + '?' + queryString,
            method: 'GET',
        } ).then( ( res ) => {
    
            let block = JSON.parse( res );
            console.log( queryString );
            setBlockRendered( block.rendered );
        } );
    }, [queryString] );

    return (
        <div dangerouslySetInnerHTML={{ __html: blockRendered } } />
    )

}

export default ApiRenderBlock;