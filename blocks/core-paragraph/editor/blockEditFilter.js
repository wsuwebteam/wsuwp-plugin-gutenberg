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
	SpacingClassNameSelector,
} from "../../../assets/src/js/partials/block-controls/blockControls";

import {
    getBlockClassNameValue,
} from "../../../assets/src/js/partials/block-utilities/blockUtilities";

import { 
	PanelAnimate
} from "../../../assets/src/js/partials/block-panels/blockPanels";


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
											{ label: 'xSmall', value: 'xsmall' },
											{ label: 'Small', value: 'small' },
											{ label: 'Medium', value: 'medium' },
											{ label: 'xMedium (Default)', value: '' },
											{ label: 'xxMedium', value: 'xxmedium' },
											{ label: 'Large', value: 'large' },
											{ label: 'xLarge', value: 'xlarge' },
										]
									}
									/>
									{ FontSizeValue && <RequiredAlertControl>
											Should this be a heading instead?<br />
											Paragraph text should not be used as a substitue for a heading. 
										</RequiredAlertControl>
									}
							</PanelDisplayOptions>
							<PanelAnimate { ...props } ></PanelAnimate>
							<SpacingClassNameSelector                        
								spaceSettings={[
									{
										label: 'Outside Spacing (Margin)',
										properties: [
											{
												label: 'Top',
												prefix: 'wsu-spacing-before--',                                        
												default: 'none',
											},
											{
												label: 'Bottom',
												prefix: 'wsu-spacing-after--',
												default: 'xmedium',                                        
											},
											{
												label: 'Left',
												prefix: 'wsu-spacing-margin-left--',									
												default: 'default',
											},
											{
												label: 'Right',
												prefix: 'wsu-spacing-margin-right--',									
												default: 'default',
											}
										]
									},
									{
										label: 'Padding (Inside Spacing)',
										properties: [
											{
												label: 'Top',
												prefix: 'wsu-spacing-top--',
												default: 'default',
											},
											{
												label: 'Bottom',
												prefix: 'wsu-spacing-bottom--',
												default: 'default',									
											},
											{
												label: 'Left',
												prefix: 'wsu-spacing-padding-left--',									
												default: 'default',
											},
											{
												label: 'Right',
												prefix: 'wsu-spacing-padding-right--',									
												default: 'default',
											}
										]
									}
								]}
								{...props}>					
							</SpacingClassNameSelector>
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
