import { IEvent } from './types';
import { Text } from '../Text';
import styles from './event.module.css';

export const Event = ({ day, name, type = 'holiday' }: IEvent): JSX.Element => {
  return (
    <div className={`${styles.event} ${type === 'birthday' && styles.birthday}`}>
      <div className={styles.date}>
        <Text color="--grey_500" size="lg" weight="bold">{day}</Text>
      </div>
      <Text size="sm" weight="bold">{name}</Text>
    </div>
  );
}