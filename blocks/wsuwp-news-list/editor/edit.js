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
  ToggleControl,
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

const ignorePostTypes = [
  "attachment",
  "tribe_organizer",
  "wp_block",
  "theme_part",
  "tribe_venue",
  "customize_changeset",
  "curated_news",
  "news_feed",
];

const Edit = (props) => {
  let { className, attributes, setAttributes } = props;
  const [renderAttributes, setRenderAttributes] = useState(
    processAttributesForRender(attributes)
  );

  function processAttributesForRender(attributes) {
    const renderAttributes = JSON.parse(JSON.stringify(attributes));

    if (renderAttributes.terms.length > 0) {
      renderAttributes.terms = renderAttributes.terms
        .map(function (term) {
          return term.id.toString();
        })
        .join(",");
    }

    return renderAttributes;
  }

  useEffect(() => {
    const renderAttributes = processAttributesForRender(attributes);
    setRenderAttributes(renderAttributes);
  }, [attributes.terms]);

  // useEffect(() => {
  //   // TODO:
  //   // - do some work to valid url and prevent errors. Probably do in feedHostControl
  //   // - reset feed option fields
  //   console.log("host edited");
  // }, [attributes.host]);

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
            ignorePostTypes={ignorePostTypes}
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
              value={attributes.terms}
              onChange={(terms) => setAttributes({ terms })}
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
          attributes={renderAttributes}
          blockName="wsuwp/news-list"
        >
          No News Items Found
        </ApiRenderBlock>
      </div>
    </>
  );
};

export default Edit;
