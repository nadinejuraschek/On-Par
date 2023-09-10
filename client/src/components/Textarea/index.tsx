import { FormField } from "components";
import { useEffect } from "react";
import { useDebounce } from "usehooks-ts";
import { StyledTextarea } from "./styled";

import { ITextarea } from "./types";

export const Textarea = ({
  className = "",
  error,
  fullWidth = false,
  handleChange,
  icon,
  label,
  name,
  placeholder = "Type here...",
  rows = 5,
  value,
}: ITextarea): JSX.Element => {
  const debouncedValue = useDebounce<string>(value, 100);

  useEffect(() => {
    // Triggers when "debouncedValue" changes
  }, [debouncedValue]);

  return (
    <FormField
      className={className}
      error={error}
      icon={icon}
      label={label}
      name={name}
      fullWidth={fullWidth}
    >
      <StyledTextarea
        $fullWidth={fullWidth}
        $hasError={Boolean(error)}
        name={ name }
        onChange={ handleChange }
        placeholder={ placeholder }
        rows={rows}
        value={ value }
      />
    </FormField>
  );
};
