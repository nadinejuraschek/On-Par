import { IPeopleItem } from "./types";
import { TimeUtils } from "utils";
import blankProfile from "../../../images/blankProfile.svg";
import styles from "./people.module.css";

export const PeopleItem = ( { person }: IPeopleItem ): JSX.Element => {
  const { birthday, country, name, profileImg, type } = person;

  let age;
  if ( type === "hostchild" ) {
    /* @ts-ignore-next-line */
    age = TimeUtils.getAge( birthday );
  }

  return (
    <li className={ styles.item }>
      <img
        className={ styles.img }
        alt={ name }
        /* @ts-ignore-next-line */
        src={ profileImg === "" ? blankProfile : profileImg }
      />
      <div className={ styles.details }>
        <div className={ styles.name }>{ name }</div>
        { type === "hostchild"
          ? age
          : type === "hostparent"
            ? ""
            : country }
      </div>
    </li>
  );
};
