import { TextControl } from '@wordpress/components';

const HostControl = ( { attributes, setAttributes } ) => {

    return (
        <TextControl
            label="Host"
            value={ attributes.host ? attributes.host : '' }
            onChange={ ( host ) => setAttributes( {host} ) }
            placeholder="https://...."
        /> 
    )
    
} 

export default HostControl;