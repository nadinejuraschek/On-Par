import styled from "styled-components";
import { IStyledField } from "./types";
import { Text } from "../Text";

export const Field = styled.div<IStyledField>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.6rem;

  min-height: 9rem;
  min-width: 20rem;
  width: ${({ $fullWidth }) => $fullWidth ? "100%" : "auto"};
`;

export const IconInputWrapper = styled.div`
  position: relative;

  width: 100%;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 4rem;
  width: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ErrorText = styled(Text)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  color: var(--error_300);
  margin: 0;

  max-width: 100%;
`;