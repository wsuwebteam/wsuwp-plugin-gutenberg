import { useState } from "@wordpress/element";
import {
  Button,
  DateTimePicker,
  BaseControl,
  Popover,
} from "@wordpress/components";
import { dateI18n } from "@wordpress/date";

const DateTimeControl = (props) => {
  const { label, className, value, onChange } = props;

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    setIsVisible((state) => !state);
  };

  return (
    <div className={className}>
      <div className="components-panel__row">
        {label && <BaseControl.VisualLabel>{label}</BaseControl.VisualLabel>}

        <Button className="is-tertiary" onClick={toggleVisible}>
          {(value ? dateI18n("F j, Y g:i a", value) : null) || "Not Set"}
        </Button>
      </div>
      {isVisible && (
        <Popover
          className="components-dropdown__content"
          onClose={toggleVisible}
        >
          <DateTimePicker
            currentDate={value}
            onChange={(newDate) => {
              onChange(newDate);
            }}
            is12Hour={true}
            __nextRemoveHelpButton
            __nextRemoveResetButton
          />
        </Popover>
      )}
    </div>
  );
};

export default DateTimeControl;
