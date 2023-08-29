import { Text } from "components";
import { useEffect, useMemo } from "react";
import { useDebounce } from "usehooks-ts";
import { ErrorText, Field, StyledTextarea } from "./styled";

import { ITextarea } from "./types";

export const Textarea = ({
  className = "",
  error,
  fullWidth = false,
  handleChange,
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

  const renderError = useMemo(() => {
    if (!error) return null;

    return <ErrorText as="p" color="--error_300" size="xs" >{ error }</ErrorText>;
  }, [error]);

  return (
    <Field className={className}>
      <Text as="label" htmlFor={ name } size="sm" weight="bold">
        { label }
      </Text>
      <StyledTextarea
        $fullWidth={fullWidth}
        $hasError={error}
        name={ name }
        onChange={ handleChange }
        placeholder={ placeholder }
        rows={rows}
        value={ value }
      />
      { renderError }
    </Field>
  );
};
