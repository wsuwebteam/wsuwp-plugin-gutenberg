const { __ } = wp.i18n;

const { InnerBlocks } = wp.blockEditor;

const {
	InspectorControls,
	useBlockProps
} = wp.blockEditor;

const {
	PanelBody,
	TextControl,
	SelectControl,
	Button,
	FocalPointPicker,
	BaseControl
} = wp.components;

import { FormatSelector, SelectPost } from "../../../assets/src/js/partials/block-controls/blockControls";
import { PanelInsertPost } from "../../../assets/src/js/partials/block-panels/blockPanels"; 


const Edit = ( { className, attributes, setAttributes } ) => {

	const blockProps = useBlockProps( {
        className: 'wsu-card wsu-card-news',
        style: {},
    } );

	return (

		<div { ...blockProps }  >
			<InspectorControls key="setting">
				<PanelInsertPost />
			</InspectorControls>
			News Card
		</div>
	)

}

export default Edit;
