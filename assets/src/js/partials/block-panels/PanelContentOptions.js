import { Panel, PanelBody, PanelRow } from '@wordpress/components';
import { ImageSelectorControl, ImageAltControl, ImageRatioControl, HeadingTagControl, FontSizeControl } from '../block-controls/blockControls';
const {
    ToggleControl,
    TextareaControl,
} = wp.components;

const PanelContentOptions = ( props ) => {

    let {

        showImageControl   = false,
        showHeadingControl   = false,
        showCaptionControl   = false,
        showCustomControl   = false,
        headingTagControl = false,
        headingFontSizeControl = false,
        attributes,
        setAttributes,
    } = props

    let hasImage = attributes.showImage ?? true;


    return (
        <PanelBody title="Content Options" initialOpen={false} >
            {showImageControl && <ToggleControl
                label="Show Image"
                checked={attributes.showImage}
                onChange={ ( showImage ) => setAttributes( { showImage } ) }
                />
            }
            {showHeadingControl && <ToggleControl
                label="Show Title/Heading"
                checked={attributes.showHeading}
                onChange={ ( showHeading ) => setAttributes( { showHeading } ) }
                />
            }
            {showCaptionControl && <ToggleControl
                label="Show Caption"
                checked={attributes.showCaption}
                onChange={ ( showCaption ) => setAttributes( { showCaption } ) }
                />
            }
            {showCustomControl && <ToggleControl
                label="Custom Content"
                checked={attributes.showContent}
                onChange={ ( showContent ) => setAttributes( { showContent } ) }
                />
            }
            { headingTagControl && <HeadingTagControl { ...props } allowedTags={ ['h2','h3','h4','h5','h6','div'] } /> }
            { headingFontSizeControl && <FontSizeControl 
                {...props}
                label='Heading Font Size'
                sizes={
                    [
                        { label: 'Default', value: '' },
                        { label: 'Medium', value: 'medium' },
                        { label: 'xMedium', value: 'xmedium' },
                        { label: 'xxMedium', value: 'xxmedium' },
                        { label: 'Large', value: 'large' },
                        { label: 'xLarge', value: 'xlarge' },
                        { label: 'xxLarge', value: 'xxlarge' },
                    ]
                }
                elementClass="headingClass"
                />
            }
            {props.children}
        </PanelBody>
    )

}

export default PanelContentOptions;