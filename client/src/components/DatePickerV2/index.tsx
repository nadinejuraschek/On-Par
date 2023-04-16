import './DatePicker.css';
import 'react-clock/dist/Clock.css';

import DateTimePicker from 'react-datetime-picker';
import { IDatePicker } from './types';
import { Text } from 'components';
import styles from './datePicker.module.css';

export const DatePickerV2 = ({
  disabled = false,
  error,
  format = "MM/dd/yyyy  hh:mma",
  fullWidth = false,
  icon,
  label,
  name,
  onChange,
  value,
}: IDatePicker): JSX.Element => (
  <div className={ styles.field }>
    <Text as="label" className={ styles.label } htmlFor={ name } size="sm">
      { label }
    </Text>
    <div className={ styles.iconInputWrapper }>
      <DateTimePicker
        calendarIcon={null}
        className={ `${ error && styles.error } ${ fullWidth && styles.fullWidth } ${ icon && styles.datePicker }` }
        clearIcon={null}
        disabled={disabled}
        disableClock
        format={format}
        locale="en-US"
        name={name}
        onChange={onChange}
        showLeadingZeros
        value={value}
      />
      { icon && <i className={`${icon} icon`}></i> }
    </div>
    { error && <Text as="p" className={ styles.error} color="--error_300" size="xs" >{ error }</Text> }
  </div>
);
