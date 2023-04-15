import { DatePickerV2 as DatePicker } from 'components';
import styles from "./sandbox.module.css";
import { useState } from 'react';

export const Sandbox = (): JSX.Element => {
  const [value, onValueChange] = useState(new Date());

  return (
    <div className={ styles.container }>
      <DatePicker name="date" onChange={onValueChange} value={value} />
    </div>
  );
}