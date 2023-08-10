import { GoalItem, LoadingPlaceholder, Text } from "components";
import { useFetchGoals } from "hooks";
import { useMemo } from "react";
import { Group, List } from "./styled";
import { IGoalsList } from "./types";

export const GoalsList = ({ filter, title, type }: IGoalsList): JSX.Element => {
  const { data: goals, loading } = useFetchGoals({ filter: type });

  const renderItems = useMemo(() => {
    if (loading) return <LoadingPlaceholder />;

    if (!goals) return null;

    return goals.filter((item) => {
      if (!filter) {
        return item;
      }
      return filter?.value === item.type;
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
  }, [filter, goals, loading]);

  return (
    <Group>
      <Text as="h3" size="lg" weight="bold">{ title }</Text>
      <List>
        {renderItems}
      </List>
    </Group>
  );
}