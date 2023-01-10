import { useInstanceId } from "@wordpress/compose";
import { useState, useEffect } from "@wordpress/element";
import { BaseControl } from "@wordpress/components";

let abortController = null;

const FeedHostControl = ({ attributes, setAttributes }) => {
  const [value, setValue] = useState(attributes.host);
  const [isValid, setIsValid] = useState(false);
  const instanceId = useInstanceId(FeedHostControl);
  const id = `inspector-text-control-${instanceId}`;

  function isValidUrl(url) {
    try {
      new URL(url);
    } catch (e) {
      return false;
    }
    return true;
  }

  function checkWpApi(url) {
    // cancel existing requests and set up new abort controller
    abortController?.abort();
    abortController =
      typeof AbortController === "undefined"
        ? undefined
        : new AbortController();

    return fetch(url + `/wp-json/wp/v2/statuses`, {
      method: "GET",
      signal: abortController?.signal,
    });
  }

  function updateValidity(url) {
    if (isValidUrl(url)) {
      checkWpApi(url)
        .then((response) => {
          if (response.ok) {
            setIsValid(true);
            setAttributes({ host: url });
          } else {
            setIsValid(false);
          }
        })
        .catch((error) => {
          setIsValid(false);
        });
    } else {
      setIsValid(false);
    }
  }

  async function handleHostChange(url) {
    setValue(url);

    // reset if empty
    if (url === "") {
      setIsValid(false);
      setAttributes({ host: "" });
      return;
    }

    // validate if url is a valid WP site
    updateValidity(url);
  }

  useEffect(() => {
    updateValidity(attributes.host);
  }, []);

  return (
    <>
      <BaseControl
        label="Host (optional)"
        id={id}
        help="URL for the site to get results from (i.e. https://news.wsu.edu)."
      >
        <div className="wsu-gutenberg-input-with-icon">
          {value && (
            <span
              className={`dashicon wsu-gutenberg-input-with-icon__icon ${
                isValid
                  ? "dashicons dashicons-yes wsu-gutenberg-input-with-icon__icon--success"
                  : "dashicons dashicons-no-alt wsu-gutenberg-input-with-icon__icon--error"
              }`}
            ></span>
          )}
          <input
            className="components-text-control__input"
            type="text"
            id={id}
            value={value}
            onChange={(e) => handleHostChange(e.target.value)}
            aria-describedby={id + "__help"}
          />
        </div>
      </BaseControl>
    </>
  );
};

export default FeedHostControl;
