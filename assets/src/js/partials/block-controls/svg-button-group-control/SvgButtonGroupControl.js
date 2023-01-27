import { Button, ButtonGroup, BaseControl } from "@wordpress/components";

const SvgButtonOption = (props) => {
  return (
    <Button
      onClick={() => props.onClick(props.value)}
      isPressed={props.isActive(props.value)}
      className=""
      aria-label={props.value}
    >
      {props.svg}
    </Button>
  );
};

const SvgButtonGroupControl = (props) => {
  let { attributes, setAttributes, buttonOptions, currentValue, label } = props;

  return (
    <BaseControl
      className="wsu-gutenberg-svg-button-group-control"
      id="svg-button-group-control"
      label={label}
      help=""
    >
      <ButtonGroup>
        {buttonOptions.map((buttonOption) => {
          return <SvgButtonOption {...props} {...buttonOption} />;
        })}
      </ButtonGroup>
    </BaseControl>
  );
};

export default SvgButtonGroupControl;
