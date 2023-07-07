import { Text } from "../../Text";
import styled from "styled-components";

export const SideNavMobile = styled.div`
  background-color: var(--grey_25);
  padding: 24px;

  height: calc(100vh - 7rem);
  width: 100vw;
  z-index: 5;

  position: absolute;
  top: 7rem;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Links = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 1fr);

  height: calc(100% - 2rem);
`;

export const FooterText = styled(Text)``;