import { InnerBlocks, InspectorControls, useBlockProps, InspectorAdvancedControls } from '@wordpress/block-editor';
import { ColorClassNameSelector, ColorClassControl, SpacingClassNameSelector, BreakPointControl, BorderControl } from '../../../assets/src/js/partials/block-controls/blockControls';
import { useEffect, useState } from '@wordpress/element';

import {
	PanelColorOptions,
    PanelDisplayOptions,
} from "../../../assets/src/js/partials/block-panels/blockPanels";

const {
    SelectControl,
	TextControl,
	ToggleControl,
	Panel, 
	PanelBody, 
	PanelRow
} = wp.components;

const borderColors = [
	{ name: 'default', color: '#e6e6e6' },
	{ name: 'white', color: '#ffffff' },
	{ name: 'crimson', color: '#A60F2D' },
	{ name: 'crimson-light', color: '#CA1237' },
	{ name: 'autumn', color: '#FF6727' },
	{ name: 'goldfinch', color: '#F3E700' },
	{ name: 'vineyard', color: '#AADC24' },
	{ name: 'pacificsky', color: '#5BC3F5' },
	{ name: 'midnight', color: '#002D61' },
];

//import { Panel, PanelBody, PanelRow } from '@wordpress/components';

import { 
	PanelAnimate
} from "../../../assets/src/js/partials/block-panels/blockPanels";

const DEFAULT_SPACING = {
	spaceBefore: 'none',
	spaceAfter: 'none',
	spaceTop: 'none',
	spaceBottom: 'none',
};

const Edit = ( props ) => {
	const blockProps = useBlockProps( { 
        className: 'wsu-column', 
        style: {}, 
    } );

	const backgroundColors = [
		{ name: 'White', color: '#ffffff', className: 'white' },			
		{ name: 'Gray 0', color: '#f7f7f7', className: 'gray-0' },
		{ name: 'Gray 5', color: '#f2f2f2', className: 'gray-5' },
		{ name: 'Gray 10', color: '#e6e6e6', className: 'gray-10' },
		{ name: 'Gray 85', color: '#262626', className: 'gray-85' },
		{ name: 'Gray 95', color: '#080808', className: 'gray-95' },
	];

	let {
		attributes,
		setAttributes,
	} = props;

	const [spacingDefaults, setSpacingDefaults] = useState(DEFAULT_SPACING);

	useEffect( () => {
		
		if(props.attributes.className && props.attributes.className.includes('wsu-color-background--')){
			setSpacingDefaults({
				spaceBefore: 'none',
				spaceAfter: 'xmedium',
				spaceTop: 'xmedium',
				spaceBottom: 'none',
			});
		}else{
			setSpacingDefaults(DEFAULT_SPACING);
		}
		
	}, [props.attributes.className]);

    return (
		<>
			<InspectorControls>
				<PanelDisplayOptions isOpen={true} >
					<BorderControl {...props} />
				</PanelDisplayOptions>
				<PanelColorOptions>
					<ColorClassControl
						{ ...props }
						colors={backgroundColors}
						label='Background Color'
						value='#f2f2f2'
						/>
					<ColorClassControl
						{ ...props }
						colors={borderColors}
						label='Border Color'
						value='#e6e6e6'
						prefix='wsu-border--color-' 
						/>
				</PanelColorOptions>
				<PanelAnimate { ...props } ></PanelAnimate>
				{ attributes.customWidth && <PanelBody title="Column Width" initialOpen={ false } >
					<TextControl
						label="Column Width"
						value={ attributes.width ? attributes.width : '' }
						onChange={ ( width ) => setAttributes( {width} ) }
					/>
					<BreakPointControl {...props} />
            		</PanelBody> 
				}
				<SpacingClassNameSelector
					title="Space Settings"
					spaceSettings={[
						{
							label: 'Margin (Outside Spacing)',
							properties: [
								{
									label: 'Top',
									prefix: 'wsu-spacing-before--',									
									default: spacingDefaults['spaceBefore'],
								},
								{
									label: 'Bottom',
									prefix: 'wsu-spacing-after--',									
									default: spacingDefaults['spaceAfter'],
								}
							]
						},
						{
							label: 'Padding (Inside Spacing)',
							properties: [
								{
									label: 'Top',
									prefix: 'wsu-spacing-top--',
									default: spacingDefaults['spaceTop'],
								},
								{
									label: 'Bottom',
									prefix: 'wsu-spacing-bottom--',
									default: spacingDefaults['spaceBottom'],									
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
			<InspectorAdvancedControls>
				<ToggleControl
					label={ 'Allow Custom Width' }
					checked={ attributes.customWidth }
					onChange={ ( customWidth) => { setAttributes( {  customWidth } ) } }
					help={ 'Use Version 2 of the Card.'}
				/>
			</InspectorAdvancedControls>
			<div { ...blockProps }  >
				<InnerBlocks
					templateLock={ false }
				/>
			</div>
		</>
    )
}

export default Edit;