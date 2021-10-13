import { ToggleControl } from '@wordpress/components';

const RequireFirstImageControl = ( { attributes, setAttributes } ) => {

    return (
        <ToggleControl
            label="Require First Image"
            checked={ attributes.requireFirstImage ? attributes.requireFirstImage : false }
            onChange={ ( requireFirstImage ) => setAttributes( {requireFirstImage} ) }
            />
    )
    
} 

export default RequireFirstImageControl;