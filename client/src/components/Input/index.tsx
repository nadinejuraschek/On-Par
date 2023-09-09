import { ChangeEvent, useCallback, useMemo, useState } from "react";
//import { useDebounce } from "usehooks-ts";
import { ErrorText, Field, IconInputWrapper, IconWrapper, StyledInput } from "./styled";
import { IInput } from "./types";
import { Icon } from "../Icon";
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
  /* const debouncedValue = useDebounce<string>(value, 100);

  useEffect(() => {
    // Triggers when "debouncedValue" changes
  }, [debouncedValue]); */
  const [controlledValue, setControlledValue] = useState(value);

  const handleControlledChange = useCallback((event: ChangeEvent) => {
    setControlledValue((event.target as HTMLInputElement).value);
    handleChange(event);
  }, [handleChange]);

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
          $hasError={Boolean(error)}
          $hasIcon={Boolean(icon)}
          name={ name }
          onChange={ handleControlledChange }
          placeholder={ placeholder }
          type={type}
          value={ controlledValue }
        />
        { renderIcon }
      </IconInputWrapper>
      { renderErrorMessage }
    </Field>
  );
};
