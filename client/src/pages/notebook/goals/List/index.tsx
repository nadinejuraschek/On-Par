import { GoalItem, LoadingPlaceholder, Text } from "components";
import { useMemo } from "react";
import { Group, List } from "./styled";
import { IGoalsList } from "./types";
import { toast } from "react-toastify";
import { fetchGoals as fetchGoalsFn } from "api";
import { useQuery } from "@tanstack/react-query";
import { TGoal } from "types";

export const GoalsList = ({ filter, title, type }: IGoalsList): JSX.Element => {
  const { data: goals, isLoading, isError } = useQuery<TGoal[]>({
    queryKey: ["goals", filter],
    queryFn: () => fetchGoalsFn({ filter }),
  });

  if (isError) {
    toast.error("Could not fetch goals. Please try again later!");
  }

  const renderItems = useMemo(() => {
    if (isLoading) return <LoadingPlaceholder />;

    if (!goals) return null;

    return goals.filter((item) => {
      if (!type) {
        return item;
      }
      return type === item.type;
    }).map((item) => (
      <GoalItem
        checkable
        checked={item.checked}
        deletable
        dueDate={item?.dueDate}
        editable
        key={item._id}
        id={item._id}
        label={item.text}
        text={item.text}
        type={item.type}
      />
    ));
  }, [goals, isLoading, type]);

  return (
    <Group>
      <Text as="h3" size="lg" weight="bold">{ title }</Text>
      <List>
        {renderItems}
      </List>
    </Group>
  );
}