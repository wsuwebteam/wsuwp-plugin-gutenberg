import { TextControl } from '@wordpress/components';
import { HeadingTagControl } from './blockControls';

const HeadingControl = ( props ) => {

    let { attributes, setAttributes } = props;

    return (
        <>
            <HeadingTagControl {...props} />
            <TextControl
                label="Heading Text"
                value={ attributes.headingText ? attributes.headingText : '' }
                onChange={ ( headingText ) => setAttributes( {headingText} ) }
            />
        </>
    )
    
} 

export default HeadingControl;