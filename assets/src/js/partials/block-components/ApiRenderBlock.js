
import apiFetch from '@wordpress/api-fetch';
import { useState, useEffect } from '@wordpress/element';

const blockResponse = {
    queryString: '',
    rendered: 'hello world',
};

const ApiRenderBlock = ( { attributes, blockName, onChange, children } ) => {

    const [ blockRendered, setBlockRendered ] = useState( '' );

    blockName   = blockName.replace('/', '--' );

    attributes.apiRender = true;

    let queryString = Object.keys( attributes ).map( key => encodeURIComponent( key ) + '=' + encodeURIComponent( attributes[key] ) ).join('&');

    useEffect(() => {
        apiFetch( {
            path: '/wsu-gutenberg/v1/render-block/' + blockName + '?' + queryString,
            method: 'GET',
        } ).then( ( res ) => {
    
            let block = JSON.parse( res );
            setBlockRendered( block.rendered );
        } );
    }, [queryString] );

    if ( blockRendered ) {

        return (
            <div className="wsu-bc-api-render" dangerouslySetInnerHTML={{ __html: blockRendered } } />
        )

    } else {

        return children;

    }

}

export default ApiRenderBlock;