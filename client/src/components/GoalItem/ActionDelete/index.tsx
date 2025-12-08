import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { deleteGoal as deleteGoalFn } from 'api';
import { useCallback, useMemo, useState } from "react";
import { Button, Icon, Modal } from "components";

export const ActionDelete = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();

  const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);

  const { isPending, mutate: deleteGoal } = useMutation({
    mutationFn: deleteGoalFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['goals'] });
      toast.success("The goal has been deleted successfully!");
    },
    onError: () => {
      toast.error("Could not delete the goal. Please try again later!");
    },
  });

  const handleDeleteGoal = useCallback(() => {
    deleteGoal(id);
    setOpenDeleteConfirm(false);
  }, [deleteGoal, id]);

  const renderDeleteConfirmModal = useMemo(() => {
    if (!openDeleteConfirm) return null;

    const actions = (
      <>
        <Button fullWidth handleClick={() => setOpenDeleteConfirm(false)}>Cancel</Button>
        <Button
          fullWidth
          handleClick={handleDeleteGoal}
          loading={isPending}
          variant="danger"
        >
          Delete
        </Button>
      </>
    );

    return (
      <Modal actions={actions} handleClose={() => setOpenDeleteConfirm(false)} title="Delete Goal">
        Are you sure you&apos;d like to delete this goal?
      </Modal>
    )
  }, [
    handleDeleteGoal,
    isPending,
    openDeleteConfirm,
    setOpenDeleteConfirm,
  ]);

  return (
    <>
      <Button handleClick={() => setOpenDeleteConfirm(true)} square>
        <Icon type="trash" />
      </Button>
      {renderDeleteConfirmModal}
    </>
  );
}