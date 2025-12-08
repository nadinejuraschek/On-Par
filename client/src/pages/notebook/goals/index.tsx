import { Header, Icon, Select } from "components";
import { useCallback, useMemo, useState } from "react";
import { AddGoalModal } from "./AddGoalModal";
import { GoalsList } from "./List";
import { Actions, Content, Filter, Layout, StyledButton } from "./styled";
import { TGoalType } from "types";

const Goals = (): JSX.Element => {
  const [openModal, setOpenModal] = useState(false);
  const [typeSort, setTypeSort] = useState<{ label: string; value: TGoalType } | undefined>(undefined);

  const typeOptions = useMemo(() => ([
    { label: "Education", value: "education" }, { label: "Personal", value: "personal" }, { label: "Travel", value: "travel" },
  ]), []);

  const toggleModal = useCallback(() => setOpenModal(!openModal), [openModal]);

  const renderThisMonthGoals = useMemo(() => {
    return (
      <GoalsList
        title="This Month"
        filter="month"
        type={typeSort?.value}
      />
    );
  }, [typeSort]);

  const renderUpcomingGoals = useMemo(() => {
    return (
      <GoalsList
        filter="upcoming"
        title="Upcoming / Overdue"
        type={typeSort?.value}
      />
    );
  }, [typeSort]);

  const renderCompletedGoals = useMemo(() => {
    return (
      <GoalsList
        filter="completed"
        title="Completed"
        type={typeSort?.value}
      />
    );
  }, [typeSort]);

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
              handleChange={(selectedFilter) => setTypeSort(selectedFilter)}
              name="filter"
              onlyInput
              options={typeOptions}
              placeholder="Filter by"
              value={typeSort}
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