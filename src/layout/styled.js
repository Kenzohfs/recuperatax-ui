import styled from 'styled-components';

export const Container = styled.div`
  height: 100dvh;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${({ theme }) => theme.colors.gray.lighter};
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  border-top: 5px solid ${({ theme }) => theme.colors.green};
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  margin-left: 60px;
`;
