import styles from "./people.module.css";
import { PeopleItem } from "./PeopleItem";

export const PeopleList = ( { data, label } ) => (
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
