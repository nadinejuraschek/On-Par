import { Event, Text } from 'components';

import { IEventsList } from './types';
import styles from './eventsList.module.css';

export const EventsList = ({ emptyMessage = '', list }: IEventsList): JSX.Element => {
  if (list.length === 0) {
    return (
      <div className={styles.empty}>
        <Text size="xs">{emptyMessage}</Text>
      </div>
    );
  }

  return (
    <div className={styles.list}>
      {list.map((event, index) => (
        <Event day={event.day} key={index} name={event.name} type={event.type} />
      ))}
    </div>
  )
};
