const {
    ToggleControl,
    TextareaControl,
} = wp.components;

const ImageAltControl = ( { attributes, setAttributes } ) => {

    return (
        <>
            <ToggleControl
                label="Add Custom Alt Text"
                checked={ attributes.customImageAlt }
                onChange={ ( customImageAlt ) => setAttributes( { customImageAlt } ) }
                help='Override default alt text from media library.'
                />
            { attributes.customImageAlt && <TextareaControl
                label="Image Alt Text"
                help="Alt text should describe the image. For linked images, the alt text should describe the destination."
                value={ attributes.imageAlt }
                onChange={ ( imageAlt ) => setAttributes( { imageAlt } ) }
                />
            }
        </>
    )
    
} 

export default ImageAltControl;