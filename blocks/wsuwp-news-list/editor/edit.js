const { __ } = wp.i18n;

const { InnerBlocks } = wp.blockEditor;

const { InspectorControls, useBlockProps } = wp.blockEditor;

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

import { dispatch, select } from "@wordpress/data";

import {
  createBlock,
  createBlocksFromInnerBlocksTemplate,
  store as blocksStore,
} from "@wordpress/blocks";

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

import {
  ColorClassNameSelector,
  SpacingClassNameSelector,
} from "../../../assets/src/js/partials/block-controls/blockControls";
import { useEffect, useState } from "@wordpress/element";
import {
  PanelInsertPost,
  PanelDisplayOptions,
  PanelFeedPosts,
  PanelGeneralOptions,
  PanelFeedOptions,
  PanelAdvancedFeedOptions,
} from "../../../assets/src/js/partials/block-panels/blockPanels";
import { ApiRenderBlock } from "../../../assets/src/js/partials/block-components/blockComponents";
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


const Edit = (props) => {
  let { className, attributes, setAttributes } = props;
  

  const blockProps = useBlockProps({
    className: "wsu-news-list",
    style: {},
  });

  return (
    <>
      <InspectorControls key="setting">
        <PanelDisplayOptions>
          <ToggleControl
            label="Hide Caption"
            checked={attributes.hideCaption}
            onChange={(hideCaption) => {
              setAttributes({ hideCaption });
            }}
          />
          <ToggleControl
            label="Hide Date"
            checked={attributes.hideDate}
            onChange={(hideDate) => {
              setAttributes({ hideDate });
            }}
          />
        </PanelDisplayOptions>
        <FeedPanel>
          <FeedPostTypeControl
            label="Post type"
            help="Select post type to display"
            host={attributes.host || window.wsu.ROOT_URL}
            value={attributes.postType}
            onChange={(postType) => setAttributes({ postType })}
          />
          <FeedTaxonomyControl
            label="Taxonomy"
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
              onChange={ (terms) => setAttributes({ terms: terms.termsList, termsSelected: terms.termsSelected } ) }
            />
          )}
          <FeedCountControl {...props} />
        </FeedPanel>
        <FeedPanelAdvanced>
          <FeedUseAndLogicControl {...props} />
          <FeedOffsetControl {...props} />
          <FeedHostControl {...props} />
        </FeedPanelAdvanced>
      </InspectorControls>
      <div {...blockProps}>
        <ApiRenderBlock
          attributes={attributes}
          blockName="wsuwp/news-list"
        >
          No News Items Found
        </ApiRenderBlock>
      </div>
    </>
  );
};

export default Edit;
