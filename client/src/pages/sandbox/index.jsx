import { Button, Input, Tabs } from "components";

import styles from "./sandbox.module.css";
import { useState } from "react";

export const Sandbox = () => {
  const [value, setValue] = useState("");
  const [activeTab, setActiveTab] = useState("cluster");

  const primaryTabs = [
    { label: "Cluster", value: "cluster" },
    { label: "Family", value: "family" },
    { label: "Resources", value: "resources" },
  ];
  const secondaryTabs = [
    { label: "Cluster", value: "cluster" },
    { label: "Family", value: "family" },
    { label: "Resources", value: "resources" },
  ];

  return (
    <div className={ styles.container }>
      <Tabs activeTab={ activeTab } handleClick={ setActiveTab } tabs={ primaryTabs } variant="primary" />
      <Tabs activeTab={ activeTab } handleClick={ setActiveTab } tabs={ secondaryTabs } variant="secondary" />
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