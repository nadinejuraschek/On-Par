import "./DatePicker.css";
import "react-clock/dist/Clock.css";
import { FormField } from "components";
import { StyledDateTimePicker } from "./styled";
import { IDatePicker } from "./types";

export const DatePicker = ({
  className = "",
  disabled = false,
  error,
  format = "MM/dd/yyyy  hh:mma",
  fullWidth = false,
  handleChange,
  icon,
  label,
  name,
  value,
}: IDatePicker): JSX.Element => {
  return (
    <FormField
      className={className}
      error={error}
      icon={icon}
      label={label}
      name={name}
      fullWidth={fullWidth}
    >
      <StyledDateTimePicker
        calendarIcon={null}
        clearIcon={null}
        disabled={disabled}
        disableClock
        format={format}
        $hasError={Boolean(error)}
        $hasIcon={Boolean(icon)}
        locale="en-US"
        name={name}
        onChange={handleChange}
        showLeadingZeros
        value={value}
      />
    </FormField>
  );
};