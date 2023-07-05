import { IBadge } from './types';
import { StyledBadge } from './styled';
import { Text } from 'components';

export const Badge = ({ className = '', icon, label }: IBadge): JSX.Element => (
  <StyledBadge className={className}>
    {icon && icon}
    <Text size="xs">{label}</Text>
  </StyledBadge>
);
