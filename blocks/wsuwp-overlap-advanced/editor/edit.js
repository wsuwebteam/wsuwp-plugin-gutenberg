const { __ } = wp.i18n;

const {
	InnerBlocks,
	InspectorControls,
	InspectorAdvancedControls,
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
	DeveloperToolsControl
} from "../../../assets/src/js/partials/block-controls/blockControls";

import { 
    PanelDisplayOptions,
	PanelColorOptions,
	PanelDeveloperTools
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
        className: 'wsu-overlap',
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
				<ToggleControl
					label="Reverse column order, right column over left"
					help="Column order will be stacked with left column over right column on screens less than tablet (768 px)"
					checked={ hasBlockClassName( attributes, 'wsu-overlap--reversed') }
					onChange={ ( reversedCols ) => { setBlockClassNameBool( attributes, setAttributes, 'wsu-overlap--reversed', reversedCols ) } }
					/>
            </PanelDisplayOptions>
			{attributes.developerTools && <PanelDeveloperTools 
				{ ...props}
				maxWidth={ true }
				alignItem={ true }
				positionElement={ true } 
				>
				</PanelDeveloperTools>}
		</InspectorControls>
		<InspectorAdvancedControls>
			<DeveloperToolsControl { ...props } />
		</InspectorAdvancedControls>
		<div { ...blockProps } >
            <div className="wsu-overlap__container">
                <InnerBlocks
                    template={ [
                        ['wsuwp/overlap-column', {}, [[ 'core/paragraph', {},[] ]]],
                        ['wsuwp/overlap-column', {}, [[ 'core/paragraph', {},[] ]]],
                    ] }
                    templateLock={ "insert" }
                    allowedBlocks={ ['wsuwp/overlap-column'] }
                />
            </div>
        </div>
		</>  
    )

}

export default Edit; 