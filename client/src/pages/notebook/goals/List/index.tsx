import { GoalItem, LoadingPlaceholder, Text } from "components";
import { useMemo } from "react";
import { Group, List } from "./styled";
import { IGoalsList } from "./types";

export const GoalsList = ({ filter, items, loading, title }: IGoalsList): JSX.Element => {
  const renderItems = useMemo(() => {
    if (!items) return null;

    return items.filter((item) => {
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
  }, [filter, items]);

  if (loading) return <LoadingPlaceholder />;

  return (
    <Group>
      <Text as="h3" size="lg" weight="bold">{ title }</Text>
      <List>
        {renderItems}
      </List>
    </Group>
  );
}