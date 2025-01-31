import styled from 'styled-components';

export const CompaniesHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export const CompaniesTitle = styled.h1`
  color: ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.fontSizes.veryBig};
  font-weight: 600;
  margin: 0;
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SearchContainer = styled.div`
  height: 100%;
  display: flex;
  gap: 0.2rem;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
