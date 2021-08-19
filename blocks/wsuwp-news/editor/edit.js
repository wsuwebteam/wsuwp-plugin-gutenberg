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

	let newsPlaceholder; 

	switch( attributes.type ) {

		case 'card':
			newsPlaceholder = <CardPlaceholder />;
			break;
		
		case 'list':
			newsPlaceholder = <ListPlaceholder />
			break;
		
		default:
			newsPlaceholder = <IndexPlaceholder />

	}

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
					blockName='wsuwp/news'
					>
					{newsPlaceholder}
				</ApiRenderBlock>
			</div>
		</>
	)

}


const CardPlaceholder = ( props ) => {

	return (
		<div className="wsu-card wsu-news-card wsu-card--placeholder">
			<div className="wsu-image-frame  wsu-image-frame--fixed-ratio">
			</div>
			<div className="wsu-card__content">
				<div className="wsu-title">
					Lorem ipsum dolor sit amet
				</div>
				<div className="wsu-caption">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl sed orci ullamcorper convallis. Nullam interdum, tellus eu consequat semper, turpis turpis accumsan dui, nec mattis ipsum ante eget ipsum. Pellentesque ut gravida ante.
				</div>
			</div>
		</div>
	)
}

const IndexPlaceholder = ( props ) => {

	return (
		<div className="wsu-card wsu-news-card wsu-card--placeholder wsu-card--horizontal">
			<div className="wsu-card__content">
				<div className="wsu-title">
					Lorem ipsum dolor sit amet
				</div>
				<div className="wsu-caption">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl sed orci ullamcorper convallis. Nullam interdum, tellus eu consequat semper, turpis turpis accumsan dui, nec mattis ipsum ante eget ipsum. Pellentesque ut gravida ante.
				</div>
			</div>
			<div className="wsu-image-frame  wsu-image-frame--fixed-ratio">
			</div>
		</div>
	)

}

const ListPlaceholder = ( props ) => {

	<div className="wsu-card wsu-news-card wsu-card--placeholder wsu-card--horizontal wsu-card--small">
		<div className="wsu-card__content">
			<div className="wsu-title">
				Lorem ipsum dolor sit amet
			</div>
			<div className="wsu-caption">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl sed orci ullamcorper convallis. Nullam interdum, tellus eu consequat semper, turpis turpis accumsan dui, nec mattis ipsum ante eget ipsum. Pellentesque ut gravida ante.
			</div>
		</div>
	</div>

}

export default Edit;
