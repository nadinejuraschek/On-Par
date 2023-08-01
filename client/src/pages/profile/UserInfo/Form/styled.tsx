import { Banner, Input } from "components";
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

export const ExtensionInfo = styled(Banner)`
  display: none;

  @media only screen and (min-width: 600px) {
    display: flex;
    grid-column: 1 / -1;
  }
`;