import { useState, useEffect } from "@wordpress/element";
import { SelectControl } from "@wordpress/components";

const defaultOptions = [];

const FeedTaxonomyControl = (props) => {
  const [options, setOptions] = useState(defaultOptions);

  function shouldListTaxonomy(taxonomy) {
    if (!props.postType || props.postType === "any") return true;
    const supportedTypes = taxonomy["types"];

    return supportedTypes.includes(props.postType);
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
    const response = await fetch(props.host + "/wp-json/wp/v2/taxonomies", {
      method: "GET",
    });

    if (response.ok) {
      const taxonomies = await response.json();

      if (taxonomies) {
        let fetchedOptions = [];

        for (const key in taxonomies) {
          if (taxonomies.hasOwnProperty(key)) {
            const taxonomy = taxonomies[key];

            if (shouldListTaxonomy(taxonomy)) {
              fetchedOptions.push({
                label: taxonomy["name"],
                value: taxonomy["slug"],
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
  }, [props.host, props.postType]);

  return (
    <SelectControl
      label={props.label || "Taxonomy"}
      help={props.help}
      value={props.value}
      options={
        options.length
          ? options
          : [
              {
                label: "",
                value: "",
              },
            ]
      }
      onChange={(taxonomy) => props.onChange(taxonomy)}
    />
  );
};

export default FeedTaxonomyControl;
