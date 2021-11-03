const { addFilter } = wp.hooks;
const { Fragment }	= wp.element;
const { InspectorAdvancedControls }	= wp.editor;
const { createHigherOrderComponent } = wp.compose;

import { 
	PanelInsertPost, 
	PanelDisplayOptions, 
	PanelFeedPosts, 
	PanelGeneralOptions, 
	PanelStyleOptions 
} from "../../assets/src/js/partials/block-panels/blockPanels";

import { 
	ColorClassNameSelector, 
	SpacingClassNameSelector 
} from '../../assets/src/js/partials/block-controls/blockControls';

const {
	InspectorControls,
} = wp.blockEditor;

const {
	Panel,
	PanelBody,
	TextControl,
	SelectControl,
	ToggleControl,
	Button,
	FocalPointPicker,
	BaseControl
} = wp.components;

import { 
	ButtonControl,
	FontSizeControl,
} from "../../assets/src/js/partials/block-controls/blockControls"; 

import {
	getBlockClassName,
	addBlockClassName,
} from '../../assets/src/js/partials/block-utilities/blockUtilities';

const coreButtonControls = wp.compose.createHigherOrderComponent( (BlockEdit) => {


	let buttonStyles = [
		{
			icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60"><rect x="11.14" y="7.66" width="101.72" height="44.67" rx="6.18" style={ {fill: '#a60f2d'} } /><path d="M46.91,31.43c0,1.68-1.32,2.66-3.84,2.66H38.19v-9.8h4.6c2.35,0,3.61,1,3.61,2.55A2.35,2.35,0,0,1,45.14,29,2.41,2.41,0,0,1,46.91,31.43ZM40,25.72v2.7h2.58c1.26,0,2-.45,2-1.34s-.72-1.36-2-1.36Zm5.06,5.53c0-1-.74-1.41-2.11-1.41H40v2.83h3C44.33,32.67,45.07,32.23,45.07,31.25Z" style={{fill:'#fff'}}/><path d="M55.92,26.61v7.48H54.25v-1a3,3,0,0,1-2.4,1,3,3,0,0,1-3.23-3.3V26.61h1.75v4c0,1.36.65,2,1.75,2a2,2,0,0,0,2.05-2.25V26.61Z" style={{fill:'#fff'}}/><path d="M62.71,33.69a2.72,2.72,0,0,1-1.68.5,2.3,2.3,0,0,1-2.58-2.52v-3.6H57.22v-1.4h1.23V25H60.2v1.71h2v1.4h-2v3.56c0,.73.37,1.12,1,1.12a1.59,1.59,0,0,0,1-.31Z" style={{fill:'#fff'}}/><path d="M68.46,33.69a2.72,2.72,0,0,1-1.68.5,2.29,2.29,0,0,1-2.57-2.52v-3.6H63v-1.4h1.24V25H66v1.71h2v1.4H66v3.56c0,.73.36,1.12,1,1.12a1.55,1.55,0,0,0,1-.31Z" style={{fill:'#fff'}}/><path d="M69,30.35a4,4,0,1,1,4,3.84A3.76,3.76,0,0,1,69,30.35Zm6.2,0a2.22,2.22,0,1,0-4.44,0,2.22,2.22,0,1,0,4.44,0Z" style={{fill:'#fff'}}/><path d="M86.05,29.81v4.28H84.3V30c0-1.33-.66-2-1.78-2a2,2,0,0,0-2.09,2.25v3.78H78.68V26.61h1.67v1a3.26,3.26,0,0,1,2.58-1A2.92,2.92,0,0,1,86.05,29.81Z" style={{fill:'#fff'}}/></svg>,
			label: 'Default',
			value: '',
		},
		{
			icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60"><rect x="11.14" y="7.66" width="101.72" height="44.67" rx="21.11" style={ {fill: '#a60f2d'} }/><path d="M46.91,31.43c0,1.68-1.32,2.66-3.84,2.66H38.19v-9.8h4.6c2.35,0,3.61,1,3.61,2.55A2.35,2.35,0,0,1,45.14,29,2.41,2.41,0,0,1,46.91,31.43ZM40,25.72v2.7h2.58c1.26,0,2-.45,2-1.34s-.72-1.36-2-1.36Zm5.06,5.53c0-1-.74-1.41-2.11-1.41H40v2.83h3C44.33,32.67,45.07,32.23,45.07,31.25Z" style={{fill:'#fff' } } /><path d="M55.92,26.62v7.47H54.25v-1a3,3,0,0,1-2.41,1,3,3,0,0,1-3.22-3.3V26.62h1.75v4c0,1.36.65,2,1.75,2a2,2,0,0,0,2.05-2.25V26.62Z" style={{fill:'#fff' } } /><path d="M62.71,33.69a2.72,2.72,0,0,1-1.68.5,2.3,2.3,0,0,1-2.58-2.52v-3.6H57.22v-1.4h1.23V25H60.2v1.71h2v1.4h-2v3.56c0,.73.37,1.12,1,1.12a1.59,1.59,0,0,0,1-.31Z" style={{fill:'#fff' } } /><path d="M68.46,33.69a2.72,2.72,0,0,1-1.68.5,2.29,2.29,0,0,1-2.57-2.52v-3.6H63v-1.4h1.24V25H66v1.71h2v1.4H66v3.56c0,.73.36,1.12,1,1.12a1.55,1.55,0,0,0,1-.31Z" style={{fill:'#fff' } } /><path d="M69,30.35a4,4,0,1,1,4,3.84A3.76,3.76,0,0,1,69,30.35Zm6.2,0a2.22,2.22,0,1,0-4.44,0,2.22,2.22,0,1,0,4.44,0Z" style={{fill:'#fff' } } /><path d="M86.05,29.81v4.28H84.3V30c0-1.33-.66-2-1.78-2a2,2,0,0,0-2.09,2.25v3.78H78.68V26.62h1.67v1a3.26,3.26,0,0,1,2.58-1A2.92,2.92,0,0,1,86.05,29.81Z" style={{fill:'#fff' } } /></svg>,
			label: 'Round',
			value: 'round',
		},
		{
			icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60"><rect x="11.14" y="7.66" width="101.72" height="44.67" rx="6.18" style={{ fill:'none',stroke:'#58595b',strokeMiterlimit:10 }}/><path d="M46.91,31.43c0,1.68-1.32,2.66-3.84,2.66H38.19v-9.8h4.6c2.35,0,3.61,1,3.61,2.55A2.35,2.35,0,0,1,45.14,29,2.41,2.41,0,0,1,46.91,31.43ZM40,25.72v2.7h2.58c1.26,0,2-.45,2-1.34s-.72-1.36-2-1.36Zm5.06,5.53c0-1-.74-1.41-2.11-1.41H40v2.83h3C44.33,32.67,45.07,32.23,45.07,31.25Z" style={{fill:'#414042' } } /><path d="M55.92,26.61v7.48H54.25v-1a3,3,0,0,1-2.41,1,3,3,0,0,1-3.22-3.3V26.61h1.75v4c0,1.36.65,2,1.75,2a2,2,0,0,0,2.05-2.25V26.61Z" style={{fill:'#414042' } } /><path d="M62.71,33.69a2.72,2.72,0,0,1-1.68.5,2.3,2.3,0,0,1-2.58-2.52v-3.6H57.22v-1.4h1.23V25H60.2v1.71h2v1.4h-2v3.56c0,.73.37,1.12,1,1.12a1.59,1.59,0,0,0,1-.31Z" style={{fill:'#414042' } } /><path d="M68.46,33.69a2.72,2.72,0,0,1-1.68.5,2.29,2.29,0,0,1-2.57-2.52v-3.6H63v-1.4h1.24V25H66v1.71h2v1.4H66v3.56c0,.73.36,1.12,1,1.12a1.55,1.55,0,0,0,1-.31Z" style={{fill:'#414042' } } /><path d="M69,30.35a4,4,0,1,1,4,3.84A3.76,3.76,0,0,1,69,30.35Zm6.2,0a2.22,2.22,0,1,0-4.44,0,2.22,2.22,0,1,0,4.44,0Z" style={{fill:'#414042' } } /><path d="M86.05,29.81v4.28H84.3V30c0-1.33-.66-2-1.78-2a2,2,0,0,0-2.09,2.25v3.78H78.68V26.61h1.67v1a3.26,3.26,0,0,1,2.58-1A2.92,2.92,0,0,1,86.05,29.81Z" style={{fill:'#414042' } } /></svg>,
			label: 'Outline',
			value: 'outline',
		},
		{
			icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60"><rect x="11.14" y="7.66" width="101.72" height="44.67" rx="21.96" style={{ fill:'none',stroke:'#58595b',strokeMiterlimit:10 }}/><path d="M46.91,31.43c0,1.68-1.32,2.66-3.84,2.66H38.19v-9.8h4.6c2.35,0,3.61,1,3.61,2.55A2.35,2.35,0,0,1,45.14,29,2.41,2.41,0,0,1,46.91,31.43ZM40,25.72v2.7h2.58c1.26,0,2-.45,2-1.34s-.72-1.36-2-1.36Zm5.06,5.53c0-1-.74-1.41-2.11-1.41H40v2.83h3C44.33,32.67,45.07,32.23,45.07,31.25Z" style={{fill:'#414042' } } /><path d="M55.92,26.61v7.48H54.25v-1a3,3,0,0,1-2.41,1,3,3,0,0,1-3.22-3.3V26.61h1.75v4c0,1.36.65,2,1.75,2a2,2,0,0,0,2.05-2.25V26.61Z" style={{fill:'#414042' } } /><path d="M62.71,33.69a2.72,2.72,0,0,1-1.68.5,2.3,2.3,0,0,1-2.58-2.52v-3.6H57.22v-1.4h1.23V25H60.2v1.71h2v1.4h-2v3.56c0,.73.37,1.12,1,1.12a1.59,1.59,0,0,0,1-.31Z" style={{fill:'#414042' } } /><path d="M68.46,33.69a2.72,2.72,0,0,1-1.68.5,2.29,2.29,0,0,1-2.57-2.52v-3.6H63v-1.4h1.24V25H66v1.71h2v1.4H66v3.56c0,.73.36,1.12,1,1.12a1.55,1.55,0,0,0,1-.31Z" style={{fill:'#414042' } } /><path d="M69,30.35a4,4,0,1,1,4,3.84A3.76,3.76,0,0,1,69,30.35Zm6.2,0a2.22,2.22,0,1,0-4.44,0,2.22,2.22,0,1,0,4.44,0Z" style={{fill:'#414042' } } /><path d="M86.05,29.81v4.28H84.3V30c0-1.33-.66-2-1.78-2a2,2,0,0,0-2.09,2.25v3.78H78.68V26.61h1.67v1a3.26,3.26,0,0,1,2.58-1A2.92,2.92,0,0,1,86.05,29.81Z" style={{fill:'#414042' } } /></svg>,
			label: 'Outline Round',
			value: 'outline-round',
		},
	]

	let buttonSizes = [

	]


	return (props) => {
		const { Fragment } = wp.element;
		const { ToggleControl } = wp.components;
		const { InspectorAdvancedControls } = wp.blockEditor;
		const { 
			attributes, 
			setAttributes, 
			isSelected 
		} = props;

		let blockClassNames = attributes.className ?? '';
		return (
			<Fragment>
				<BlockEdit {...props} />
				{isSelected && (props.name == 'core/button') && 
					<>
						<InspectorControls>
							<PanelStyleOptions 
							{...props} 
							styles={buttonStyles}
							prefix="wsu-button--style-" 
							></PanelStyleOptions>
							<PanelDisplayOptions {...props} >
								<SelectControl
									label="Button Size"
									value={ getBlockClassName( blockClassNames, 'wsu-button--size-' ) }
									options={ [
										{ label: 'Large', value: 'large' },
										{ label: 'Medium', value: '' },
										{ label: 'Small', value: 'small' },
									] }
									onChange={ ( buttonSize ) => { 
										setAttributes( { className: addBlockClassName( blockClassNames, 'wsu-button--size-', buttonSize  ) } ) 
									} }
								/>
							</PanelDisplayOptions>
							<SpacingClassNameSelector
								title="Space Settings"
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
											}
										]
									},
								]}
								{...props}>					
							</SpacingClassNameSelector>
						</InspectorControls>
					</>
				}
			</Fragment>
		);
	};
}, 'coreButtonControls');


wp.hooks.addFilter(
	'editor.BlockEdit',
	'wsu/core-button-controls',
	coreButtonControls
);
