import { TextControl } from '@wordpress/components';

const TaxonomyTermSelectControl = ( { attributes, setAttributes } ) => {

    return (
        <TextControl
            label="Term IDs"
            value={ attributes.terms ? attributes.terms : '' }
            onChange={ ( terms ) => setAttributes( {terms} ) }
        />
    )
    
} 

export default TaxonomyTermSelectControl;