import styled from "styled-components";
import { IField, IToggle } from "./types";

export const Field = styled.div<IField>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.6rem;

  height: ${({ withLabel }) => withLabel ? "10.6rem" : "8rem"};
  min-width: 20rem;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const Toggle = styled.div<IToggle>`
  background-color: ${({ isSelected }) => isSelected ? "var(--primary_100)" : "var(--primary_50)"};
  border: 2px solid;
  border-color: ${({ isSelected }) => isSelected ? "var(--primary_300)" : "var(--primary_50)"};
  border-radius: 0.8rem;
  cursor: pointer;
  padding: 1.6rem;

  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const ErrorText = styled(Text)`
  color: var(--error_300);

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  max-width: 100%;
`;