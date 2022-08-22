import { Resources as ResourcesList } from "components/List";
import styles from "./resources.module.css";

export const Resources = () => (
  <main>
    <div className={ styles.layout }>
      <h2 className={ styles.header }>Resources</h2>
      <ResourcesList />
    </div>
  </main>
);
