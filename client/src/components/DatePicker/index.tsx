import "./DatePicker.css";
import "react-clock/dist/Clock.css";
import { Icon, Text } from "components";
import { useMemo } from "react";
import { ErrorText, Field, IconInputWrapper, IconWrapper, StyledDateTimePicker } from "./styled";
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
  const renderLabel = useMemo(() => {
    if (!label) return null;

    return (
      <Text as="label" htmlFor={ name } size="sm" weight="bold">
        { label }
      </Text>
    );
  }, [label, name]);

  const renderIcon = useMemo(() => {
    if (!icon) return null;

    return (
      <IconWrapper>
        <Icon type={icon} />
      </IconWrapper>
    );
  }, [icon]);

  const renderError = useMemo(() => {
    if (!error) return null;

    return <ErrorText as="p" size="xs" >{ error }</ErrorText>;
  }, [error]);

  return (
    <Field className={className} $fullWidth={fullWidth}>
      {renderLabel}
      <IconInputWrapper>
        <StyledDateTimePicker
          calendarIcon={null}
          clearIcon={null}
          disabled={disabled}
          disableClock
          format={format}
          $hasError={error}
          $hasIcon={icon}
          locale="en-US"
          name={name}
          onChange={handleChange}
          showLeadingZeros
          value={value}
        />
        { renderIcon }
      </IconInputWrapper>
      { renderError }
    </Field>
  );
};