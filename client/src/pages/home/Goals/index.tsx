import { Button, GoalItem, LoadingSpinner, Text } from "components";
import { useMemo } from "react";
import { EmptyList, Wrapper } from "./styled";
import { fetchGoals as fetchGoalsFn, GOAL_FILTER } from "api";
import { useQuery } from "@tanstack/react-query";
import { TGoal } from "types";

export const Goals = (): JSX.Element => {
  const { data: goals, isLoading, isError } = useQuery<TGoal[]>({
    queryKey: ["goals"],
    queryFn: () => fetchGoalsFn({ filter: GOAL_FILTER.UPCOMING }),
  });

  const renderGoals = useMemo(() => {
    if (isLoading) return <LoadingSpinner />;

    if (isError || !goals || goals.length === 0) {
      return (
        <EmptyList>
          <Text size="sm">You&apos;ve got this! Go set yourself some goals.</Text>
        </EmptyList>
      );
    }

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
