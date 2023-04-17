import SelectComp, { Theme } from 'react-select';

import { ISelect } from "./types"
import { Text } from "components";
import styles from './select.module.css';

const getSelectStyles = (icon = '') => {
  return {
    control: (baseStyles: { [key: string]: string }) => ({
      ...baseStyles,
      borderColor: 'var(--grey_300)',
      borderRadius: '0.8rem',
      boxShadow: 'var(--shadow_xs)',
      padding: icon ? '0 0 0 4rem' : '0 0 0 1.2rem',
    }),
    singleValue: (baseStyles: { [key: string]: string }) => ({
      ...baseStyles,
      margin: 0,
    }),
    valueContainer: (baseStyles: { [key: string]: string }) => ({
      ...baseStyles,
      padding: 0,
    }),
  };
};

const selectTheme = (theme: Theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    danger: 'var(--error_600)',
    dangerLight: 'var(--error_100)',
    primary75: 'var(--primary_400)',
    primary50: 'var(--primary_300)',
    primary25: 'var(--primary_100)',
    primary: 'var(--primary_300)',
    neutral0: 'var(--white)',
    neutral5: 'var(--grey_50)',
    neutral10: 'var(--grey_100)',
    neutral20: 'var(--grey_200)',
    neutral30: 'var(--grey_300)',
    neutral40: 'var(--grey_400)',
    neutral50: 'var(--grey_500)',
    neutral60: 'var(--grey_600)',
    neutral70: 'var(--grey_700)',
    neutral80: 'var(--grey_800)',
    neutral90: 'var(--grey_900)',
  },
});

export const Select = ({
  className = '',
  clearable = false,
  disabled = false,
  error,
  handleChange,
  icon,
  label,
  loading = false,
  name,
  options,
  searchable = false,
  value,
}: ISelect): JSX.Element => {
  const dot = (color = 'transparent') => ({
    alignItems: 'center',
    display: 'flex',

    ':before': {
      backgroundColor: color,
      borderRadius: 10,
      content: '" "',
      display: 'block',
      marginRight: 8,
      height: 10,
      width: 10,
    },
  });

  return (
    <div className={ `${className} ${styles.field}` }>
      <Text as="label" className={ styles.label } htmlFor={ name } size="sm">
        { label }
      </Text>
      <div className={ styles.iconInputWrapper }>
        <SelectComp
          className={ styles.select }
          classNamePrefix="selectInput"
          defaultValue={options[0]}
          isDisabled={disabled}
          isLoading={loading}
          isClearable={clearable}
          isRtl={false}
          isSearchable={searchable}
          name={name}
          onChange={handleChange}
          options={options}
          styles={getSelectStyles(icon)}
          theme={selectTheme}
          value={value}
        />
        { icon && <i className={ `${ icon } icon inputIcon` }></i> }
      </div>
      { error && <Text as="p" className={ styles.error} color="--error_300" size="xs" >{ error }</Text> }
    </div>
  );
};