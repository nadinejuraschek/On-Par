import comingsoon from "images/comingsoon.svg";
import styles from "./today.module.css";

const TodayView = () => (
  <div className={ styles.container }>
    <h3>Today&apos;s Plan</h3>
    <div className={ styles.soon }>
      <div className={ styles.clock }>
        <img src={ comingsoon } alt="Coming Soon" />
      </div>
    </div>
  </div>
);

export default TodayView;
