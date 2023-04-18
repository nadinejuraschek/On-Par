import * as dayjs from 'dayjs';

import { GoalContext, UserContext } from "contexts";
import { Goals as GoalsList, Text } from "components";

import styles from "./goals.module.css";
import { useContext } from "react";

export const Goals = (): JSX.Element => {
  const { nineMonths, sixMonths, threeMonths, twelveMonths } = useContext( GoalContext );
  /* @ts-ignore-next-line */
  const { user } = useContext( UserContext );

  const today = new Date();
  const durationDays = dayjs( today ).diff( user?.startDate, "days" );
  const inPercent = (durationDays/395)*100;

  return (
    <main className={ styles.main }>
      <div className={ styles.layout }>
      <div className={ styles.header }>
        <Text as="h2" size="xl" weight="bold">Your Goals</Text>
        {/* <Button handleClick={toggleModal} variant="primary">
          <i className="plus icon"></i> Add Note
        </Button> */}
      </div>
      <div className={ styles.progressContainer }>
        <div className={ styles.progress } style={{ width: `${inPercent}%` }} />
        <Text
          className={ styles.progressLabel }
          color={"--secondary_700"}
          size="sm"
        >
          <strong>{durationDays} days</strong>
        </Text>
      </div>
      {/* <Text as="h2" className={ styles.header } size="xl" weight="bold">Your Goals</Text>

        <GoalsList className={ styles.three } month={ 3 } data={ threeMonths } />

        <GoalsList className={ styles.six } month={ 6 } data={ sixMonths } />

        <GoalsList className={ styles.nine } month={ 9 } data={ nineMonths } />

        <GoalsList className={ styles.twelve } month={ 12 } data={ twelveMonths } /> */}
      </div>
    </main>
  );
};
