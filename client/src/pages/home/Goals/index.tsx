import { Button, GoalItem, LoadingSpinner, Text } from "components";
import { useFetchGoals } from "hooks";
import { useMemo } from "react";
import { Wrapper } from "./styled";

export const Goals = (): JSX.Element => {
  const { data: goals, loading } = useFetchGoals({ filter: "upcoming", limit: "3" });

  const renderGoals = useMemo(() => {
    if (loading) return <LoadingSpinner />;

    if (!goals) return null;

    return goals.map((item) => (
      <GoalItem
        checked={item.checked}
        deletable={false}
        dueDate={item?.dueDate}
        editable={false}
        id={item._id}
        key={item._id}
        label={item.text}
        text={item.text}
        type={item.type}
      />
    ));
  }, [goals, loading]);

  return (
    <Wrapper>
      <Text as="h3" size="lg" weight="bold">Goals</Text>
      <div>{renderGoals}</div>
      <Button link="/notebook/goals" variant="primary">Go to Goals</Button>
    </Wrapper>
  );
};
