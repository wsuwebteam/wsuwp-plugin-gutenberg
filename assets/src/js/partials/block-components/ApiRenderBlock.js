
import apiFetch from '@wordpress/api-fetch';
import { useState } from '@wordpress/element';

const blockResponse = {
    queryString: '',
    rendered: 'hello world',
};

const ApiRenderBlock = ( { attributes, blockName, onChange } ) => {

    const [ blockRendered, setBlockRendered ] = useState( '' );

    blockName   = blockName.replace('/', '--' );
    let queryString = Object.keys( attributes ).map( key => encodeURIComponent( key ) + '=' + encodeURIComponent( attributes[key] ) ).join('&');

    // console.log( queryString );

    apiFetch( {
		path: '/wsu-gutenberg/v1/render-block/' + blockName + '?' + queryString,
		method: 'GET',
	} ).then( ( res ) => {

        let block = JSON.parse( res );
        // console.log( block );
		setBlockRendered( block.rendered );
	} );


    return (
        <div dangerouslySetInnerHTML={{ __html: blockRendered } } />
    )

}

export default ApiRenderBlock;