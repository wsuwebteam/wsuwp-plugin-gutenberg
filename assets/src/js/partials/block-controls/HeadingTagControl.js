import { SelectControl } from '@wordpress/components';

const HeadingTagControl = ( { attributes, setAttributes } ) => {

    return (
        <SelectControl
            label="Heading Tag"
            value={ attributes.headingTag ? attributes.headingTag : 'h2' }
            options={ [
                { label: 'H2', value: 'h2' },
                { label: 'H3', value: 'h3' },
                { label: 'H4', value: 'h4' },
                { label: 'H5', value: 'h5' },
                { label: 'H6', value: 'h6' },
                { label: 'div', value: 'div' },
  
            ] }
            onChange={ ( headingTag ) => setAttributes( {headingTag} ) }
        />
    )
    
} 

export default HeadingTagControl;