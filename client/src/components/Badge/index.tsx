import { IBadge } from './types';
import { Text } from 'components';
import styles from './badge.module.css';

export const Badge = ({ className = '', icon, label }: IBadge): JSX.Element => {
  return (
    <div className={ `${styles.badge} ${className}` }>
      {icon && icon}
      <Text size="sm">{label}</Text>
    </div>
  );
}
