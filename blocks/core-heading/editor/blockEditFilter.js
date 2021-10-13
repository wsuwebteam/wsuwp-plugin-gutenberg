const { addFilter } = wp.hooks;
const { Fragment }	= wp.element;
const { InspectorAdvancedControls }	= wp.editor;
const { createHigherOrderComponent } = wp.compose;
import { PanelInsertPost, PanelDisplayOptions, PanelFeedPosts, PanelGeneralOptions } from "../../../assets/src/js/partials/block-panels/blockPanels";
const {
	InspectorControls,
} = wp.blockEditor;
const {
    ToggleControl
} = wp.components;

import { 
    ButtonControl,
	HeadingControl,
	FontSizeControl,
} from "../../../assets/src/js/partials/block-controls/blockControls";

const coreHeadingControls = wp.compose.createHigherOrderComponent( (BlockEdit) => {
	return (props) => {
		const { Fragment } = wp.element;
		const { ToggleControl } = wp.components;
		const { InspectorAdvancedControls } = wp.blockEditor;
		const { attributes, setAttributes, isSelected } = props;
		return (
			<Fragment>
				<BlockEdit {...props} />
				{isSelected && (props.name == 'core/heading') && 
					<>
						<InspectorControls>
							<PanelDisplayOptions>
								<FontSizeControl 
									{...props}
									sizes={
										[
											{ label: 'Not Set', value: '' },
											{ label: 'Medium', value: 'medium' },
											{ label: 'xMedium', value: 'xmedium' },
											{ label: 'xxMedium', value: 'xxmedium' },
											{ label: 'Large', value: 'large' },
											{ label: 'xLarge', value: 'xlarge' },
											{ label: 'xxLarge', value: 'xxlarge' },
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
}, 'coreHeadingControls');


wp.hooks.addFilter(
	'editor.BlockEdit',
	'wsu/core-heading-controls',
	coreHeadingControls
);
