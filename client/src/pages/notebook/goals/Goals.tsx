import { Button, Select, Text } from "components";
import { useCallback, useContext, useMemo, useState } from "react";

import { AddGoalModal } from "./AddGoalModal";
import { GoalContext } from "contexts";
import { GoalsList } from './List';
import styles from "./goals.module.css";

export const Goals = (): JSX.Element => {
  const { completeGoals, incompleteGoals, loadingGoals } = useContext( GoalContext );

  const [openModal, setOpenModal] = useState(false);
  const [filter, setFilter] = useState(undefined);

  const filterOptions = useMemo(() => ([
    { label: 'Education', value: 'education' },
    { label: 'Personal', value: 'personal' },
    { label: 'Travel', value: 'travel' },
  ]), []);

  const toggleModal = useCallback(() => setOpenModal(!openModal), [openModal]);

  const renderAddGoalModal = useMemo(() => {
    if (!openModal) {
      return null;
    }

    return <AddGoalModal toggleModal={toggleModal} />;
  }, [openModal, toggleModal]);

  return (
    <main>
      <div className={ styles.layout }>
        <div className={ styles.header }>
          <Text as="h2" size="xl" weight="bold">Your Goals</Text>
          <div className={ styles.actions }>
            <div className={ styles.filter }>
              <Select
                clearable
                handleChange={(selectedFilter) => setFilter(selectedFilter)}
                name="filter"
                onlyInput
                options={filterOptions}
                placeholder="Filter by"
                value={filter}
              />
            </div>
            <Button handleClick={toggleModal} variant="primary">
              <i className="plus icon"></i> Add Goal
            </Button>
          </div>
        </div>
        <div className={ styles.content }>
          <GoalsList
            filter={filter}
            items={incompleteGoals}
            loading={loadingGoals}
            title="To Do"
          />
          <GoalsList
            filter={filter}
            items={incompleteGoals}
            loading={loadingGoals}
            title="Upcoming"
          />
          <GoalsList
            filter={filter}
            items={completeGoals}
            loading={loadingGoals}
            title="Completed"
          />
        </div>
      </div>
      {renderAddGoalModal}
    </main>
  );
};
