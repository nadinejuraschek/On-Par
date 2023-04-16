import { DatePicker, Input } from 'components';

import styles from "./sandbox.module.css";
import { useState } from 'react';

export const Sandbox = (): JSX.Element => {
  const [value, onValueChange] = useState(new Date());

  return (
    <div className={ styles.container }>
      <DatePicker fullWidth icon="calendar outline" label="Date" name="date" handleChange={onValueChange} value={value} />
      <Input fullWidth handleChange={() => console.log('')} icon="calendar outline" label="Input" name="input" value="Input" />
    </div>
  );
}