import { IPeopleList } from "./types";
import { PeopleItem } from "./PeopleItem";
import { TPerson } from "./types";
import styles from "./people.module.css";

export const PeopleList = ( { data, label }: IPeopleList ): JSX.Element => (
  <div className={ styles.people }>
    <label className={ styles.label }>
      { label }:
    </label>
    <ul className={ styles.list }>
      {
        data.map( ( person: TPerson, index: number ) => <PeopleItem key={ index } person={ person } /> )
      }
    </ul>
  </div>
);
