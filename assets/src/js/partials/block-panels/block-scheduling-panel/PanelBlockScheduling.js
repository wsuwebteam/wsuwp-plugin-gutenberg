import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody, ToggleControl } from "@wordpress/components";
import { DateTimeControl } from "../../block-controls/blockControls";

const CSSNAMESPACE = "wsu-gutenberg-block-scheduling";

const PanelBlockScheduling = (props) => {
  const {
    title = "Block Scheduling",
    className,
    attributes,
    setAttributes,
  } = props;

  return (
    <InspectorControls>
      <PanelBody
        title={title}
        initialOpen={false}
        className={`${CSSNAMESPACE} ${className}`}
      >
        <ToggleControl
          label="Disable block"
          help="Prevent block from displaying on the website."
          checked={attributes.blockSchedulingIsDisabled}
          onChange={(value) =>
            setAttributes({ blockSchedulingIsDisabled: value })
          }
        />

        {!attributes.blockSchedulingIsDisabled && (
          <>
            <DateTimeControl
              label="Publish"
              value={attributes.blockSchedulingPublishDateTime}
              onChange={(newDate) =>
                setAttributes({ blockSchedulingPublishDateTime: newDate })
              }
            />

            <DateTimeControl
              label="Unpublish"
              value={attributes.blockSchedulingUnpublishDateTime}
              onChange={(newDate) =>
                setAttributes({ blockSchedulingUnpublishDateTime: newDate })
              }
            />
          </>
        )}
      </PanelBody>
    </InspectorControls>
  );
};

export default PanelBlockScheduling;
