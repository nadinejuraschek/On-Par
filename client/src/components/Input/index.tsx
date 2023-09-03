import { useEffect, useMemo } from "react";
import { useDebounce } from "usehooks-ts";
import { ErrorText, Field, IconInputWrapper, IconWrapper, StyledInput } from "./styled";
import { Icon } from "../Icon";
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
  const debouncedValue = useDebounce<string>(value, 100);

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

  const renderIcon = useMemo(() => {
    if (!icon) return null;

    return (
      <IconWrapper>
        <Icon type={icon} />
      </IconWrapper>
    );
  }, [icon]);

  const renderErrorMessage = useMemo(() => {
    if (!error) return null;

    return <ErrorText as="p" size="xs" >{ error }</ErrorText>;
  }, [error]);

  return (
    <Field className={className} $fullWidth={fullWidth}>
      { renderLabel }
      <IconInputWrapper>
        <StyledInput
          disabled={disabled}
          $fullWidth={fullWidth}
          $hasError={error}
          $hasIcon={icon}
          name={ name }
          onChange={ handleChange }
          placeholder={ placeholder }
          type={type}
          value={ value }
        />
        { renderIcon }
      </IconInputWrapper>
      { renderErrorMessage }
    </Field>
  );
};
