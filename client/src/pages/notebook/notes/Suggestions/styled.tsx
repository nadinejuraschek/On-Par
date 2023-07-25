import { Card } from "components";
import styled from "styled-components";

export const StyledCard = styled(Card)`
  grid-column: 1 / -1;
  grid-row: 1 / 2;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;