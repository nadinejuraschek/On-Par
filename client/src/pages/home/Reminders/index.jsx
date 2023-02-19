import { Text } from "components";
import comingsoon from "images/comingsoon.svg";
import styles from "./reminder.module.css";

export const Reminders = () => (
  <div className={ styles.container }>
    <Text as="h3" size="lg" weight="bold">Reminders</Text>
    <div className={ styles.soon }>
      <div className={ styles.clock }>
        <img src={ comingsoon } alt="Coming Soon" />
      </div>
    </div>
  </div>
);
