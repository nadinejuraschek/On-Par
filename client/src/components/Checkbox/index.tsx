import { Text } from "components";
import { useMemo } from "react";
import { ErrorText, Field, StyledCheckbox } from "./styled";

import { ICheckbox } from "./types";

export const Checkbox = ({
  className = "",
  error,
  handleChange,
  label,
  name,
  value,
}: ICheckbox): JSX.Element => {
  const renderError = useMemo(() => {
    if (!error) return null;

    return (
      <ErrorText as="p" color="--error_300" size="xs" >{ error }</ErrorText>
    );
  }, [error]);

  return (
    <Field className={className}>
      <StyledCheckbox
        checked={value}
        name={ name }
        onChange={ handleChange }
        type="checkbox"
      />
      <Text as="label" htmlFor={ name } size="sm">
        { label }
      </Text>
      {renderError}
    </Field>
  );
};