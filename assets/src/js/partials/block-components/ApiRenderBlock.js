
import apiFetch from '@wordpress/api-fetch';
import { useState, useEffect } from '@wordpress/element';

const blockResponse = {
    requestData: '',
    rendered: 'hello world',
};

const ApiRenderBlock = ( { attributes, blockName, onChange, children } ) => {

    const [ blockRendered, setBlockRendered ] = useState( '' );

    blockName   = blockName.replace('/', '--' );

    attributes.apiRender = true;

    let requestData = JSON.stringify( attributes );

    useEffect(() => {
        apiFetch( {
            path: '/wsu-gutenberg/v1/render-block/' + blockName,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: requestData,
        } ).then( ( res ) => {
    
            let block = JSON.parse( res );
            setBlockRendered( block.rendered );
        } );
    }, [requestData] );

    if ( blockRendered ) {

        return (
            <div className="wsu-bc-api-render" dangerouslySetInnerHTML={{ __html: blockRendered } } />
        )

    } else {

        return children;

    }

}

export default ApiRenderBlock;