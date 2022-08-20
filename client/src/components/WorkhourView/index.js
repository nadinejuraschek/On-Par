// STYLES
import styles from './workhour.module.css';

// COMPONENTS
import Button from 'components/Button/Primary';

const WorkhourView = () => {
  return (
    <div className={styles.container}>
      {/* <h3>This Week</h3>
      <div className={styles.soon}>
        <Button link="/notebook/workhours" label="Log Workhours" />
      </div> */}
      <h3 className={styles.developmentNotice}>This app is currently in development.</h3>
      <h2 className={styles.featureNotice}>To enjoy the first working features, go to </h2>
      <Button link="/notebook" label="Notebook" />
    </div>
  );
};

export default WorkhourView;