import { Input } from "components";
import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 1.4rem;

  @media only screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);

    grid-column: 1 / -1;
    grid-row: 2 / 3;
  }
`;

export const ExtensionInput = styled(Input)`
  display: none;

  button {
    width: max-content;
  }

  @media only screen and (min-width: 600px) {
    display: flex;
  }
`;

export const ExtensionInfo = styled.div`
  display: none;

  @media only screen and (min-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.4rem;

    background-color: var(--secondary_25);
    border: 1px solid var(--grey_200);
    border-radius: 0.8rem;
    padding: 1.6rem;

    grid-column: 1 / 3;
  }
`;