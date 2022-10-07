const { __ } = wp.i18n;

const {
	InnerBlocks,
	InspectorControls,
	useBlockProps
} = wp.blockEditor;

const {
	TextControl,
	ToggleControl,
} = wp.components;

import { 
    HeadingTagControl,
	ColorClassControl,
	SpacingClassNameSelector,
	AlignItemControl,
	MaxWidthControl,
	BorderControl,
} from "../../../assets/src/js/partials/block-controls/blockControls";

import { 
    PanelDisplayOptions,
	PanelColorOptions,
	PanelAnimate,
	PanelStyleOptions,
	PanelGeneralOptions,
} from "../../../assets/src/js/partials/block-panels/blockPanels";


const Edit = ( props ) => {

	let {
		attributes, 
		setAttributes 
	} = props;

	const blockProps = useBlockProps( {
        className: 'wsu-callout',
        style: {},
    } );

	const backgroundColors = [
        { name: 'gray-5', color: '#f2f2f2' },
        { name: 'white', color: '#ffffff' },
        { name: 'gray-85', color: '#262626' },
    ];

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

	let calloutStyles = [
		{
		  icon: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60"><rect x="9.45" y="5.8" width="105.1" height="48.4" rx="1.88" fill="#d1d3d4" stroke="#939598" stroke-miterlimit="10"/></svg>
		  ),
		  label: "Default",
		  value: "",
		},
		{
		  icon: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 60"><rect width="124" height="60" fill="#d1d3d4"/><rect x="9.45" y="5.8" width="105.1" height="48.4" fill="#fff"/></svg>
		  ),
		  label: "Basic",
		  value: "basic",
		},
	];

    return (
		<>
		<InspectorControls>
			<PanelGeneralOptions isOpen={true} >
				<TextControl
					label="Callout Heading"
					value={ attributes.title ? attributes.title : '' }
					onChange= { ( title ) => setAttributes( { title } ) }
				/>
				{ attributes.title && <HeadingTagControl { ...props } /> }
				<ToggleControl
					label="Use HTML <aside> tag"
					checked={ attributes.useAsideTag }
					onChange={ ( useAsideTag ) => { setAttributes( { useAsideTag } ) } }
					/>
			</PanelGeneralOptions>
			<PanelDisplayOptions isOpen={false} >
					<BorderControl {...props} />
					<AlignItemControl {...props} />
					<MaxWidthControl {...props} />
			</PanelDisplayOptions>
			<PanelStyleOptions
			{...props}
				styles={calloutStyles}
				prefix="wsu-callout--style-"
				></PanelStyleOptions>
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
					value=''
					prefix='wsu-border--color-'
					/>
			</PanelColorOptions>
			<PanelAnimate { ...props } ></PanelAnimate>
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
		<div { ...blockProps }  >
			{ attributes.title && <h2 class="wsu-callout__title">{attributes.title}</h2> }
			<InnerBlocks
				templateLock={ false }
			/>
		</div>
		</>
    )

}

export default Edit;