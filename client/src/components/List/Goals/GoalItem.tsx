import { IGoalItem } from "./types";
import education from "images/education.svg";
import personal from "images/personal.svg";
import styles from "./goals.module.css";
import travel from "images/travel.svg";

export const GoalItem = ( { handleCheck, item }: IGoalItem ): JSX.Element => {
  const { _id, checked, text, type } = item;

  const renderIcon = () => {
    if ( type === "education" ) {
      /* @ts-ignore-next-line */
      return <img src={ education } alt={ text } />;
    }
    if ( type === "travel" ) {
      /* @ts-ignore-next-line */
      return <img src={ travel } alt={ text } />;
    }
    /* @ts-ignore-next-line */
    return <img src={ personal } alt={ text } />;
  };

  return (
    <li className={ styles.item } onClick={ () => handleCheck( _id ) }>
      <div className={ styles.icon }>
        { renderIcon() }
      </div>
      <div className={ `${ checked ? styles.checked : "" }` }>
        { text }
      </div>
    </li>
  );
};
