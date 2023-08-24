import { Badge, Button, Modal } from "components";
import * as dayjs from "dayjs";
import { useDeleteGoal, useEditGoal } from "hooks";
import { useCallback, useMemo, useState } from "react";
import { EditGoalModal } from "./EditGoalModal";
import { BadgesWrapper, ItemBody, Label, Overlay, StyledIcon, StyledItem } from "./styled";
import { IGoalItem } from "./types";
import { getGoalIcon } from "./utils";

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
  const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [submittingDelete, setSubmittingDelete] = useState(false);

  const { deleteGoal } = useDeleteGoal();
  const { editGoal } = useEditGoal();

  const closeModal = useCallback(() => {
    setOpenDeleteConfirm(false);
    setOpenEditModal(false);
  }, []);

  const handleEditGoal = useCallback(() => {
    editGoal(id, { checked: true });
    // TODO: refetch goals
    // refetchGoals();
  }, [editGoal, id]);

  const handleDeleteGoal = useCallback(() => {
    setSubmittingDelete(true);
    deleteGoal(id);
    setSubmittingDelete(false);
    setOpenDeleteConfirm(false);
    // TODO: refetch goals
    // refetchGoals();
  }, [deleteGoal, id]);

  const isOverdue = useMemo(() => !checked && dayjs().isAfter(dayjs(dueDate)), [checked, dueDate]);

  const renderActions = useMemo(() => {
    if (checked) return null;

    return (
      <Overlay>
        {checkable && (
          <Button handleClick={handleEditGoal} square>
            <i className="check icon" />
          </Button>
        )}
        {editable && (
          <Button handleClick={() => setOpenEditModal(true)} square>
            <i className="edit icon" />
          </Button>
        )}
        {deletable && (
          <Button handleClick={() => setOpenDeleteConfirm(true)} square>
            <i className="trash icon" />
          </Button>
        )}
      </Overlay>
    );
  }, [checkable,
    checked,
    deletable,
    editable,
    handleEditGoal]);

  const renderBadges = useMemo(() => {
    const badgeIcon = <StyledIcon alt={`${type}_icon`} src={getGoalIcon(type)} />;

    return (
      <BadgesWrapper>
        <Badge icon={badgeIcon} label={type.toUpperCase()} variant={type} />
        {dueDate && <Badge label={dayjs(dueDate).format("MM/DD/YYYY")} />}
      </BadgesWrapper>
    );
  }, [dueDate, type]);

  const renderDeleteConfirmModal = useMemo(() => {
    if (!openDeleteConfirm) return null;

    const actions = (
      <>
        <Button fullWidth handleClick={closeModal}>Cancel</Button>
        <Button
          fullWidth
          handleClick={handleDeleteGoal}
          loading={submittingDelete}
          variant="danger"
        >
          Delete
        </Button>
      </>
    );

    return (
      <Modal actions={actions} handleClose={closeModal} title="Delete Goal">
        Are you sure you&apos;d like to delete this goal?
      </Modal>
    )
  }, [openDeleteConfirm,
    closeModal,
    handleDeleteGoal,
    submittingDelete]);

  const renderEditModal = useMemo(() => {
    if (!openEditModal) return null;

    return (
      <EditGoalModal checked={checked} dueDate={dueDate} id={id} text={text} toggleModal={closeModal} type={type} />
    );
  }, [checked,
    dueDate,
    id,
    openEditModal,
    text,
    closeModal,
    type]);

  return (
    <StyledItem
      className={className}
      isChecked={checked}
      isOverdue={isOverdue}
    >
      <ItemBody>
        <Label
          isChecked={checked}
          size="md"
        >
          { label }
        </Label>
        {renderBadges}
      </ItemBody>
      {renderActions}
      {renderDeleteConfirmModal}
      {renderEditModal}
    </StyledItem>
  );
}
