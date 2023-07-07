import styled from 'styled-components';

export const Item = styled.li`
  list-style: none;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
`;

export const Avatar = styled.img`
  border-radius: 50%;

  object-fit: cover;
  height: 40px;
  width: 40px;
`;

export const Details = styled.div`
  margin-left: 1rem;
`;