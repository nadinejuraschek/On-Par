import education from "images/education.svg";
import personal from "images/personal.svg";
import travel from "images/travel.svg";
import styles from "./goals.module.css";

export const GoalItem = ( { handleCheck, item } ) => {
  const { _id, checked, text, type } = item;

  const renderIcon = () => {
    if ( type === "education" ) {
      return <img src={ education } alt={ text } />;
    }
    if ( type === "travel" ) {
      return <img src={ travel } alt={ text } />;
    }
    return <img src={ personal } alt={ text } />;
  };

  return (
    <>
      { /* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */ }
      <li className={ styles.item } onClick={ () => handleCheck( _id ) }>
        <div className={ styles.icon }>
          { renderIcon() }
        </div>
        <div className={ `${ checked ? styles.checked : "" }` }>
          { text }
        </div>
      </li>
    </>
  );
};
