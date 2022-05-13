const { addFilter } = wp.hooks;
const { Fragment }	= wp.element;
const { InspectorAdvancedControls }	= wp.editor;
const { createHigherOrderComponent } = wp.compose;
import {  PanelDisplayOptions } from "../../../assets/src/js/partials/block-panels/blockPanels";
const {
	InspectorControls,
} = wp.blockEditor;

const {
	RangeControl,
} = wp.components;

import {
    setBlockClassName,
	getBlockClassNameValue,
} from "../../../assets/src/js/partials/block-utilities/blockUtilities";



const coreParagraphControls = wp.compose.createHigherOrderComponent( (BlockEdit) => {

	return (props) => {
		const { Fragment } = wp.element;
		const { ToggleControl } = wp.components;
		const { InspectorAdvancedControls } = wp.blockEditor;
		const { attributes, setAttributes, isSelected } = props;

		return (
			<Fragment>
				<BlockEdit {...props} />
				{isSelected && (props.name == 'core/list') && 
					<>
						<InspectorControls>
							<PanelDisplayOptions>
							<RangeControl
								label="Number of Columns"
								help="Number of columns to display."
								value={ parseInt( getBlockClassNameValue( attributes,'wsu-list--columns-', 1, ) )  }
								onChange={ ( columns ) => setBlockClassName( attributes, setAttributes, 'wsu-list--columns-', columns ) }
								min={1}
								max={4}
								/>
							</PanelDisplayOptions>
						</InspectorControls>
					</>
				}
			</Fragment>
		);
	};
}, 'coreParagraphControls');


wp.hooks.addFilter(
	'editor.BlockEdit',
	'wsu/core-paragraph-controls',
	coreParagraphControls
);
