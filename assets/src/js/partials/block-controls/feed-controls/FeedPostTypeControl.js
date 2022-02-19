import { useState, useEffect } from "@wordpress/element";
import { SelectControl } from "@wordpress/components";

const defaultOptions = [{ label: "Any", value: "any" }];

const FeedPostTypeControl = (props) => {
  const [options, setOptions] = useState(defaultOptions);

  function shouldListPostType(postType) {
    if (props.ignorePostTypes && props.ignorePostTypes.includes(postType))
      return false;

    return true;
  }

  function optionSorter(a, b) {
    const aLabel = a.label.toUpperCase();
    const bLabel = b.label.toUpperCase();
    if (aLabel < bLabel) {
      return -1;
    }
    if (aLabel > bLabel) {
      return 1;
    }

    return 0;
  }

  async function fetchOptions() {
    const response = await fetch(props.host + "/wp-json/wp/v2/types", {
      method: "GET",
    });

    if (response.ok) {
      const postTypes = await response.json();

      if (postTypes) {
        let fetchedOptions = [];

        for (const key in postTypes) {
          if (postTypes.hasOwnProperty(key)) {
            const postType = postTypes[key];
            if (shouldListPostType(postType["slug"])) {
              fetchedOptions.push({
                label: postType["name"],
                value: postType["slug"],
              });
            }
          }
        }

        fetchedOptions.sort(optionSorter);

        const newOptions = defaultOptions.concat(fetchedOptions);
        setOptions(newOptions);
      }
    }
  }

  useEffect(() => {
    fetchOptions();
  }, [props.host]);

  return (
    <>
      <SelectControl
        label={props.label || "Post Type"}
        help={props.help}
        value={props.value}
        options={options}
        onChange={(postType) => props.onChange(postType)}
      />
    </>
  );
};

export default FeedPostTypeControl;
