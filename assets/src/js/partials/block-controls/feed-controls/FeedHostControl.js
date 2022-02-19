import { TextControl } from "@wordpress/components";

const FeedHostControl = ({ attributes, setAttributes }) => {
  function handleHostChange(host) {
    setAttributes({ host });
  }

  return (
    <TextControl
      label="Host (optional)"
      value={attributes.host}
      onChange={(host) => handleHostChange(host)}
      help="URL for the site to get results from (i.e. https://news.wsu.edu)."
    />
  );
};

export default FeedHostControl;
