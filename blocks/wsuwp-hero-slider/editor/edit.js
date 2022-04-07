import { useState, useEffect } from "@wordpress/element";
const { InnerBlocks, InspectorControls, useBlockProps } = wp.blockEditor;

const { Button } = wp.components;

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
        wp.blocks.createBlock("wsuwp/hero"),
        slideBlocks.length,
        clientId,
        true
      )
      .then((response) => {
        const block = response.blocks[0];
        selectSlide(block.clientId, response.index);
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
      <div {...blockProps} data-selected-slide-index={selectedSlideIndex}>
        <div className="wsu-gutenberg-hero-slider__slides">
          {/* TODO: Figure out how to hide default controls (insert, delete, etc). Lock 'all' prevents even code changes. */}
          <InnerBlocks
            template={[["wsuwp/hero"]]}
            templateLock={false}
            allowedBlocks={["wsuwp/hero"]}
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
                {/* Disable/hide specific buttons when actions now allowed */}
                <Button
                  className="wsu-gutenberg-hero-slider__select-control"
                  onClick={() => selectSlide(b.clientId)}
                >
                  {b.attributes.title || "Slide " + (i + 1)}
                </Button>
                {slideBlocks.length > 1 && (
                  <div className="wsu-gutenberg-hero-slider__sub-controls">
                    <Button
                      showTooltip={true}
                      label="Move Left"
                      icon="arrow-left-alt2"
                      onClick={() => moveBlock(b.clientId, i, i - 1)}
                    ></Button>
                    <Button
                      showTooltip={true}
                      label="Delete Slide"
                      icon="no-alt"
                      onClick={() => removeSlide(b.clientId)}
                    ></Button>
                    <Button
                      showTooltip={true}
                      label="Move Right"
                      icon="arrow-right-alt2"
                      onClick={() => moveBlock(b.clientId, i, i + 1)}
                    ></Button>
                  </div>
                )}
              </div>
            ))}

            {slideBlocks.length < 5 && (
              <Button
                showTooltip={true}
                label="Insert Slide"
                icon="plus"
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
