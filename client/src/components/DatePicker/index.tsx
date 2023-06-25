import './DatePicker.css';
import 'react-clock/dist/Clock.css';

import DateTimePicker from 'react-datetime-picker';
import { IDatePicker } from './types';
import { Text } from 'components';
import styles from './datepicker.module.css';
import { useMemo } from 'react';

export const DatePicker = ({
  className = '',
  disabled = false,
  error,
  format = "MM/dd/yyyy  hh:mma",
  fullWidth = false,
  handleChange,
  icon,
  label,
  name,
  value,
}: IDatePicker): JSX.Element => {
  const renderLabel = useMemo(() => {
    if (!label) return null;

    return (
      <Text as="label" className={ styles.label } htmlFor={ name } size="sm" weight="bold">
        { label }
      </Text>
    );
  }, [label, name]);

  const renderError = useMemo(() => {
    if (!error) return null;

    return <Text as="p" className={ styles.error} color="--error_300" size="xs" >{ error }</Text>;
  }, [error]);

  return (
    <div className={ `${styles.field} ${className ? className : ''}` }>
      {renderLabel}
      <div className={ `${styles.iconInputWrapper} ${ fullWidth ? styles.fullWidth : '' }` }>
        <DateTimePicker
          calendarIcon={null}
          className={ `${ error ? styles.error : '' } ${ icon ? styles.datePicker : '' }` }
          clearIcon={null}
          disabled={disabled}
          disableClock
          format={format}
          locale="en-US"
          name={name}
          onChange={handleChange}
          showLeadingZeros
          value={value}
        />
        { icon && <i className={`${icon} icon`}></i> }
      </div>
      { renderError }
    </div>
  );
};