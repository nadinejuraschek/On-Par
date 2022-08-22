import { TimeUtils } from "utils";
import styles from "./people.module.css";
import blankProfile from "../../../images/blankProfile.svg";

export const PeopleItem = ( { person } ) => {
  let age;
  if ( person.type === "hostchild" ) {
    age = TimeUtils.getAge( person.birthday );
  }

  return (
    <li className={ styles.item }>
      <img
        className={ styles.img }
        alt={ person.name }
        src={ person.profileImg === "" ? blankProfile : person.profileImg }
      />
      <div className={ styles.details }>
        <div className={ styles.name }>{ person.name }</div>
        { person.type === "hostchild"
          ? age
          : person.type === "hostparent"
            ? ""
            : person.country }
      </div>
    </li>
  );
};
