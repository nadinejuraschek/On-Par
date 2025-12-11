import { Button, GoalItem, LoadingSpinner, Text } from "components";
import { useMemo } from "react";
import { Wrapper } from "./styled";
import { fetchGoals as fetchGoalsFn } from "api";
import { useQuery } from "@tanstack/react-query";
import { TGoal } from "types";

export const Goals = (): JSX.Element => {
  const { data: goals, isLoading, isError } = useQuery<TGoal[]>({
    queryKey: ["goals"],
    queryFn: () => fetchGoalsFn({ filter: "upcoming", limit: 3 }),
  });

  const renderGoals = useMemo(() => {
    if (isLoading) return <LoadingSpinner />;

    if (isError || !goals) return null;

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
  }, [goals, isError, isLoading]);

  return (
    <Wrapper>
      <Text as="h3" size="lg" weight="bold">Goals</Text>
      <div>{renderGoals}</div>
      <Button link="/notebook/goals" variant="primary">Go to Goals</Button>
    </Wrapper>
  );
};
