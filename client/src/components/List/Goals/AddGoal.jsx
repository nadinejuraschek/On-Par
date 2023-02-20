import { Input, Tabs } from "components";

import education from "images/education.svg";
import personal from "images/personal.svg";
import travel from "images/travel.svg";
import styles from "./goals.module.css";

export const AddGoal = ( { handleText, handleType, text, type } ) => {
  const tabs = [
    { label: <img className={ styles.icon } src={ education } alt="Educational Goal" />, value: "education" },
    { label: <img className={ styles.icon } src={ personal } alt="Personal Goal" />, value: "personal" },
    { label: <img className={ styles.icon } src={ travel } alt="Travel Goal" />, value: "travel" }
  ];

  return (
    <div className={ styles.addContainer }>
      <Tabs acitveTab={ type } fullWidth handleClick={ handleType } tabs={ tabs } variant="secondary" />
      <Input
        className={ styles.input }
        name="goal"
        label="New Goal"
        value={ text }
        handleChange={ handleText }
      />
    </div>
  );
};
