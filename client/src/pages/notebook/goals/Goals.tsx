import { Button, Text } from "components";
import { GoalContext, UserContext } from "contexts";
import { useContext, useState } from "react";

import { GoalsList } from './List';
import styles from "./goals.module.css";

export const Goals = (): JSX.Element => {
  const { completeGoals, incompleteGoals, loadingGoals } = useContext( GoalContext );
  /* @ts-ignore-next-line */
  const { user } = useContext( UserContext );

  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => setOpenModal(!openModal);

  return (
    <main>
      <div className={ styles.layout }>
        <div className={ styles.header }>
          <Text as="h2" size="xl" weight="bold">Your Goals</Text>
          <div className={ styles.actions }>
            <div>Filter here</div>
            <Button handleClick={toggleModal} variant="primary">
              <i className="plus icon"></i> Add Goal
            </Button>
          </div>
        </div>
        <div className={ styles.content }>
          <GoalsList
            items={incompleteGoals}
            title="To Do"
          />
          <GoalsList
            items={incompleteGoals}
            title="Upcoming"
          />
          <GoalsList
            items={completeGoals}
            title="Completed"
          />
        </div>
      </div>
    </main>
  );
};
