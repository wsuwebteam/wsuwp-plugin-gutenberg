const { addFilter } = wp.hooks;
const { Fragment }	= wp.element;
const { InspectorAdvancedControls }	= wp.editor;
const { createHigherOrderComponent } = wp.compose;
import {  PanelDisplayOptions, PanelAnimate } from "../../../assets/src/js/partials/block-panels/blockPanels";
const {
	InspectorControls,
} = wp.blockEditor;
const {
} = wp.components;

import { 
	RequiredAlertControl,
	FontSizeControl,
	SpacingClassNameSelector,
	AlignItemControl,
	MaxWidthControl,
} from "../../../assets/src/js/partials/block-controls/blockControls";

import {
    getBlockClassNameValue,
	hasBlockClassName,
	setBlockClassNameBool,
} from "../../../assets/src/js/partials/block-utilities/blockUtilities";


const coreEmbedControls = wp.compose.createHigherOrderComponent( (BlockEdit) => {

	return (props) => {
		const { Fragment } = wp.element;
		const { ToggleControl } = wp.components;
		const { InspectorAdvancedControls } = wp.blockEditor;
		const { attributes, setAttributes, isSelected } = props;

		

		let FontSizeValue = ( isSelected && (props.name == 'core/embed') ) ? getBlockClassNameValue( attributes, 'wsu-font-size--' ) : '';

		return (
			<Fragment>
				<BlockEdit {...props} />
				{isSelected && (props.name == 'core/embed') && 
					<>
						<InspectorControls>
							<PanelDisplayOptions initialOpen={true} >
								<ToggleControl
									label="Full Width Video"
									checked={ hasBlockClassName( attributes, 'wsu-video--width-full' ) }
									onChange= { ( isFullWidth ) => setBlockClassNameBool( attributes, setAttributes, 'wsu-video--width-full', isFullWidth ) }
									help="Set video to 100% width of parent."
								/>
								<AlignItemControl {...props} />
								<MaxWidthControl {...props} />
							</PanelDisplayOptions>
						</InspectorControls>
					</>
				}
			</Fragment>
		);
	};
}, 'coreEmbedControls');


wp.hooks.addFilter(
	'editor.BlockEdit',
	'wsu/core-embed-controls',
	coreEmbedControls
);
