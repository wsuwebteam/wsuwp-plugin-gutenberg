const { addFilter } = wp.hooks;
const { Fragment }	= wp.element;
const { InspectorAdvancedControls }	= wp.editor;
const { createHigherOrderComponent } = wp.compose;
import { PanelInsertPost, PanelDisplayOptions, PanelFeedPosts, PanelGeneralOptions, PanelStyleOptions, PanelAnimate } from "../../../assets/src/js/partials/block-panels/blockPanels";
const {
	InspectorControls,
} = wp.blockEditor;
const {
    ToggleControl
} = wp.components;

import {
    hasBlockClassName,
    addBlockClassName,
    setBlockClassNameBool,
	getBlockClassNameValue,
} from "../../../assets/src/js/partials/block-utilities/blockUtilities";

import { 
    ButtonControl,
	HeadingControl,
	FontSizeControl,
	ColorClassControl,
} from "../../../assets/src/js/partials/block-controls/blockControls";

const coreHeadingControls = wp.compose.createHigherOrderComponent( (BlockEdit) => {

	let headingStyles = [
		{
			icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60"><path d="M26.52,20.22V37H23.4v-7.2H14.71V37H11.59V20.22h3.12v6.93H23.4V20.22Z" fill="#231f20"/><path d="M42.74,31.57H32.68a3.88,3.88,0,0,0,4.16,3.07,4.57,4.57,0,0,0,3.48-1.39l1.61,1.85a6.51,6.51,0,0,1-5.16,2.09c-4.3,0-7.09-2.76-7.09-6.58a6.37,6.37,0,0,1,6.63-6.55,6.25,6.25,0,0,1,6.48,6.62C42.79,30.92,42.77,31.28,42.74,31.57Zm-10.08-2h7.27a3.48,3.48,0,0,0-3.62-3.12A3.54,3.54,0,0,0,32.66,29.58Z" fill="#231f20"/><path d="M56,29.51V37H53.21V35.46a4.57,4.57,0,0,1-4,1.73c-2.93,0-4.77-1.61-4.77-3.84s1.44-3.82,5.33-3.82H53v-.19c0-1.75-1.06-2.79-3.2-2.79A6.34,6.34,0,0,0,46,27.83l-1.18-2.19a9.06,9.06,0,0,1,5.43-1.58C53.9,24.06,56,25.81,56,29.51ZM53,33V31.52h-3.1c-2,0-2.59.77-2.59,1.71S48.26,35,49.8,35A3.27,3.27,0,0,0,53,33Z" fill="#231f20"/><path d="M72.55,19.21V37H69.67V35.36a5.28,5.28,0,0,1-4.25,1.83,6.24,6.24,0,0,1-6.48-6.58,6.22,6.22,0,0,1,6.48-6.55,5.24,5.24,0,0,1,4.13,1.73V19.21Zm-3,11.4a3.82,3.82,0,1,0-7.64,0,3.82,3.82,0,1,0,7.64,0Z" fill="#231f20"/><path d="M76.08,20.29A1.82,1.82,0,0,1,78,18.49a1.79,1.79,0,0,1,1.92,1.73A1.85,1.85,0,0,1,78,22.09,1.82,1.82,0,0,1,76.08,20.29Zm.4,3.91h3V37h-3Z" fill="#231f20"/><path d="M96,29.67V37H93v-7c0-2.28-1.12-3.39-3-3.39-2.14,0-3.58,1.3-3.58,3.87V37h-3V24.2h2.86v1.66a5.54,5.54,0,0,1,4.41-1.8C93.76,24.06,96,25.81,96,29.67Z" fill="#231f20"/><path d="M112.7,24.2V35.08c0,4.65-2.42,6.76-6.91,6.76A10.18,10.18,0,0,1,99.55,40l1.34-2.26a7.72,7.72,0,0,0,4.73,1.54c2.83,0,4.08-1.3,4.08-3.89v-.67a5.66,5.66,0,0,1-4.3,1.7c-3.67,0-6.48-2.49-6.48-6.21s2.81-6.17,6.48-6.17a5.52,5.52,0,0,1,4.44,1.85V24.2Zm-3,6a3.91,3.91,0,1,0-3.89,3.67A3.61,3.61,0,0,0,109.75,30.23Z" fill="#231f20"/></svg>,
			label: 'Default',
			value: '',
		},
		{
			icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60"><rect x="12.84" y="15.43" width="98.32" height="16.04" rx="6.8" fill="#231f20"/><rect x="13.39" y="38.35" width="25.61" height="4.11" fill="#9e1c20"/></svg>,
			label: 'Marked',
			value: 'marked',
		},
	]

	let markColors = [
		{ name: 'crimson', color: '#A60F2D' },
		{ name: 'crimson-light', color: '#CA1237' },
		{ name: 'gray', color: '#b3b3b3' },
		{ name: 'autumn', color: '#FF6727' },
		{ name: 'goldfinch', color: '#F3E700' },
		{ name: 'vineyard', color: '#AADC24' },
		{ name: 'pacificsky', color: '#5BC3F5' },
		{ name: 'midnight', color: '#002D61' },
    ];


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
							<PanelStyleOptions 
								{...props} 
								styles={headingStyles}
								prefix="wsu-heading--style-" 
								>
							</PanelStyleOptions>
							<PanelAnimate { ...props } ></PanelAnimate>
							<PanelDisplayOptions>
								<FontSizeControl 
									{...props}
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
									/>

								{ ( 'marked' == getBlockClassNameValue( attributes, 'wsu-heading--style-' ) ) && <>
								<ToggleControl
									label="Mark Above Title"
									checked={ hasBlockClassName( attributes, 'wsu-heading--mark-top') }
									onChange={ ( above ) => { setBlockClassNameBool( attributes, setAttributes, 'wsu-heading--mark-top', above ) } }
									/>
								<ToggleControl
									label="Mark centered"
									checked={ hasBlockClassName( attributes, 'wsu-heading--mark-centered') }
									onChange={ ( centered ) => { setBlockClassNameBool( attributes, setAttributes, 'wsu-heading--mark-centered', centered ) } }
									/>
								<ColorClassControl
									{ ...props }
									colors={markColors}
									label='Mark Color'
									value='#CA1237'
									prefix='wsu-heading--mark-color-'
									/>
								</>
								
								}
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
