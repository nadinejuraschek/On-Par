import { ErrorText, Field, IconInputWrapper, StyledIcon, StyledInput } from './styled';
import { useEffect, useMemo } from 'react';

import { IInput } from "./types";
import { Text } from "../Text";
import { useDebounce } from 'usehooks-ts';

export const Input = ( {
  className = '',
  disabled = false,
  error,
  fullWidth = false,
  handleChange,
  icon,
  label,
  name,
  placeholder = "Type here...",
  type = 'text',
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
    <Field className={className}>
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
      { error && <ErrorText as="p" color="--error_300" size="xs" >{ error }</ErrorText> }
    </Field>
  );
};
