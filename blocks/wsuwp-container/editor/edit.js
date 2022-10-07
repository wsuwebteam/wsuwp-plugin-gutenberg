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
	RangeControl,
} = wp.components;

import { 
	ColorClassControl,
	SpacingClassNameSelector,
	AlignItemControl,
	MaxWidthControl,
} from "../../../assets/src/js/partials/block-controls/blockControls";

import { 
    PanelDisplayOptions,
	PanelColorOptions,
	PanelAnimate,
} from "../../../assets/src/js/partials/block-panels/blockPanels";

import {
    hasBlockClassName,
    setBlockClassNameBool,
	getBlockClassNameValue,
	setBlockClassName,
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
				<AlignItemControl {...props} />
				<MaxWidthControl {...props} />
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
			<PanelAnimate { ...props } ></PanelAnimate>
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
			<ToggleControl
                label="Use Flexbox"
                checked={ hasBlockClassName( attributes, 'wsu-flex--wrap') }
                onChange={ ( fullWidth ) => { setBlockClassNameBool( attributes, setAttributes, 'wsu-flex--wrap', fullWidth ) } }
                />
			{ hasBlockClassName( attributes, 'wsu-flex--wrap' ) && <RangeControl
                label="Flex items per row"
                value={ parseInt( getBlockClassNameValue( attributes, 'wsu-flex--columns-' ) ) }
                onChange={ ( columns ) => setBlockClassName( attributes, setAttributes, 'wsu-flex--columns-', columns ) }
                min={1}
                max={4}
                />
			}
			{ hasBlockClassName( attributes, 'wsu-flex--wrap' ) && <SelectControl
					label="Flex Breakpoint"
					value={ getBlockClassNameValue( attributes, 'wsu-flex--breakpoint-' ) }
					options={ [
						{ label: 'None', value: '' },
						{ label: 'Desktop', value: 'desktop' },
						{ label: 'Tablet Large', value: 'tablet-large' },
						{ label: 'Tablet Medium', value: 'tablet-medium' },
						{ label: 'Table', value: 'tablet' },
						{ label: 'Phone', value: 'phone' },
						{ label: 'Phone Small', value: 'phone-small' },
					] } 
					onChange={ ( breakpoint ) => setBlockClassName( attributes, setAttributes, 'wsu-flex--breakpoint-', breakpoint ) }
				/>
			}
				{ hasBlockClassName( attributes, 'wsu-flex--wrap' ) && <SelectControl
					label="Flex Spacing"
					value={ getBlockClassNameValue( attributes, 'wsu-flex--spacing-' ) }
					options={ [
						{ label: 'None', value: '' },
						{ label: 'Medium', value: 'medium' },
						{ label: 'xMedium', value: 'xmedium' },
						{ label: 'Large', value: 'large' },
						{ label: 'xLarge', value: 'xlarge' },
					] } 
					onChange={ ( spacing ) => setBlockClassName( attributes, setAttributes, 'wsu-flex--spacing-', spacing ) }
				/>
			}
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