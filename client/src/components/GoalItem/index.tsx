import * as dayjs from 'dayjs';

import { Badge, Button, Modal, Text } from 'components';
import { useCallback, useContext, useMemo, useState } from 'react';

import { EditGoalModal } from './EditGoalModal';
import { GoalContext } from 'contexts';
import { IGoalItem } from './types';
import { getGoalIcon } from './utils';
import styles from './goalItem.module.css';

export const GoalItem = ({
  checkable = true,
  checked,
  deletable = true,
  dueDate,
  editable = true,
  id,
  label,
  text,
  type = 'personal',
}: IGoalItem): JSX.Element => {
  const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const { checkGoal, deleteGoal } = useContext(GoalContext);

  const closeModal = useCallback(() => {
    setOpenDeleteConfirm(false);
    setOpenEditModal(false);
  }, []);

  const renderActions = useMemo(() => {
    if (checked) return null;

    return (
      <div className={ styles.overlay }>
        {checkable && (
          <Button handleClick={() => checkGoal(id)} square>
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
      </div>
    );
  }, [checkable, checked, checkGoal, deletable, editable, id]);

  const renderDeleteConfirmModal = useMemo(() => {
    if (!openDeleteConfirm) return null;

    const actions = (
      <>
        <Button fullWidth handleClick={closeModal}>Cancel</Button>
        <Button fullWidth handleClick={() => deleteGoal(id)} variant="danger">Delete</Button>
      </>
    );

    return (
      <Modal actions={actions} handleClose={closeModal} title="Delete Goal">
        Are you sure you&apos;d like to delete this goal?
      </Modal>
    )
  }, [id, deleteGoal, openDeleteConfirm, closeModal]);

  const renderEditModal = useMemo(() => {
    if (!openEditModal) return null;

    return (
      <EditGoalModal checked={checked} dueDate={dueDate} id={id} text={text} toggleModal={closeModal} type={type} />
    );
  }, [checked, dueDate, id, openEditModal, text, closeModal, type]);


  const badgeIcon = useMemo(() => (
    <>
      {/* @ts-ignore-next-line */}
      <img className={ styles.icon } alt={`${type}_icon`} src={getGoalIcon(type)} />
    </>
  ), [type]);

  const isOverdue = useMemo(() => !checked && dayjs().isAfter(dayjs(dueDate)), [checked, dueDate]);

  return (
    <li className={ `${ styles.item } ${ checked ? styles.checked : styles.unchecked } ${ isOverdue ? styles.overdue : ''}` }>
      <div className={ styles.body }>
        <Text
          className={ `${ styles.label } ${ checked ? styles.checked : styles.unchecked }` }
          size="md"
        >
          { label }
        </Text>
        <div className={ styles.badges }>
          <Badge className={ styles[type] } icon={badgeIcon} label={type.toUpperCase()} />
          {dueDate && <Badge label={dayjs(dueDate).format('MM/DD/YYYY')} />}
        </div>
      </div>
      {renderActions}
      {renderDeleteConfirmModal}
      {renderEditModal}
    </li>
  );
}
