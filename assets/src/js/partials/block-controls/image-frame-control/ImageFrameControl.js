const { MediaPlaceholder, MediaUpload } = wp.editor;

const ImageFrameControl = ( props ) => {

    let {
        attributes,
        setAttributes,
        controlTitle = 'Add an Image...',
        imageIdKey = 'imageId',
        imageSrcKey = 'imageSrc',
        imageAltKey = 'imageAlt',
        imageRatioKey = 'imageRatio',
    } = props;

    const setImage = ( media ) => {

        if ( typeof media === 'object' && 'id' in media ) {

            let {
                alt='',
                id,
                url,
            } = media;
    
            console.log(url);
    
            setAttributes( {
                [ imageSrcKey ] : url,
                [ imageIdKey ] : id,
                [ imageAltKey ] : alt,
            });

        } 

    }

    let blockClasses = 'wsu-image-frame wsu-image-frame-control';

    blockClasses += ( attributes.hasOwnProperty( imageRatioKey ) && attributes[ imageRatioKey ] ) ? ' wsu-image--ratio-' + attributes[ imageRatioKey ] : ''; 

    if ( attributes.imageSrc ) {

        return (
            <>
            <div className={ blockClasses } >
                <img src={attributes.imageSrc} ></img>
                <button 
                    className="wsu-image-frame-control__button"
                    onClick= { () => setAttributes(
                        {
                            [ imageSrcKey ] : '',
                            [ imageIdKey ] : '',
                            [ imageAltKey ] : '',
                        }
                    ) }
                    >
                    Remove Image
                </button>
            </div>
            </>
        );

    } else {

        return (
        
            <div className="wsu-image-frame wsu-image-frame-control">
                
                <MediaPlaceholder
                    icon="format-image"
                    labels={{
                        title: controlTitle,
                    }}
                    className="block-image"
                    onSelect={ (value) => { setImage( value ) } }
                    accept="image/*"
                    allowedTypes={['image']}
                />
            </div>
        );

    }



    
}

export default ImageFrameControl;