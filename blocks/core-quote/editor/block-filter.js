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


const coreQuoteControls = wp.compose.createHigherOrderComponent( (BlockEdit) => {

	return (props) => {
		const { Fragment } = wp.element;
		const { ToggleControl } = wp.components;
		const { InspectorAdvancedControls } = wp.blockEditor;
		const { attributes, setAttributes, isSelected } = props;

		return (
			<Fragment>
				<BlockEdit {...props} />
				{isSelected && (props.name == 'core/quote') && 
					<>
						<InspectorControls>
							<PanelDisplayOptions>
								<FontSizeControl 
									{...props}
									sizes={
										[
											{ label: 'Not Set', value: '' },
											{ label: 'Small', value: 'small' },
											{ label: 'Medium (Default)', value: 'medium' },
											{ label: 'xMedium', value: 'xmedium' },
											{ label: 'Large', value: 'large' },
											{ label: 'xLarge', value: 'xlarge' },
										]
									}
									/>
							</PanelDisplayOptions>
						</InspectorControls>
					</>
				}
			</Fragment>
		);
	};
}, 'coreQuoteControls');


wp.hooks.addFilter(
	'editor.BlockEdit',
	'wsu/core-quote-controls',
	coreQuoteControls
);
