import { Button, GoalItem, LoadingSpinner, Text } from "components";
import { Wrapper } from "./styled";
import { useGoals } from "hooks";
import { useMemo } from "react";

export const Goals = (): JSX.Element => {
  const { loading, thisMonthGoals } = useGoals();

  const renderGoals = useMemo(() => {
    if (loading) return <LoadingSpinner />;

    return thisMonthGoals.slice(0, 3).map((item) => (
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
  }, [loading, thisMonthGoals]);

  return (
    <Wrapper>
      <Text as="h3" size="lg" weight="bold">Goals</Text>
      <div>{renderGoals}</div>
      <Button link="/notebook/goals" variant="primary">Go to Goals</Button>
    </Wrapper>
  );
};
