import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

import DateTimePicker from 'react-datetime-picker';
import { IDatePicker } from './types';
import styles from './datePicker.module.css';

export const DatePickerV2 = ({
  disabled = false,
  format = "MM/dd/yyyy  hh:mma",
  name,
  onChange,
  value,
}: IDatePicker): JSX.Element => (
  <DateTimePicker
    calendarIcon={null}
    className={ styles.datePicker }
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
);
