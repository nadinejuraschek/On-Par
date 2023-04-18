import * as dayjs from 'dayjs';

import { Button, Goals as GoalsList, Text } from "components";
import { GoalContext, UserContext } from "contexts";
import { useContext, useState } from "react";

import styles from "./goals.module.css";

export const Goals = (): JSX.Element => {
  const { nineMonths, sixMonths, threeMonths, twelveMonths } = useContext( GoalContext );
  /* @ts-ignore-next-line */
  const { user } = useContext( UserContext );

  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => setOpenModal(!openModal);

  const today = new Date();
  const durationDays = dayjs( today ).diff( user?.startDate, "days" );
  const inPercent = (durationDays/395)*100;

  return (
    <main>
      <div className={ styles.layout }>
        <Text as="h2" className={ styles.header } size="xl" weight="bold">Your Goal</Text>
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
      <div className={ styles.content }>
        <div className={ styles.group }>
          <div className={ styles.groupHeader}>
            <Text as="h3" size="lg" weight="bold">3 Months</Text>
            <Button handleClick={toggleModal} variant="primary">
              <i className="plus icon"></i> Add Goal
            </Button>
          </div>
        </div>
        <div className={ styles.group }>
          <div className={ styles.groupHeader}>
            <Text as="h3" size="lg" weight="bold">6 Months</Text>
            <Button handleClick={toggleModal} variant="primary">
              <i className="plus icon"></i> Add Goal
            </Button>
          </div>
        </div>
        <div className={ styles.group }>
          <div className={ styles.groupHeader}>
            <Text as="h3" size="lg" weight="bold">9 Months</Text>
            <Button handleClick={toggleModal} variant="primary">
              <i className="plus icon"></i> Add Goal
            </Button>
          </div>
        </div>
        <div className={ styles.group }>
          <div className={ styles.groupHeader}>
            <Text as="h3" size="lg" weight="bold">12 Months</Text>
            <Button handleClick={toggleModal} variant="primary">
              <i className="plus icon"></i> Add Goal
            </Button>
          </div>
        </div>
      </div>
      {/*
        <GoalsList className={ styles.three } month={ 3 } data={ threeMonths } />

        <GoalsList className={ styles.six } month={ 6 } data={ sixMonths } />

        <GoalsList className={ styles.nine } month={ 9 } data={ nineMonths } />

        <GoalsList className={ styles.twelve } month={ 12 } data={ twelveMonths } /> */}
      </div>
    </main>
  );
};
