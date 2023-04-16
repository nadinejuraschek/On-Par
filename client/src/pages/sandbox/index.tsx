import { Select } from 'components';
import styles from "./sandbox.module.css";
import { useState } from 'react';

export const Sandbox = (): JSX.Element => {
  const [value, setValue] = useState({ value: 'vanilla', label: 'Vanilla' });

  const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

  return (
    <div className={ styles.container }>
      <Select
        handleChange={(val: { value: string, label: string }) => setValue(val)}
        label="Select"
        name="select"
        options={options}
        value={value}
      />
      <div>{value.label}</div>
    </div>
  );
}