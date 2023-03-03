import { Panel, PanelBody, PanelRow } from '@wordpress/components';
import { ImageSelectorControl, ImageAltControl, ImageRatioControl, HeadingTagControl, FontSizeControl } from '../block-controls/blockControls';
const {
    TextControl,
    ToggleControl,
    TextareaControl,
} = wp.components;

const PanelLinkOptions = ( props ) => {

    let {

        urlControl = true,
        attributes,
        setAttributes,
    } = props

    let hasImage = attributes.showImage ?? true;


    return (
        <PanelBody title="Link Options" initialOpen={false} >
            { urlControl && <TextControl
                    label="Link URL"
                    value={ attributes.link }
                    onChange= { ( link ) => setAttributes( { link } ) }
                />

            }
            {props.children}
        </PanelBody>
    )

}

export default PanelLinkOptions;