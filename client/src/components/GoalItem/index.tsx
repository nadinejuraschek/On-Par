import { Badge, Text } from 'components';

import { IGoalItem } from './types';
import { getGoalIcon } from './utils';
import styles from './goalItem.module.css';
import { useMemo } from 'react';

export const GoalItem = ({ checked, handleCheck, label, type = 'personal' }: IGoalItem): JSX.Element => {
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
          <Badge label="MM/dd/yyyy" />
        </div>
      </div>
    </li>
  );
}
