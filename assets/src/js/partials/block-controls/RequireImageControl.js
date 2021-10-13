import { ToggleControl } from '@wordpress/components';

const RequireImageControl = ( { attributes, setAttributes } ) => {

    return (
        <ToggleControl
            label="Require Image"
            checked={ attributes.requireImage ? attributes.requireImage : false }
            onChange={ ( requireImage ) => setAttributes( {requireImage} ) }
            />
    )
    
} 

export default RequireImageControl;