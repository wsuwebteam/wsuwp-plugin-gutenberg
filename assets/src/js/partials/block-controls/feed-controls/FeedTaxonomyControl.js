import { SelectControl } from '@wordpress/components';

const FeedTaxonomyControl = ( { attributes, setAttributes } ) => {

    return (
        <SelectControl
        label="Taxonomy"
        value={ attributes.taxonomy }
        options={ [
            { label: 'Category', value: 'category' },
            { label: 'Tags', value: 'post_tag' },
        ] }
            onChange={ ( taxonomy ) => setAttributes( { taxonomy } ) }
        />
    )
    
} 

export default FeedTaxonomyControl;