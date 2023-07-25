import { Text } from "components";
import { useMemo } from "react";
import { ErrorText, Field, IconInputWrapper, StyledIcon, StyledSelect } from "./styled";
import { ISelect } from "./types"
import { getSelectStyles, selectTheme } from "./utils";


export const Select = ({
  className = "",
  clearable = false,
  defaultValue,
  disabled = false,
  error,
  fullWidth = false,
  handleChange,
  icon,
  label,
  loading = false,
  name,
  onlyInput = false,
  options,
  placeholder = undefined,
  searchable = false,
  value,
}: ISelect): JSX.Element => {
  const selectInput = useMemo(() => (
    <StyledSelect
      classNamePrefix="selectInput"
      defaultValue={defaultValue}
      isDisabled={disabled}
      isLoading={loading}
      isClearable={clearable}
      isRtl={false}
      isSearchable={searchable}
      name={name}
      onChange={handleChange}
      options={options}
      placeholder={placeholder}
      styles={getSelectStyles(icon)}
      theme={selectTheme}
      value={value}
    />
  ), [
    clearable,
    defaultValue,
    disabled,
    handleChange,
    icon,
    loading,
    name,
    options,
    placeholder,
    searchable,
    value,
  ]);

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

    return <StyledIcon className={ `${ icon } icon` } />;
  }, [icon]);

  const renderError = useMemo(() => {
    if (!error) return null;

    return <ErrorText as="p" color="--error_300" size="xs" >{ error }</ErrorText>;
  }, [error]);

  if (onlyInput) {
    return selectInput;
  }

  return (
    <Field className={className} fullWidth={fullWidth} hasError={error}>
      { renderLabel }
      <IconInputWrapper>
        { selectInput }
        { renderIcon }
      </IconInputWrapper>
      { renderError }
    </Field>
  );
};