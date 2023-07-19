import styled from "styled-components";
import { Text } from "components";

export const FormWrapper = styled.div`
  background-color: var(--white);
  border-radius: 2rem;
  filter: var(--shadow_sm);
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  width: calc(100% - 4rem);

  @media only screen and (min-width: 600px) {
    padding: 4rem;

    max-width: 500px;
    width: 70%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  width: 100%;
`;

export const FieldPair = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media only screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

export const Divider = styled.div`
  position: relative;

  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  hr {
    border: none;
    border-top: 1px solid var(--grey_400);
    width: 100%;
  }
`;

export const DividerText = styled(Text)`
  position: absolute;

  background-color: var(--white);
  padding: 0 1.6rem;
`;