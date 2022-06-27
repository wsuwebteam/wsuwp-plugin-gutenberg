const { __ } = wp.i18n;

const {
	InnerBlocks,
	InspectorControls,
	useBlockProps
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
	addBlockClassName,
	setBlockClassName,
	getBlockClassNameValue,
	setChildBlockClassName,
	setBlockClassNameBool,
} from "../../../assets/src/js/partials/block-utilities/blockUtilities";


const Edit = ( props ) => {

	let {
		attributes, 
		setAttributes 
	} = props;

	const blockProps = useBlockProps( {
        className: 'wsu-decorator',
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

	const decoratorStyles = [
		{ label: 'Triangle: Crimson Right', value: 'triangle-crimson-right' },
		{ label: 'Triangle: Crimson Left', value: 'triangle-crimson-left' },
		{ label: 'Triangle: Gray Right', value: 'triangle-gray-right' },
		{ label: 'Triangle: Gray Left', value: 'triangle-gray-left' },
		{ label: 'Block: Gray', value: 'block-gray' },
		{ label: 'Block: Gray Dark', value: 'block-gray-dark' },
		{ label: 'Block: Crimson', value: 'block-crimson' },
		{ label: 'Block: Crimson Light', value: 'block-crimson-light' },
		{ label: 'None', value: '' },
	];


	const getDecoratorName = () => {

		let value = getBlockClassNameValue( attributes,'wsu-decorator--style-', '' );
		let name = 'None'

		decoratorStyles.forEach( ( style ) => {

			if ( style.value === value ) {
				name = style.label;
			}

		} );

		return name;

	}


    return (
		<>
		<InspectorControls>
            <PanelDisplayOptions isOpen={true} >
			
				<TextControl
					label="Before Outline"
					value={ attributes.before }
					onChange= { ( before ) => setAttributes( { before } ) }
				/>
				<TextControl
					label="Outline"
					value={ attributes.outline }
					onChange= { ( outline ) => setAttributes( { outline } ) }
				/>
				<TextControl
					label="After"
					value={ attributes.after }
					onChange= { ( after ) => setAttributes( { after } ) }
				/>
				<TextControl
					label="Tag"
					value={ attributes.tag }
					onChange= { ( tag ) => setAttributes( { tag } ) }
				/>
            </PanelDisplayOptions>
		</InspectorControls>
		<h2 { ...blockProps }  >{ attributes.before } { attributes.outline } { attributes.after }</h2>
		</>
    )

}

export default Edit;