import { TextControl } from '@wordpress/components';

const CountControl = ( { attributes, setAttributes } ) => {

    return (
        <TextControl
            label="Count"
            value={ attributes.count ? attributes.count : '0' }
            onChange={ ( count ) => setAttributes( {count} ) }
        />
    )
    
} 

export default CountControl;