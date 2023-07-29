import { useEffect, useMemo } from "react";
import { useDebounce } from "usehooks-ts";
import { ErrorText, Field, IconInputWrapper, StyledIcon, StyledInput } from "./styled";

import { IInput } from "./types";
import { Text } from "../Text";

export const Input = ( {
  className = "",
  disabled = false,
  error,
  fullWidth = false,
  handleChange,
  icon,
  label,
  name,
  placeholder = "Type here...",
  type = "text",
  value,
}: IInput ): JSX.Element => {
  const debouncedValue = useDebounce<string>(value, 500);

  useEffect(() => {
    // Triggers when "debouncedValue" changes
  }, [debouncedValue]);

  const renderLabel = useMemo(() => {
    if (!label) return null;

    return (
      <Text as="label" htmlFor={ name } size="sm" weight="bold">
        { label }
      </Text>
    );
  }, [label, name]);

  return (
    <Field className={className} fullWidth={fullWidth}>
      { renderLabel }
      <IconInputWrapper>
        <StyledInput
          disabled={disabled}
          fullWidth={fullWidth}
          hasError={error}
          hasIcon={icon}
          name={ name }
          onChange={ handleChange }
          placeholder={ placeholder }
          type={type}
          value={ value }
        />
        { icon && <StyledIcon className={`${icon} icon`} /> }
      </IconInputWrapper>
      { error && <ErrorText as="p" size="xs" >{ error }</ErrorText> }
    </Field>
  );
};
