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
		{ label: 'Triangle: Crimson WSU Steep Right', value: 'triangle-crimson-wsu-steep-right' },
		{ label: 'Triangle: Crimson WSU Steep Left', value: 'triangle-crimson-wsu-steep-left' },
		{ label: 'Triangle: Gray Right', value: 'triangle-gray-right' },
		{ label: 'Triangle: Gray Left', value: 'triangle-gray-left' },
		{ label: 'Block: Gray', value: 'block-gray' },
		{ label: 'Block: Gray WSU', value: 'block-gray-wsu' },
		{ label: 'Block: Gray Dark', value: 'block-gray-dark' },
		{ label: 'Block: Crimson', value: 'block-crimson' },
		{ label: 'Block: Crimson WSU', value: 'block-crimson-wsu' },
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
				<SelectControl
					label="Decorator Style"
					value={ getBlockClassNameValue( attributes,'wsu-decorator--style-', '' ) }
					options={ decoratorStyles } 
					onChange={ ( style ) => { setBlockClassName( attributes, setAttributes, 'wsu-decorator--style-', style ) } }
				/>
				<TextControl
					label="Top"
					value={ attributes.top }
					onChange= { ( top ) => setAttributes( { top } ) }
				/>
				<TextControl
					label="Bottom"
					value={ attributes.bottom }
					onChange= { ( bottom ) => setAttributes( { bottom } ) }
				/>
				<TextControl
					label="Left"
					value={ attributes.left }
					onChange= { ( left ) => setAttributes( { left } ) }
				/>
				<TextControl
					label="Right"
					value={ attributes.right }
					onChange= { ( right ) => setAttributes( { right } ) }
				/>
				<TextControl
					label="width"
					value={ attributes.width }
					onChange= { ( width ) => setAttributes( { width } ) }
				/>
				<TextControl
					label="height"
					value={ attributes.height }
					onChange= { ( height ) => setAttributes( { height } ) }
				/>
				<SelectControl
					label="Z Index"
					value={ getBlockClassNameValue( attributes,'wsu-z-index--', '' ) }
					options={ [
						{ label: 'None', value: '' },
						{ label: 'Content 1', value: '1-content' },
						{ label: 'Content 2', value: '2-content' },
						{ label: 'Content 3', value: '3-content' },
						{ label: 'Content 4', value: '4-content' },
						{ label: 'Content 5', value: '5-content' },
						{ label: 'Content 6', value: '6-content' },
					] } 
					onChange={ ( style ) => { setBlockClassName( attributes, setAttributes, 'wsu-z-index--', style ) } }
				/>
            </PanelDisplayOptions>
		</InspectorControls>
		<div { ...blockProps }  >Decorator: { getDecoratorName() }</div>
		</>
    )

}

export default Edit;