import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Label = styled.div`
  position: absolute;
  top: 0;
  font-size: 1.75rem;

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
`;

export const Progress = styled.circle`
  transition: stroke-dashoffset 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;