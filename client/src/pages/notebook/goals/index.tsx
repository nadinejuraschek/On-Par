import { Header, Icon, Select } from "components";
import { useCallback, useMemo, useState } from "react";
import { AddGoalModal } from "./AddGoalModal";
import { GoalsList } from "./List";
import { Actions, Content, Filter, Layout, StyledButton } from "./styled";

const Goals = (): JSX.Element => {
  const [openModal, setOpenModal] = useState(false);
  const [filter, setFilter] = useState(undefined);

  const filterOptions = useMemo(() => ([
    { label: "Education", value: "education" }, { label: "Personal", value: "personal" }, { label: "Travel", value: "travel" },
  ]), []);

  const toggleModal = useCallback(() => setOpenModal(!openModal), [openModal]);

  const renderThisMonthGoals = useMemo(() => {
    return (
      <GoalsList
        filter={filter}
        title="This Month"
        type="month"
      />
    );
  }, [filter]);

  const renderUpcomingGoals = useMemo(() => {
    return (
      <GoalsList
        filter={filter}
        title="Upcoming / Overdue"
        type="upcoming"
      />
    );
  }, [filter]);

  const renderCompletedGoals = useMemo(() => {
    return (
      <GoalsList
        filter={filter}
        title="Completed"
        type="completed"
      />
    );
  }, [filter]);

  const renderAddGoalModal = useMemo(() => {
    if (!openModal) return null;

    return <AddGoalModal toggleModal={toggleModal} />;
  }, [openModal, toggleModal]);

  return (
    <>
      <Header pageTitle="Goals" />
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
            <Icon type="plus" /> Add Goal
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

export default Goals;