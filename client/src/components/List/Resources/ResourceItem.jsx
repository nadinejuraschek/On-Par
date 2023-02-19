import { Button } from "components";
import styles from "./resources.module.css";

export const ResourceItem = ( { active, icon, label, link } ) => (
  <Button className={ `${ styles.item } ${ active ? "" : styles.inactive }` } href={ link }>
    <div className={ styles.icon }>
      <img src={ icon } alt={ label } />
    </div>
    { label }
  </Button>
);
