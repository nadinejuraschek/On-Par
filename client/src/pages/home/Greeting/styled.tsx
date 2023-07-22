import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImage = styled.img`
  border-radius: 0.8rem;
  box-shadow: var(--shadow_xs);
  margin-right: 2rem;
  object-fit: cover;

  height: 8rem;
  width: 8rem;
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;