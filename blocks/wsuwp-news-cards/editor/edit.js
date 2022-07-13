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
    IconButton,
    ToggleControl,
    PanelRow,
} = wp.components;

const { 
    __experimentalRadio: Radio, 
    __experimentalRadioGroup: RadioGroup 
} = wp.components;

import {
    dispatch,
    select,
  } from '@wordpress/data'

  import {
	createBlock,
	createBlocksFromInnerBlocksTemplate,
	store as blocksStore,
} from '@wordpress/blocks';

import { 
    PostTypeSelectControl,
    TaxonomyTypeSelectControl,
    TaxonomyTermSelectControl,
    CountControl,
    OffsetControl,
    HostControl,
    RequireImageControl,
    RequireFirstImageControl,
    HeadingTagControl,
    PostPicker,
} from "../../../assets/src/js/partials/block-controls/blockControls";

import {
    FeedPostTypeControl,
    FeedTaxonomyControl,
    FeedCountControl,
    FeedTermControl,
    FeedOffsetControl,
    FeedUseAndLogicControl,
    FeedHostControl,
    FeedPanel,
    FeedPanelAdvanced,
  } from "../../../assets/src/js/partials/block-controls/feed-controls/feed-controls";

import { ColorClassNameSelector, SpacingClassNameSelector} from '../../../assets/src/js/partials/block-controls/blockControls'
import { useEffect, useState } from '@wordpress/element';
import { PanelInsertPost, PanelDisplayOptions, PanelFeedPosts, PanelGeneralOptions, PanelFeedOptions, PanelAdvancedFeedOptions } from "../../../assets/src/js/partials/block-panels/blockPanels";
import { ApiRenderBlock } from '../../../assets/src/js/partials/block-components/blockComponents';

const NewsCardGeneralOptions = ( props ) => {

    let  { attributes, setAttributes } = props;
    
    return (
        <PanelGeneralOptions>
            <SelectControl
                label="Content Source"
                value={ attributes.source }
                options={ [
                    { label: 'Feed', value: 'feed' },
                    { label: 'Select Posts', value: 'select' },
                ] }
                onChange={ ( source ) => setAttributes( { source } ) }
            />
        </PanelGeneralOptions>
    )
}


const NewsCardDisplayOptions = ( props ) => {

    let  { attributes, setAttributes } = props;

    return (

        <PanelDisplayOptions>
            <SelectControl
                label="Cards Per Row"
                value={ attributes.perRow }
                options={ [
                    { label: '1', value: '1' },
                    { label: '2', value: '2' },
                    { label: '3', value: '3' },
                    { label: '4', value: '4' },
                ] }
                onChange={ ( perRow ) => setAttributes( { perRow } ) }
            />
            <HeadingTagControl { ...props } />
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
        </PanelDisplayOptions>

    )

}

const FeedPlaceHolder = () => {

    return (
        <span class="wsu-card-news__placeholder">
            <span class="wsu-card-news__placeholder-message">No Cards Found</span>
            <span class="wsu-card-news__placeholder-text">Try changing your feed settings!</span>
        </span>
    )

}



const Edit = ( props ) => {

	let  { className, attributes, setAttributes, clientId } = props;

	const blockProps = useBlockProps( {
        className: 'wsu-card-wrapper wsu-card-wrapper--news wsu-card-wrapper--per-row-' + attributes.perRow,
        style: {},
    } );

    let queryAttrs = attributes;

	queryAttrs['hideLink'] = true;

    console.log( attributes.queryTerms );

    return (
        <>
            <InspectorControls>
                <NewsCardDisplayOptions  { ...props } /> 
                <FeedPanel>
                    <PanelRow>
                        <BaseControl className="wsu-settings__base-control" help="">
                            <BaseControl.VisualLabel className="wsu-settings__label">
                                Feed Type
                            </BaseControl.VisualLabel>
                            <RadioGroup
                                className="wsu-gutenberg-button__radio-group"
                                onChange={(source) => setAttributes({ source }) }
                                checked={attributes.source}
                                defaultChecked='feed'
                            >
                                <Radio value="feed">Basic</Radio>
                                <Radio value="select">Select</Radio>
                            </RadioGroup>
                        </BaseControl>
                    </PanelRow>
                    {attributes.source == 'feed' && (
                        <>
                            <FeedPostTypeControl
                                label="Content Type"
                                help="Select content type to display"
                                host={attributes.host || window.wsu.ROOT_URL}
                                value={attributes.postType}
                                onChange={(postType) => setAttributes({ postType })}
                            />
                            <FeedTaxonomyControl
                                label="Taxonomy (Category, Tag, etc...)"
                                help="Select taxonomy to filter posts by"
                                host={attributes.host || window.wsu.ROOT_URL}
                                postType={attributes.postType}
                                value={attributes.taxonomy}
                                onChange={(taxonomy) => setAttributes({ taxonomy })}
                            />
                            {attributes.taxonomy && (
                                <FeedTermControl
                                label="Terms"
                                help="Filter posts by searching and selecting terms in the selected taxonomy"
                                host={attributes.host || window.wsu.ROOT_URL}
                                taxonomy={attributes.taxonomy}
                                value={attributes.termsSelected}
                                onChange={ (terms) => setAttributes({ terms: terms.termsList, termsSelected: terms.termsSelected, queryTerms: terms.queryTerms } ) }
                                />
                            )}
                        </>
                    )}
                    {attributes.source == 'select' && (
                        <PostPicker { ...props } />
                    )}
                    
                    <FeedCountControl {...props} />
                </FeedPanel>
                <FeedPanelAdvanced>
                    <FeedUseAndLogicControl {...props} />
                    <FeedOffsetControl {...props} />
                    <FeedHostControl {...props} />
                    <RequireImageControl { ...props } />
                    <RequireFirstImageControl { ...props } />
                    <ToggleControl
                        label="Hide Shown Posts"
                        checked={ attributes.hideShownPosts }
                        onChange={ ( hideShownPosts ) => { setAttributes( { hideShownPosts } ) } }
                        />
                </FeedPanelAdvanced>
            </InspectorControls>
            <div { ...blockProps }  >
                <ApiRenderBlock 
                    attributes={queryAttrs}
                    blockName='wsuwp/news-cards'
                    >
                        { 'feed' === attributes.source && <FeedPlaceHolder /> }
                </ApiRenderBlock>
            </div>
        </>
    )

}


export default Edit;