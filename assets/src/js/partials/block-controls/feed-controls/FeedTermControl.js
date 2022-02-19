import { TermSelectorControl } from "../blockControls";

const FeedTermControl = (props) => {
  return (
    <>
      <TermSelectorControl
        label={props.label || "Terms"}
        help={props.help}
        host={props.host}
        taxonomy={props.taxonomy}
        value={props.value}
        onChange={(newval) => props.onChange(newval)}
      />
    </>
  );
};

export default FeedTermControl;
