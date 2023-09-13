import { DatePicker } from "components";
import styled from "styled-components";

export const StyledItem = styled.li`
  display: grid;
  grid-template-columns: 10rem 1fr 7.2rem;

  background-color: var(--white);
  border: 1px solid var(--grey_200);
  border-radius: 0.8rem;
  box-shadow: var(--shadow_xs);
  overflow: hidden;

  min-height: 6rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  border-left: 1px solid var(--grey_200);
  padding-right: 1.6rem;

  height: 100%;
  width: 100%;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 4rem;
  align-items: center;
  gap: 1.5rem;

  height: 6rem;
`;

export const StyledDatePicker = styled(DatePicker)`
  min-height: 4rem;
  min-width: unset;
`;

export const Actions = styled.div`
  border-left: 1px solid var(--grey_200);
  padding: 0.8rem 0;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  height: 100%;
`;