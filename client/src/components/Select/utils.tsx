import { Theme } from 'react-select';

export const getSelectStyles = (icon = '') => ({
  container: (baseStyles: { [key: string]: string }) => ({
    ...baseStyles,
    width: '100%',
  }),
  control: (baseStyles: { [key: string]: string }) => ({
    ...baseStyles,
    borderColor: 'var(--grey_300)',
    borderRadius: '0.8rem',
    boxShadow: 'var(--shadow_xs)',
    height: '4rem',
    padding: icon ? '0 0 0 4rem' : '0 0 0 1.2rem',
    minHeight: '4rem',
  }),
  singleValue: (baseStyles: { [key: string]: string }) => ({
    ...baseStyles,
    margin: 0,
  }),
  valueContainer: (baseStyles: { [key: string]: string }) => ({
    ...baseStyles,
    padding: 0,
  }),
});

export const selectTheme = (theme: Theme) => ({
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