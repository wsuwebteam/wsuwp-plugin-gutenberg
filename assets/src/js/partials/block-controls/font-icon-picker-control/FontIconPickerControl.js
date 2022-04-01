import { Button, Popover } from "@wordpress/components";
import { useState } from "@wordpress/element";

const { BaseControl, Panel, PanelBody, PanelRow, TextControl, SelectControl } =
  wp.components;

const FontIconPickerControl = (props) => {
  const icons = [
    "alarm",
    "alert-notification",
    "arrow-down-carrot",
    "arrow-down",
    "arrow-left-carrot",
    "arrow-left",
    "arrow-right-carrot",
    "arrow-right",
    "arrow-up-carrot",
    "arrow-up",
    "attachment",
    "basket",
    "bookmark",
    "calendar",
    "cart",
    "check",
    "collapse",
    "comment",
    "contrast",
    "credit-card",
    "cut",
    "discussion",
    "document",
    "download",
    "edit",
    "email",
    "expand",
    "favorite",
    "feedback",
    "filter",
    "flag",
    "gallery",
    "graph",
    "home",
    "info",
    "key",
    "light-bulb",
    "link",
    "location",
    "map-location",
    "map",
    "menu",
    "minus-circle",
    "minus",
    "mobile",
    "monitor",
    "more-vertical",
    "more",
    "next",
    "pause",
    "phone",
    "photos",
    "play-circle",
    "play",
    "plus",
    "pluse-circle",
    "previous",
    "print",
    "profile-circle",
    "profile",
    "rate",
    "refresh",
    "save",
    "search",
    "secure",
    "send",
    "settings",
    "share",
    "social-facebook",
    "social-instagram",
    "social-linkedin",
    "social-twitter",
    "social-youtube",
    "stop-circle",
    "stop",
    "tag",
    "tent",
    "time",
    "trash",
    "upload",
    "video-slideshow",
    "warning-caution",
    "warning-stop",
    "x-close",
    "zoom-in",
    "zoom-out",
  ];

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    setIsVisible((state) => !state);
  };

  function selectIcon(icon) {
    toggleVisible();
    props.onChange(icon);
  }

  return (
    <div className="wsu-gutenberg-font-icon-picker">
      <BaseControl className="wsu-settings__base-control" help={props.help}>
        {props.label && (
          <BaseControl.VisualLabel className="wsu-settings__label">
            {props.label}
          </BaseControl.VisualLabel>
        )}

        {props.value ? (
          <>
            <Button
              className="wsu-gutenberg-font-icon-picker__selected-icon"
              onClick={toggleVisible}
            >
              <i className={`wsu-icon wsu-i-${props.value}`}></i>
            </Button>
            <Button onClick={() => props.onChange("")}>Remove</Button>
          </>
        ) : (
          <Button
            className="wsu-gutenberg-font-icon-picker__select-icon-button"
            onClick={toggleVisible}
          >
            Select Icon
          </Button>
        )}

        {isVisible && (
          <Popover>
            <div className="wsu-gutenberg-font-icon-picker__icon-list">
              {icons.map((i) => (
                <button
                  key={i}
                  title={i}
                  className="wsu-gutenberg-font-icon-picker__icon-button"
                  onClick={() => selectIcon(i)}
                >
                  <i className={`wsu-icon wsu-i-${i}`}></i>
                </button>
              ))}
            </div>
          </Popover>
        )}
      </BaseControl>
    </div>
  );
};

export default FontIconPickerControl;
