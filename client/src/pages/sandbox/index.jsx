import { Input } from "components";
import { useState } from "react";
import styles from "./sandbox.module.css";

export const Sandbox = () => {
  const [value, setValue] = useState("");

  return <div className={ styles.container }>
    <Input error="This field is required" name="name" value={ value } handleChange={ (e) => setValue(e.target.value) } label="Name" />
  </div>;
}