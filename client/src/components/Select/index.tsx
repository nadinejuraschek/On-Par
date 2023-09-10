import { FormField } from "components";
import { useMemo } from "react";
import { StyledSelect } from "./styled";
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
  placeholder = "",
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
      menuPlacement="auto"
      name={name}
      onChange={handleChange}
      options={options}
      placeholder={placeholder}
      styles={getSelectStyles(icon, !!error)}
      theme={selectTheme}
      value={value}
    />
  ), [
    clearable,
    defaultValue,
    disabled,
    error,
    handleChange,
    icon,
    loading,
    name,
    options,
    placeholder,
    searchable,
    value,
  ]);

  if (onlyInput) {
    return selectInput;
  }

  return (
    <FormField
      className={className}
      error={error}
      icon={icon}
      label={label}
      name={name}
      fullWidth={fullWidth}
    >
      { selectInput }
    </FormField>
  );
};