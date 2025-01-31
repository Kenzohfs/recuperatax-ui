import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
`;

export const PageTitleText = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.veryBig};
  color: ${({ theme }) => theme.colors.blue};
  font-weight: 600;
  margin: 0;
`;

export const PageTextDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.default};
  color: ${({ theme }) => theme.colors.blue};
  margin: 0;
`;
