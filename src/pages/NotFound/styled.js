import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.black};
`;

export const NotFoundTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

export const NotFoundMessage = styled.p`
  font-size: 1.5rem;
`;
