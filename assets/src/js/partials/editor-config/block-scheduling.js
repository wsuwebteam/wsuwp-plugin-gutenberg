import { PanelBlockScheduling } from "../block-panels/blockPanels";

const { addFilter } = wp.hooks;

function insertSchedulingPanel(OriginalComponent) {
  return function (props) {
    const unsupportedBlockTypes = [];

    if (
      props.attributes.blockSchedulingEnabled &&
      !unsupportedBlockTypes.includes(props.name)
    ) {
      let isDisabled = false;

      const now = Date.now();
      const publish = props.attributes.blockSchedulingPublishDateTime
        ? Date.parse(props.attributes.blockSchedulingPublishDateTime)
        : null;
      const unpublish = props.attributes.blockSchedulingUnpublishDateTime
        ? Date.parse(props.attributes.blockSchedulingUnpublishDateTime)
        : null;

      if (
        props.attributes.blockSchedulingIsDisabled === true ||
        (publish && now < publish) ||
        (unpublish && now > unpublish)
      ) {
        isDisabled = true;
      }

      return (
        <>
          {isDisabled === true ? (
            <div className="wsu-gutenberg-block-scheduling__block-wrapper">
              {/* <div className="wsu-gutenberg-block-scheduling__block-notice">
                <i className="dashicons dashicons-hidden"></i> Hidden by block
                schedule
              </div> */}
              <div className="wsu-gutenberg-block-scheduling__block-content">
                <OriginalComponent {...props} />
              </div>
            </div>
          ) : (
            <OriginalComponent {...props} />
          )}

          <PanelBlockScheduling {...props} />
        </>
      );
    }

    // return default
    return <OriginalComponent {...props} />;
  };
}

function addAttributes(settings) {
  //check if object exists for old Gutenberg version compatibility
  if (typeof settings.attributes !== "undefined") {
    settings.attributes = Object.assign(settings.attributes, {
      blockSchedulingEnabled: {
        type: "boolean",
        default: false,
      },
      blockSchedulingIsDisabled: {
        type: "boolean",
        default: false,
      },
      blockSchedulingPublishDateTime: {
        type: "string",
        default: null,
      },
      blockSchedulingUnpublishDateTime: {
        type: "string",
        default: null,
      },
    });
  }

  return settings;
}

addFilter(
  "editor.BlockEdit",
  "wsuwp-plugin-gutenberg/insert-scheduling-panel",
  insertSchedulingPanel
);

addFilter(
  "blocks.registerBlockType",
  "wsuwp-plugin-gutenberg/insert-scheduling-panel",
  addAttributes
);
