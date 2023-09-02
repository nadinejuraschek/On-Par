import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImage = styled.img`
  background-color: var(--secondary_25);
  border-radius: 0.8rem;
  box-shadow: var(--shadow_xs);
  margin-right: 2.4rem;
  object-fit: cover;

  height: 10rem;
  width: 10rem;
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;