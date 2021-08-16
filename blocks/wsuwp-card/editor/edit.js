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
	BaseControl,
	ToggleControl
} = wp.components;

import { FormatSelector, PerRow } from "../../../assets/src/js/partials/block-controls/blockControls";
import { PanelInsertPost, PanelDisplayOptions, PanelFeedPosts, PanelGeneralOptions } from "../../../assets/src/js/partials/block-panels/blockPanels";
import { ApiRenderBlock } from '../../../assets/src/js/partials/block-components/blockComponents';

import apiFetch from '@wordpress/api-fetch';


const Edit = ( { className, attributes, setAttributes } ) => {

	const blockProps = useBlockProps( {
        className: 'wsu-card wsu-card-news',
        style: {},
    } );

	let queryAttrs = attributes;

	queryAttrs['hideLink'] = true;


	return (
		<>
			
			<div { ...blockProps }  >
				<InspectorControls key="setting">
					<PanelGeneralOptions>
						<TextControl
							label="Header"
							value={ attributes.headerText ? attributes.headerText : '' }
							onChange= { ( headerText ) => setAttributes( { headerText } ) }
						/>
						<TextControl
							label="Header Link"
							value={ attributes.headerLink ? attributes.headerLink : '' }
							onChange= { ( headerLink ) => setAttributes( { headerLink } ) }
						/>
						<TextControl
							label="Button Text"
							value={ attributes.buttonText ? attributes.buttonText : '' }
							onChange= { ( buttonText ) => setAttributes( { buttonText } ) }
						/>
						<TextControl
							label="Button Link"
							value={ attributes.buttonLink ? attributes.buttonLink : '' }
							onChange= { ( buttonLink ) => setAttributes( { buttonLink } ) }
						/>

					</PanelGeneralOptions>
					<PanelDisplayOptions>
						<ToggleControl
							label="Hide Caption"
							checked={ attributes.hideCaption }
							onChange={ ( hideCaption ) => { setAttributes( { hideCaption } ) } }
							/>
						<ToggleControl
							label="Hide Date"
							checked={ attributes.hideDate }
							onChange={ ( hideDate ) => { setAttributes( { hideDate } ) } }
							/>
						<ToggleControl
							label="Hide Image"
							checked={ attributes.hideImage }
							onChange={ ( hideImage ) => { setAttributes( { hideImage } ) } }
							/>
						<ToggleControl
							label="Hide Shown Posts"
							checked={ attributes.hideShownPosts }
							onChange={ ( hideShownPosts ) => { setAttributes( { hideShownPosts } ) } }
							/>						
						<PerRow
							label="Cards Per Row"
							attributes={ attributes }
							value={ attributes.perRow ? attributes.perRow : '' }
							onChange= { ( perRow ) => setAttributes( { perRow } ) }
						/>
					</PanelDisplayOptions>
					<PanelInsertPost 
						attributes={attributes}
						onChange={ ( value ) => setAttributes( { postIn: value } ) }
						postTypes={ [ 'news_article', 'press_release', 'announcement', 'post', 'page' ] }
						placeholder="Search posts..."
						/>
					<PanelFeedPosts
						attributes={attributes}
						setUseFeed={ ( useFeed ) => setAttributes( {useFeed} ) }
						setPostType={ ( postType ) => setAttributes( {postType} ) }
						setTaxonomy={ ( taxonomy ) => setAttributes( {taxonomy} ) }
						setTerms={ ( terms ) => setAttributes( {terms} ) }
						setCount={ ( count ) => setAttributes( {count} ) }
						setOffset={ ( offset ) => setAttributes( {offset} ) }
						>
						<ToggleControl
						label="Require Images"
						checked={ attributes.requireImage }
						onChange={ ( requireImage ) => { setAttributes( { requireImage } ) } }
						/>
						<ToggleControl
						label="Require First Image"
						checked={ attributes.requireFirstImage }
						onChange={ ( requireFirstImage ) => { setAttributes( { requireFirstImage } ) } }
						/>
					</PanelFeedPosts>
				</InspectorControls>
				<ApiRenderBlock 
					attributes={queryAttrs}
					blockName='wsuwp/card'
					/>
			</div>
		</>
	)

}

export default Edit;
