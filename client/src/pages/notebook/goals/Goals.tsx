import { Goals as GoalsList, Text } from "components";

import { GoalContext } from "contexts";
import styles from "./goals.module.css";
import { useContext } from "react";

export const Goals = (): JSX.Element => {
  /* @ts-ignore-next-line */
  const { nineMonths, sixMonths, threeMonths, twelveMonths } = useContext( GoalContext );

  return (
    <main>
      <div className={ styles.layout }>
        <Text as="h2" className={ styles.header } size="xl" weight="bold">Your Goals</Text>

        <GoalsList className={ styles.three } month={ 3 } data={ threeMonths } />

        <GoalsList className={ styles.six } month={ 6 } data={ sixMonths } />

        <GoalsList className={ styles.nine } month={ 9 } data={ nineMonths } />

        <GoalsList className={ styles.twelve } month={ 12 } data={ twelveMonths } />

      </div>
    </main>
  );
};
