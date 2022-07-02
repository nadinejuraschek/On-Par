import List from "components/List/Resources";
import styles from "./resources.module.css";

const Resources = () => {
  return (
    <main>
      <div className={ styles.layout }>
        <h2 className={ styles.header }>Resources</h2>
        <List />
      </div>
    </main>
  );
};

export default Resources;
