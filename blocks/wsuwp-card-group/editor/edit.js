const { __ } = wp.i18n;

const {
	InnerBlocks,
	InspectorControls,
	useBlockProps,
    RichText,
} = wp.blockEditor;

const {
	TextControl,
	ToggleControl,
    RangeControl,
} = wp.components;

import { 
	ColorClassControl,
	SpacingClassNameSelector,
    ImageFrameControl,
} from "../../../assets/src/js/partials/block-controls/blockControls";

import { 
    PanelDisplayOptions,
	PanelColorOptions,
} from "../../../assets/src/js/partials/block-panels/blockPanels";

import {
    hasBlockClassName,
    addBlockClassName,
    setBlockClassName,
	getBlockClassNameValue,
} from "../../../assets/src/js/partials/block-utilities/blockUtilities";

const { MediaPlaceholder, MediaUpload } = wp.editor;


const Edit = ( props ) => {

	let {
		attributes, 
		setAttributes 
	} = props;

	const blockProps = useBlockProps( {
        className: 'wsu-card-wrapper wsu-card-wrapper--per-row-' + attributes.columns,
        style: {},
    } );

    return (
		<>
		<InspectorControls>
            <PanelDisplayOptions isOpen={true} >
            <RangeControl
                label="Number of Columns"
                help="Number of columns to display per row."
                value={ attributes.columns }
                onChange={ ( columns ) => setAttributes( { columns } ) }
                min={1}
                max={4}
                />
            </PanelDisplayOptions> 
			<PanelColorOptions>
			</PanelColorOptions>
		</InspectorControls>
		<div { ...blockProps }  >
			<InnerBlocks
				template={ [
					['wsuwp/card', {}, []],
					['wsuwp/card', {}, []],
					['wsuwp/card', {}, []],
				] }
				templateLock={ false }
                allowedBlocks={ [ 'wsuwp/card' ] }
			/>
		</div>
		</>
    )

}

export default Edit;