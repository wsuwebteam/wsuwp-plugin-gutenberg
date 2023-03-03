const {
	Button,
	FocalPointPicker,
	BaseControl,
} = wp.components;

const {
	MediaUpload,
	MediaUploadCheck,
} = wp.blockEditor;

const ImageSelectorControl = ( props ) => {

    let { attributes, setAttributes } = props;

    return (
        <>
            { attributes.imageSrc &&
                <BaseControl
                    help="Select where you would like the background to resize around."
                >
                    <BaseControl.VisualLabel className="wsu-settings__label">
                        Focal Point Picker
                    </BaseControl.VisualLabel>
                    <FocalPointPicker
                        url={attributes.imageSrc}
                        dimensions={attributes.imageDimensions}
                        value={attributes.imageFocalPoint}
                        onChange={(focalPoint) => setAttributes({ imageFocalPoint: focalPoint })}
                    />
                </BaseControl>
            }

            <MediaUploadCheck>
                <MediaUpload
                    onSelect={(media) => setAttributes({ imageId: media.id, imageSrc: media.url }) }
                    allowedTypes={['image']}
                    render={({ open }) => (
                        <BaseControl label={`${attributes.imageSrc ? 'Replace' : 'Choose'} Image `}>
                            <Button isLink onClick={open}>Open Media Library</Button>
                        </BaseControl>
                    )}
                />
            </MediaUploadCheck>
        </>
    )
    
} 

export default ImageSelectorControl;