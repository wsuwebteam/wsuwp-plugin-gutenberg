import { TextControl } from '@wordpress/components';

const OffsetControl = ( { attributes, setAttributes } ) => {

    return (
        <TextControl
            label="Offset"
            value={ attributes.offset ? attributes.offset : '0' }
            onChange={ ( offset ) => setAttributes( {offset} ) }
        />
    )
    
} 

export default OffsetControl;