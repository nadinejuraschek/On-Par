import { Button, Select, Text } from "components";
import { useContext, useMemo, useState } from "react";

import { GoalContext } from "contexts";
import { GoalsList } from './List';
import styles from "./goals.module.css";

export const Goals = (): JSX.Element => {
  const { completeGoals, incompleteGoals, loadingGoals } = useContext( GoalContext );

  const [openModal, setOpenModal] = useState(false);
  const [filter, setFilter] = useState(undefined);

  const filterOptions = useMemo(() => ([
    { label: 'All goals', value: undefined },
    { label: '3 Months', value: 'threeMonths' },
    { label: '6 Months', value: 'sixMonths' },
    { label: '9 Months', value: 'nineMonths' },
    { label: '12 Months', value: 'twelveMonths' },
    { label: 'Education', value: 'education' },
    { label: 'Personal', value: 'personal' },
    { label: 'Travel', value: 'travel' },
  ]), []);

  const toggleModal = () => setOpenModal(!openModal);

  console.log('filter: ', filter);

  return (
    <main>
      <div className={ styles.layout }>
        <div className={ styles.header }>
          <Text as="h2" size="xl" weight="bold">Your Goals</Text>
          <div className={ styles.actions }>
            <Select
              clearable
              handleChange={(selectedFilter) => setFilter(selectedFilter)}
              name="filter"
              onlyInput
              options={filterOptions}
              placeholder="Filter by"
              value={filter}
            />
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
