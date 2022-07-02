import styles from "./people.module.css";
import PeopleItem from "./PeopleItem";

const PeopleList = ( { data, label } ) => (
  <div className={ styles.people }>
    <label className={ styles.label }>
      { label }:
    </label>
    <ul className={ styles.list }>
      {
        data.map( ( person, index ) => <PeopleItem key={ index } person={ person } /> )
      }
    </ul>
  </div>
);

export default PeopleList;
