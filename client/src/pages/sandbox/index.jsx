import { Button, Input } from "components";

import { useState } from "react";
import styles from "./sandbox.module.css";

export const Sandbox = () => {
  const [value, setValue] = useState("");

  return (
    <div className={ styles.container }>
      <Button variant="primary">Primary</Button>
      <Button disabled variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button disabled variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button disabled variant="tertiary">Tertiary</Button>
      <Button variant="danger">Danger</Button>
      <Button disabled variant="danger">Danger</Button>
      <Button variant="warning">Warning</Button>
      <Button disabled variant="warning">Warning</Button>
      <Input error="This field is required" name="name" value={ value } handleChange={ (e) => setValue(e.target.value) } label="Name" />
    </div>);
}