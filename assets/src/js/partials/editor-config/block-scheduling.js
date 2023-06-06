import { PanelBlockScheduling } from "../block-panels/blockPanels";
import { dateI18n } from "@wordpress/date";

const { addFilter } = wp.hooks;

function insertSchedulingPanel(OriginalComponent) {
  return function (props) {
    const unsupportedBlockTypes = [];

    if (
      props.attributes.blockSchedulingEnabled &&
      !unsupportedBlockTypes.includes(props.name)
    ) {
      console.log(props);
      let isInactive = false;

      const now = Date.now();
      const publish = props.attributes.blockSchedulingPublishDateTime
        ? Date.parse(props.attributes.blockSchedulingPublishDateTime)
        : null;
      const unpublish = props.attributes.blockSchedulingUnpublishDateTime
        ? Date.parse(props.attributes.blockSchedulingUnpublishDateTime)
        : null;

      const hasSchedule = publish || unpublish;
      const isDisabled = props.attributes.blockSchedulingIsDisabled === true;

      if (
        props.attributes.blockSchedulingIsDisabled === true ||
        (publish && now < publish) ||
        (unpublish && now > unpublish)
      ) {
        isInactive = true;
      }

      return (
        <>
          {props.attributes.blockSchedulingEnabled === true ? (
            <div
              className={
                `wsu-gutenberg-block-scheduling__block-wrapper` +
                (isInactive ? " is-disabled" : "") +
                (props.isSelected ? " is-selected" : "")
              }
            >
              <span className="wsu-gutenberg-block-scheduling__block-indicator">
                <i className="dashicons dashicons-clock"></i>
              </span>
              {(isDisabled || hasSchedule) && (
                <div className="wsu-gutenberg-block-scheduling__block-notice">
                  <div className="wsu-gutenberg-block-scheduling__block-notice-content">
                    <h4 className="wsu-gutenberg-block-scheduling__block-notice-heading">
                      {isDisabled ? "Disabled" : "Scheduled"}
                    </h4>
                    {!isDisabled && (
                      <>
                        <p>
                          <span className="wsu-gutenberg-block-scheduling__block-notice-label">
                            Publish Date:{" "}
                          </span>
                          {(publish
                            ? dateI18n("F j, Y g:i a", publish)
                            : null) || "Not Set"}
                        </p>
                        <p>
                          <span className="wsu-gutenberg-block-scheduling__block-notice-label">
                            Unpublish Date:{" "}
                          </span>
                          {(unpublish
                            ? dateI18n("F j, Y g:i a", unpublish)
                            : null) || "Not Set"}
                        </p>
                      </>
                    )}
                  </div>
                </div>
              )}
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
