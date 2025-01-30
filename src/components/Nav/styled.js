import styled from 'styled-components';

export const NavContainer = styled.nav`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: 10px 20px;
`;

export const Item = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const IconContainer = styled.div`
  height: 100%;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ theme }) => `1px solid ${theme.colors.blue}`};
  border-radius: 50%;
  font-size: ${({ theme }) => theme.fontSizes.veryBig};
  color: ${({ theme }) => theme.colors.blue};
  cursor: pointer;
`;
