import { getSelectStyles, selectTheme } from './utils';

import { ISelect } from "./types"
import SelectComp from 'react-select';
import { Text } from "components";
import styles from './select.module.css';
import { useMemo } from 'react';

export const Select = ({
  className = '',
  clearable = false,
  defaultValue,
  disabled = false,
  error,
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
    <SelectComp
      className={ styles.select }
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

  if (onlyInput) {
    return selectInput;
  }

  return (
    <div className={ `${className} ${styles.field}` }>
      {label && (
        <Text as="label" className={ styles.label } htmlFor={ name } size="sm">
          { label }
        </Text>
      )}
      <div className={ styles.iconInputWrapper }>
        {selectInput}
        { icon && <i className={ `${ icon } icon inputIcon` }></i> }
      </div>
      { error && <Text as="p" className={ styles.error} color="--error_300" size="xs" >{ error }</Text> }
    </div>
  );
};