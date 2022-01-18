const { addFilter } = wp.hooks;
const { Fragment }	= wp.element;
const { InspectorAdvancedControls }	= wp.editor;
const { createHigherOrderComponent } = wp.compose;
import {  PanelDisplayOptions } from "../../../assets/src/js/partials/block-panels/blockPanels";
const {
	InspectorControls,
} = wp.blockEditor;
const {
} = wp.components;

import { 
	RequiredAlertControl,
	FontSizeControl,
} from "../../../assets/src/js/partials/block-controls/blockControls";

import {
    getBlockClassNameValue,
} from "../../../assets/src/js/partials/block-utilities/blockUtilities";


const coreParagraphControls = wp.compose.createHigherOrderComponent( (BlockEdit) => {

	return (props) => {
		const { Fragment } = wp.element;
		const { ToggleControl } = wp.components;
		const { InspectorAdvancedControls } = wp.blockEditor;
		const { attributes, setAttributes, isSelected } = props;

		let FontSizeValue = ( isSelected && (props.name == 'core/paragraph') ) ? getBlockClassNameValue( attributes, 'wsu-font-size--' ) : '';

		return (
			<Fragment>
				<BlockEdit {...props} />
				{isSelected && (props.name == 'core/paragraph') && 
					<>
						<InspectorControls>
							<PanelDisplayOptions>
								<FontSizeControl 
									{...props}
									sizes={
										[
											{ label: 'Not Set', value: '' },
											{ label: 'xSmall', value: 'xsmall' },
											{ label: 'Small', value: 'small' },
											{ label: 'Medium (Default)', value: 'medium' },
											{ label: 'xMedium', value: 'xmedium' },
											{ label: 'Large', value: 'large' },
											{ label: 'xLarge', value: 'xlarge' },
										]
									}
									/>
									{ FontSizeValue && <RequiredAlertControl>
											Paragraph text should not be used as a substitue for a heading. Should this be a heading instead?
										</RequiredAlertControl>
									}
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
