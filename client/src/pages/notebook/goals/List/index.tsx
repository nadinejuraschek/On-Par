import { GoalItem, Text } from 'components';

import { IGoalsList } from './types';
import styles from './goalsList.module.css';
import { useMemo } from 'react';

export const GoalsList = ({ items, title }: IGoalsList): JSX.Element => {
  const renderItems = useMemo(() => {
    if (!items) return null;

    return items.map((item, index) => (
      <GoalItem
        checked={item.checked}
        handleCheck={() => {}}
        key={index}
        label={item.text}
        type={item.type}
      />
    ));
  }, [items]);

  return (
    <div className={ styles.group }>
      <div className={ styles.groupHeader}>
        <Text as="h3" size="lg" weight="bold">{ title }</Text>
      </div>
      <ul className={ styles.list }>
        {renderItems}
      </ul>
    </div>
  );
}