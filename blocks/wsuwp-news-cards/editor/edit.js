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
    ToggleControl
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
} from "../../../assets/src/js/partials/block-controls/blockControls";

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
            <ToggleControl
                label="Show Button"
                checked={ attributes.showButton }
                onChange={ ( showButton ) => { setAttributes( { showButton } ) } }
                />
            <ToggleControl
                label="Show Heading"
                checked={ attributes.showHeading }
                onChange={ ( showHeading ) => { setAttributes( { showHeading } ) } }
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

    if ( 'feed' === attributes.source ) {

        return (
            <>
                <InspectorControls>
                    <NewsCardGeneralOptions  { ...props } />
                    <NewsCardDisplayOptions  { ...props } /> 
                    <PanelFeedOptions>
                        <PostTypeSelectControl { ...props } />
                        <TaxonomyTypeSelectControl { ...props } />
                        <TaxonomyTermSelectControl { ...props } />
                        <CountControl { ...props } /> 
                    </PanelFeedOptions>
                    <PanelAdvancedFeedOptions>
                        <OffsetControl { ...props } /> 
                        <HostControl { ...props } />
                        <RequireImageControl { ...props } />
                        <RequireFirstImageControl { ...props } />
                    </PanelAdvancedFeedOptions>
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
    } else if ( 'select' === attributes.source ) {

        return (
            <>
                <InspectorControls>
                    <NewsCardGeneralOptions  { ...props } />
                    <NewsCardDisplayOptions  { ...props } /> 
                    <PanelInsertPost 
                        attributes={attributes}
                        onChange={ ( value ) => setAttributes( { postIn: value } ) }
                        postTypes={ [ 'post', 'page' ] }
                        placeholder="Search posts..."
                        />
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

}


export default Edit;