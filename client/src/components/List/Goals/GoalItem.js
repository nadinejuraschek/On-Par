import education from "images/education.svg";
import personal from "images/personal.svg";
import travel from "images/travel.svg";
import styles from "./goals.module.css";

const GoalItem = ( { item, handleCheck } ) => {
  const { type, text, _id, checked } = item;

  const renderIcon = () => {
    if ( type === "education" ) <img src={ education } alt={ text } />;
    if ( type === "travel" ) <img src={ travel } alt={ text } />;
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

export default GoalItem;
