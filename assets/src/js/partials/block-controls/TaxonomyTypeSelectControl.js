import { SelectControl } from '@wordpress/components';

const TaxonomyTypeSelectControl = ( { attributes, setAttributes } ) => {

    return (
        <SelectControl
            label="Filter By"
            value={ attributes.taxonomy ? attributes.taxonomy : '' }
            options={ [
                { label: 'Category', value: 'category' },
                { label: 'Tags', value: 'post_tag' },
            ] }
            onChange={ ( taxonomy ) => setAttributes( {taxonomy} ) }
        />
    )
    
} 

export default TaxonomyTypeSelectControl;