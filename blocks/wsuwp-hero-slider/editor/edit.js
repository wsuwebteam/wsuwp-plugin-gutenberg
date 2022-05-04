import { useState } from "@wordpress/element";
import { PanelGeneralOptions } from "../../../assets/src/js/partials/block-panels/blockPanels";
const { InnerBlocks, InspectorControls, useBlockProps } = wp.blockEditor;
const { ButtonGroup, Button, ToggleControl, TextControl } = wp.components;


const Edit = (props) => {
  const { select, dispatch } = wp.data;
  const { clientId, attributes, setAttributes } = props;

  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);

  const slideBlocks = select("core/block-editor").getBlocks(clientId);

  const blockProps = useBlockProps({
    className: "wsu-gutenberg-hero-slider",
    style: {},
  });

  function selectSlide(blockId, index) {
    index = index !== undefined ? index : getSlideIndex(blockId);
    setSelectedSlideIndex(index);
    dispatch("core/block-editor").selectBlock(blockId);
  }

  function insertBlock() {
    dispatch("core/block-editor")
      .insertBlock(
        wp.blocks.createBlock("wsuwp/hero", {
          requiredClassName: "swiper-slide",
        }),
        slideBlocks.length,
        clientId,
        true
      )
      .then((response) => {
        const block = response.blocks[0];
        selectSlide(block.clientId, response.index);
        console.log(response);
      });
  }

  function removeSlide(blockId) {
    const index = getSlideIndex(blockId);
    const isLastSlideSelected = selectedSlideIndex === slideBlocks.length - 1;

    dispatch("core/block-editor")
      .removeBlock(blockId, false)
      .then(() => {
        // select new index
        if (isLastSlideSelected || selectedSlideIndex > index) {
          setSelectedSlideIndex(Math.max(0, selectedSlideIndex - 1));
        } else if (selectedSlideIndex === index) {
          setSelectedSlideIndex(Math.max(0, index - 1));
        }
      });
  }

  function moveBlock(blockId, oldIndex, newIndex) {
    const isMovingSelectedSlide = selectedSlideIndex === oldIndex;
    newIndex = Math.max(0, Math.min(newIndex, slideBlocks.length - 1)); // ensure new index is within slide range

    dispatch("core/block-editor")
      .moveBlockToPosition(blockId, clientId, clientId, newIndex)
      .then(() => {
        if (isMovingSelectedSlide) {
          setSelectedSlideIndex(newIndex);
        } else if (newIndex === selectedSlideIndex) {
          setSelectedSlideIndex(oldIndex);
        }
      });
  }

  function getSlideIndex(blockId) {
    return slideBlocks.findIndex((slide) => slide.clientId === blockId);
  }

  return (
    <>
      <InspectorControls>
				<PanelGeneralOptions>
          <ToggleControl
                label="Autoplay Slider"
                checked={ attributes.autoplay }
                onChange= { ( val ) => setAttributes( { autoplay: val } ) }							
                help="Slider will automatically advance to the next slide on a time interval."
          />

          {attributes.autoplay === true && <TextControl
						label="Delay between slides"
            help="Delay between slides in milliseconds. 1000 = 1 second."
            placeholder="5000"
						value={ attributes.autoplayDelay }
						onChange= { ( delay ) => setAttributes( { autoplayDelay: delay } ) }
					/>}
        </PanelGeneralOptions>
      </InspectorControls>

      <div {...blockProps} data-selected-slide-index={selectedSlideIndex}>
        <div className="wsu-gutenberg-hero-slider__slides">
          <InnerBlocks
            template={[["wsuwp/hero", {
              requiredClassName: "swiper-slide",
            }]]}
            templateLock={false}
            allowedBlocks={["wsuwp/hero"]}
            orientation="horizontal"
            renderAppender={false}
            __experimentalCaptureToolbars={true}
          />
        </div>

        {slideBlocks && (
          <div className="wsu-gutenberg-hero-slider__controls">
            {slideBlocks.map((b, i) => (
              <div
                key={`slide-${i}`}
                className={`wsu-gutenberg-hero-slider__control-container${
                  selectedSlideIndex === i ? " is-selected" : ""
                }`}
              >
                {/* TODO: Disable/hide specific buttons when actions not allowed */}
                {slideBlocks.length > 1 && (
                  <div className="wsu-gutenberg-hero-slider__sub-controls">
                    <ButtonGroup className="wsu-gutenberg-hero-slider__sub-controls-group">
                      <Button
                        showTooltip={true}
                        label="Move Left"
                        icon="arrow-left-alt2"
                        isSmall={true}
                        iconSize={16}
                        disabled={i === 0}
                        onClick={() => moveBlock(b.clientId, i, i - 1)}
                      ></Button>
                      <Button
                        showTooltip={true}
                        label="Delete Slide"
                        icon="no-alt"
                        isSmall={true}
                        iconSize={16}
                        onClick={() => removeSlide(b.clientId)}
                      ></Button>
                      <Button
                        showTooltip={true}
                        label="Move Right"
                        icon="arrow-right-alt2"
                        isSmall={true}
                        disabled={i === slideBlocks.length - 1}
                        onClick={() => moveBlock(b.clientId, i, i + 1)}
                      ></Button>
                    </ButtonGroup>
                  </div>
                )}
                <Button
                  className="wsu-gutenberg-hero-slider__select-control"
                  onClick={() => selectSlide(b.clientId)}
                >
                  {b.attributes.title || "Slide " + (i + 1)}
                </Button>
              </div>
            ))}

            {slideBlocks.length < 5 && (
              <Button
                className="wsu-gutenberg-hero-slider__insert-control"
                showTooltip={true}
                label="Insert Slide"
                icon="plus"
                isSmall={true}
                onClick={insertBlock}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Edit;
