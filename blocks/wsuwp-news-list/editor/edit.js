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
    HeadingTagControl,
} from "../../../assets/src/js/partials/block-controls/blockControls";

import { ColorClassNameSelector, SpacingClassNameSelector} from '../../../assets/src/js/partials/block-controls/blockControls'
import { useEffect, useState } from '@wordpress/element';
import { PanelInsertPost, PanelDisplayOptions, PanelFeedPosts, PanelGeneralOptions, PanelFeedOptions, PanelAdvancedFeedOptions } from "../../../assets/src/js/partials/block-panels/blockPanels";
import { ApiRenderBlock } from '../../../assets/src/js/partials/block-components/blockComponents';
import { 
    FeedPostTypeControl,
    FeedTaxonomyControl,
    FeedCountControl,
    FeedTermControl,
    FeedOffsetControl,
    FeedUseAndLogicControl,
    FeedHostControl,
    FeedPanel,
    FeedPanelAdvanced
} from '../../../assets/src/js/partials/block-controls/feed-controls/feed-controls';



const Edit = ( props ) => {

    let  { className, attributes, setAttributes } = props;

    const blockProps = useBlockProps( {
        className: 'wsu-news-list',
        style: {},
    } );

    return (
        <>
            <InspectorControls key="setting">
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
                </PanelDisplayOptions>
                <FeedPanel>
                    <FeedPostTypeControl {...props} />
                    <FeedTaxonomyControl {...props} />
                    <FeedTermControl {...props} />
                    <FeedCountControl {...props} />
                </FeedPanel>
                <FeedPanelAdvanced >
                    <FeedUseAndLogicControl {...props} />
                    <FeedOffsetControl {...props} />
                    <FeedHostControl {...props} />
                </FeedPanelAdvanced>
            </InspectorControls>
            <div { ...blockProps }  >
                    <ApiRenderBlock 
                        attributes={attributes}
                        blockName='wsuwp/news-list'
                        >
                            No News Items Found
                    </ApiRenderBlock>
                </div>
        </>
    )

}


export default Edit;