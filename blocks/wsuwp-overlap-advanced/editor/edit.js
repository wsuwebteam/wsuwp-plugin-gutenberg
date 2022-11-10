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
        className: 'wsu-advanced-overlap',
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
	
            </PanelDisplayOptions>
		</InspectorControls>
		<div { ...blockProps } >
            <div className="wsu-advanced-overlap__container">
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