import { Select } from "components";
import { useCallback, useMemo, useState } from "react";
import { Actions, Content, Filter, Layout, StyledButton } from "./styled";
import { AddGoalModal } from "./AddGoalModal";
import { GoalsList } from './List';
import { useGoals } from "hooks";

export const Goals = (): JSX.Element => {
  const { completeGoals, loading, thisMonthGoals, upcomingGoals } = useGoals();

  const [openModal, setOpenModal] = useState(false);
  const [filter, setFilter] = useState(undefined);

  const filterOptions = useMemo(() => ([
    { label: 'Education', value: 'education' },
    { label: 'Personal', value: 'personal' },
    { label: 'Travel', value: 'travel' },
  ]), []);

  const toggleModal = useCallback(() => setOpenModal(!openModal), [openModal]);

  const renderThisMonthGoals = useMemo(() => {
    return (
      <GoalsList
        filter={filter}
        items={thisMonthGoals}
        loading={loading}
        title="This Month"
      />
    );
  }, [thisMonthGoals, filter, loading]);

  const renderUpcomingGoals = useMemo(() => {
    return (
      <GoalsList
        filter={filter}
        items={upcomingGoals}
        loading={loading}
        title="Upcoming / Overdue"
      />
    );
  }, [upcomingGoals, filter, loading]);

  const renderCompletedGoals = useMemo(() => {
    return (
      <GoalsList
        filter={filter}
        items={completeGoals}
        loading={loading}
        title="Completed"
      />
    );
  }, [completeGoals, filter, loading]);

  const renderAddGoalModal = useMemo(() => {
    if (!openModal) return null;

    return <AddGoalModal toggleModal={toggleModal} />;
  }, [openModal, toggleModal]);

  return (
    <>
      <Layout>
        <Actions>
          <Filter>
            <Select
              clearable
              handleChange={(selectedFilter) => setFilter(selectedFilter)}
              name="filter"
              onlyInput
              options={filterOptions}
              placeholder="Filter by"
              value={filter}
            />
          </Filter>
          <StyledButton handleClick={toggleModal} variant="primary">
            <i className="plus icon"></i> Add Goal
          </StyledButton>
        </Actions>
        <Content>
          {renderThisMonthGoals}
          {renderUpcomingGoals}
          {renderCompletedGoals}
        </Content>
      </Layout>
      {renderAddGoalModal}
    </>
  );
};
