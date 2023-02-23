import { Text } from "components";
import comingsoon from "images/comingsoon.svg";
import styles from "./today.module.css";

export const DailyPlan = (): JSX.Element => (
  <div className={ styles.container }>
    <Text as="h3" size="lg" weight="bold">Today&apos;s Plan</Text>
    <div className={ styles.soon }>
      <div className={ styles.clock }>
        {/* @ts-ignore-next-line */}
        <img src={ comingsoon } alt="Coming Soon" />
      </div>
    </div>
  </div>
);
