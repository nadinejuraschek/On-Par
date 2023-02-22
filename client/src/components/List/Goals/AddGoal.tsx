import { Input, Tabs } from "components";

import { IAddGoal } from "./types";
import education from "images/education.svg";
import personal from "images/personal.svg";
import styles from "./goals.module.css";
import travel from "images/travel.svg";

export const AddGoal = ( { handleText, handleType, text, type }: IAddGoal ): JSX.Element => {
  const tabs = [
    /* @ts-ignore-next-line */
    { label: <img className={ styles.icon } src={ education } alt="Educational Goal" />, value: "education" },
    /* @ts-ignore-next-line */
    { label: <img className={ styles.icon } src={ personal } alt="Personal Goal" />, value: "personal" },
    /* @ts-ignore-next-line */
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
