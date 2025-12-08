import { Button, Icon } from "components";
import { useMemo, useState } from "react";
import { EditGoalModal } from "./EditGoalModal";
import { TGoalType } from "types";

export const ActionEdit = ({
  checked,
  dueDate,
  id,
  text,
  type,
}: {
  checked: boolean;
  dueDate?: Date;
  id: string;
  text: string;
  type: TGoalType;
}) => {
  const [openEditModal, setOpenEditModal] = useState(false);

  const renderEditModal = useMemo(() => {
    if (!openEditModal) return null;

    return (
      <EditGoalModal
        checked={checked}
        dueDate={dueDate}
        id={id}
        text={text}
        toggleModal={() => setOpenEditModal(false)}
        type={type}
      />
    );
  }, [
    checked,
    dueDate,
    id,
    openEditModal,
    text,
    type,
  ]);

  return (
    <>
      <Button handleClick={() => setOpenEditModal(true)} square>
        <Icon type="pen" />
      </Button>
      {renderEditModal}
    </>
  );
}