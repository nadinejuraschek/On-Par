import styled from "styled-components";
import { Text } from "../../Text";

export const SideNavMobile = styled.div`
  display: flex;
  flex-direction: column;

  background-color: var(--primary_50);
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
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  height: calc(100% - 2rem);
`;

export const FooterText = styled(Text)``;