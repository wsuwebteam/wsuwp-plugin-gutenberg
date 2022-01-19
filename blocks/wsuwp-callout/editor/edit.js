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
} from "../../../assets/src/js/partials/block-controls/blockControls";

import { 
    PanelDisplayOptions,
	PanelColorOptions,
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

    return (
		<>
		<InspectorControls>
			<PanelDisplayOptions isOpen={true} >
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
					prefix='wsu-callout--color-'
					/>
			</PanelColorOptions>
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