import Input from "components/Input";
import education from "images/education.svg";
import personal from "images/personal.svg";
import travel from "images/travel.svg";
import styles from "./goals.module.css";

const AddGoal = ( { text, type, handleText, handleType } ) => (
  <div className={ styles.addContainer }>
    <div className={ styles.typeContainer }>
      <button
        className={ `${
          type === "education" ? styles.activeType : styles.inactiveType
        }` }
        value="education"
        onClick={ () => handleType( "education" ) }
      >
        <img src={ education } alt="Educational Goal" />
      </button>
      <button
        className={ `${
          type === "personal" ? styles.activeType : styles.inactiveType
        }` }
        value="personal"
        onClick={ () => handleType( "personal" ) }
      >
        <img src={ personal } alt="Personal Goal" />
      </button>
      <button
        className={ `${
          type === "travel" ? styles.activeType : styles.inactiveType
        }` }
        value="travel"
        onClick={ () => handleType( "travel" ) }
      >
        <img src={ travel } alt="Travel Goal" />
      </button>
    </div>
    <Input
      className={ styles.input }
      name="goal"
      label="New Goal"
      value={ text }
      handleChange={ handleText }
    />
  </div>
);

export default AddGoal;
