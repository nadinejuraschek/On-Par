import { Badge, Button, Icon } from "components";
import * as dayjs from "dayjs";
import { BadgesWrapper, ItemBody, Label, Overlay, StyledItem } from "./styled";
import { IGoalItem } from "./types";
import { getGoalIcon } from "./utils";
import { ActionDelete } from "./ActionDelete";
import { ActionEdit } from "./ActionEdit";
import { useMemo } from "react";
import { editGoal as editGoalFn } from "api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const GoalItem = ({
  checkable = true,
  checked,
  className = "",
  deletable = true,
  dueDate,
  editable = true,
  id,
  label,
  text,
  type = "personal",
}: IGoalItem): JSX.Element => {
  const queryClient = useQueryClient();

  const { isPending, mutate: editGoal } = useMutation({
    mutationFn: () => editGoalFn({
      goalId: id,
      updatedGoal: {
        _id: id,
        checked: true,
        dueDate,
        text,
        type,
      },
    }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['goals'] });
      toast.success("The goal has been updated successfully!");
    },
    onError: () => {
      toast.error("Could not update the goal. Please try again later!");
    },
  });

  const isOverdue = useMemo(() => !checked && dayjs().isAfter(dayjs(dueDate)), [checked, dueDate]);

  const renderActions = useMemo(() => {
    if (checked) return null;

    return (
      <Overlay>
        {checkable && (
          <Button loading={isPending} handleClick={editGoal} square>
            <Icon type="check" />
          </Button>
        )}
        {editable && <ActionEdit checked={checked} dueDate={dueDate} id={id} text={text} type={type} />}
        {deletable && <ActionDelete id={id} />}
      </Overlay>
    );
  }, [
    checkable,
    checked,
    deletable,
    dueDate,
    editGoal,
    editable,
    id,
    isPending,
    text,
    type,
  ]);

  const renderBadges = useMemo(() => {
    const badgeIcon = <Icon size="1.2rem" type={getGoalIcon(type)} />;

    return (
      <BadgesWrapper>
        <Badge icon={badgeIcon} variant={type} />
        {dueDate && <Badge label={dayjs(dueDate).format("MM/DD/YYYY")} />}
      </BadgesWrapper>
    );
  }, [dueDate, type]);

  return (
    <StyledItem
      className={className}
      $isChecked={checked}
      $isOverdue={isOverdue}
    >
      <ItemBody>
        <Label
          $isChecked={checked}
          size="md"
        >
          { label }
        </Label>
        {renderBadges}
      </ItemBody>
      {renderActions}
    </StyledItem>
  );
}
