import styled from 'styled-components';

export const CompaniesHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  align-items: stretch;
`;

export const CompaniesTitle = styled.h1`
  color: ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 600;
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SearchContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ButtonContainer = styled.div`
  height: 100%;
`;
