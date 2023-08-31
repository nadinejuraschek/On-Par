import { Text } from "components";
import styled from "styled-components";
import { IStyledProgress } from "./types";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.6rem;

  height: 100%;
`;

export const LoadingProgressContainer = styled.div`
  height: 4rem;
  width: 100%;

  border-radius: 0.8rem;
  overflow: hidden;
`;

export const ProgressContainer = styled.div`
  height: 4rem;
  width: 100%;

  background-color: var(--secondary_25);
  border: 1px solid transparent;
  border-radius: 0.8rem;
  padding: 0 1rem;

  overflow: hidden;

  position: relative;

  display: flex;
  align-items: center;
`;

export const Progress = styled.div<IStyledProgress>`
  position: absolute;
  top: 0;
  left: 0;

  height: 4rem;

  background: ${({ $isOverwork }) => $isOverwork ? "linear-gradient(to right, var(--error_50), var(--error_200))" : "linear-gradient(to right, var(--secondary_50), var(--secondary_200))"};

  width: ${({ $percentage }) => $percentage ? `${$percentage}%` : 0};
`;

export const ProgressLabel = styled(Text)`
  z-index: 1;
`;