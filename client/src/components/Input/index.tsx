import { ChangeEvent, useCallback, useState } from "react";
//import { useDebounce } from "usehooks-ts";
import { StyledInput } from "./styled";
import { IInput } from "./types";
import { FormField } from "../FormField";

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
  step = "1",
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

  return (
    <FormField
      className={className}
      error={error}
      icon={icon}
      label={label}
      name={name}
      fullWidth={fullWidth}
    >
      <StyledInput
        disabled={disabled}
        $fullWidth={fullWidth}
        $hasError={Boolean(error)}
        $hasIcon={Boolean(icon)}
        name={ name }
        onChange={ handleControlledChange }
        placeholder={ placeholder }
        type={type}
        step={step}
        value={ controlledValue }
      />
    </FormField>
  );
};
