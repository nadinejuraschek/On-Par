import * as dayjs from 'dayjs';

import { Badge, Button, Text } from 'components';
import { useContext, useMemo } from 'react';

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
  type = 'personal',
}: IGoalItem): JSX.Element => {
  const { checkGoal } = useContext(GoalContext);

  const renderActions = useMemo(() => {
    if (checked) return null;

    return (
      <div className={ styles.overlay }>
        {checkable && <Button handleClick={() => checkGoal(id)} square><i className="check icon" /></Button>}
        {/* editable && <Button square><i className="edit icon" /></Button> */}
        {/* deletable && <Button square><i className="trash icon" /></Button> */}
      </div>
    );
  }, [checkable, checked, deletable, editable]);


  const badgeIcon = useMemo(() => (
    <>
      {/* @ts-ignore-next-line */}
      <img className={ styles.icon } alt={`${type}_icon`} src={getGoalIcon(type)} />
    </>
  ), [type]);

  return (
    <li
      className={ `${ styles.item } ${ checked ? styles.checked : styles.unchecked }` }
      // onClick={ () => handleCheck( _id ) }
      >
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
    </li>
  );
}
