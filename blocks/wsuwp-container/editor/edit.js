const { __ } = wp.i18n;

const {
	InnerBlocks,
	InspectorControls,
	useBlockProps,
    InspectorAdvancedControls,
} = wp.blockEditor;

const {
	TextControl,
	ToggleControl,
    SelectControl,
} = wp.components;

import { 
	ColorClassControl,
	SpacingClassNameSelector,
} from "../../../assets/src/js/partials/block-controls/blockControls";

import { 
    PanelDisplayOptions,
	PanelColorOptions,
} from "../../../assets/src/js/partials/block-panels/blockPanels";

import {
    hasBlockClassName,
    setBlockClassNameBool,
} from "../../../assets/src/js/partials/block-utilities/blockUtilities";


const Edit = ( props ) => {

	let {
		attributes, 
		setAttributes 
	} = props;

	const blockProps = useBlockProps( {
        className: 'wsu-container',
        style: {},
    } );

	const backgroundColors = [
        { name: 'gray-5', color: '#f2f2f2' },
        { name: 'white', color: '#ffffff' },
        { name: 'gray-85', color: '#262626' },
    ];

	const borderColors = [
		{ name: 'default', color: '#ffffff' },
		{ name: 'white', color: '#ffffff' },
		{ name: 'crimson', color: '#A60F2D' },
		{ name: 'crimson-light', color: '#CA1237' },
		{ name: 'autumn', color: '#FF6727' },
		{ name: 'goldfinch', color: '#F3E700' },
		{ name: 'vineyard', color: '#AADC24' },
		{ name: 'pacificsky', color: '#5BC3F5' },
		{ name: 'midnight', color: '#002D61' },
    ];

    const containerTags = [
		{ label: 'div', value: 'div' },
		{ label: 'section', value: 'section' },
		{ label: 'nav', value: 'nav' },
		{ label: 'span', value: 'span' },
        { label: 'header', value: 'header' },
        { label: 'footer', value: 'footer' },
	];


    return (
		<>
		<InspectorControls>
            <PanelDisplayOptions isOpen={true} >
                <SelectControl
					label="HTML Tag"
					value={ attributes.tag }
					options={ containerTags } 
					onChange={ ( tag ) => setAttributes( { tag } ) }
				/>
            </PanelDisplayOptions>
			<PanelColorOptions>
				<ColorClassControl
					{ ...props }
					colors={backgroundColors}
					label='Background Color'
					value='#ffffff'
					/>
				<ColorClassControl
					{ ...props }
					colors={borderColors}
					label='Border Color'
					value='#ffffff'
					prefix='wsu-callout--color-'
					/>
			</PanelColorOptions>
			<SpacingClassNameSelector
					title="Space Settings"
					spaceSettings={[
						{
							label: 'Margin (Outside Spacing)',
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
        <InspectorAdvancedControls>
            <ToggleControl
                label="Full Width"
                checked={ hasBlockClassName( attributes, 'wsu-width--full') }
                onChange={ ( fullWidth ) => { setBlockClassNameBool( attributes, setAttributes, 'wsu-width--full', fullWidth ) } }
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