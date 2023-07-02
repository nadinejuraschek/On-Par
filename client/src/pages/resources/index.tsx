import { Resources as ResourcesList } from "components";
import styles from "./resources.module.css";

export const Resources = (): JSX.Element => (
  <div className={ styles.layout }>
    <ResourcesList />
  </div>
);
