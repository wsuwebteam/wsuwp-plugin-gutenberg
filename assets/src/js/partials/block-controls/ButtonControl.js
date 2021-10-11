import { TextControl } from '@wordpress/components';

const ButtonControl = ( { attributes, setAttributes } ) => {

    return (
        <>
            <TextControl
                label="Button Text"
                value={ attributes.buttonText ? attributes.buttonText : '' }
                onChange={ ( buttonText ) => setAttributes( {buttonText} ) }
            />
            <TextControl
                label="Button Link"
                value={ attributes.buttonLink ? attributes.buttonLink : '' }
                onChange={ ( buttonLink ) => setAttributes( {buttonLink} ) }
            />
        </>
    )
    
} 

export default ButtonControl;