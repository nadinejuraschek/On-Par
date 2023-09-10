import { Text } from "components";
import { StyledBadge } from "./styled";
import { IBadge } from "./types";

export const Badge = ({ className = "", icon, label, variant }: IBadge): JSX.Element => (
  <StyledBadge className={className} $variant={variant}>
    { icon && icon }
    { label && <Text color="inherit" size="xs">{label}</Text>}
  </StyledBadge>
);
