import { Panel, PanelBody, PanelRow } from '@wordpress/components';
import { ImageSelectorControl, ImageAltControl, ImageRatioControl } from '../block-controls/blockControls';
const {
    ToggleControl,
    TextareaControl,
} = wp.components;

const PanelImageOptions = ( props ) => {

    let {
        altControl    = false,
        ratioControl  = false,
        showControl   = false,
        imageSelector = true,
        attributes,
        setAttributes,
    } = props

    let hasImage = attributes.showImage ?? true;


    return (
        <PanelBody title="Image Options" initialOpen={false} >
            {showControl && <ToggleControl
                label="Show Image"
                checked={attributes.showImage}
                onChange={ ( showImage ) => setAttributes( { showImage } ) }
                help="Add/Remove image from block template."
                />
            }
            { hasImage && attributes.imageSrc && ratioControl && <ImageRatioControl 
                onChange={ ( imageRatio ) => setAttributes( { imageRatio } ) }
                currentValue={ attributes.imageRatio }
                />
            }
            { hasImage && attributes.imageSrc && altControl && <ImageAltControl {...props} />}
            { hasImage && imageSelector && <ImageSelectorControl {...props} />}
            {props.children}
        </PanelBody>
    )

}

export default PanelImageOptions;