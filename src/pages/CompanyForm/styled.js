import { FaArrowLeft } from 'react-icons/fa6';
import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const PageTitle = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.fontSizes.veryBig};
  display: flex;
  gap: 0.5rem;
`;

export const PageTitleText = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.veryBig};
  font-weight: 600;
  margin: 0;
`;

export const BackIcon = styled(FaArrowLeft)`
  color: ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.fontSizes.veryBig};
  cursor: pointer;
`;

export const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 6px;
  padding: 1rem;
`;

export const FormHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  gap: 1rem;
`;

export const FormTab = styled.div`
  ${({ $selected = false, theme }) => {
    if (!$selected)
      return `
        color: ${theme.colors.darkGray};
        border-bottom: 2px solid transparent;`;

    return `
        color: ${theme.colors.blue};
        border-bottom: 2px solid ${theme.colors.green};
        font-weight: 600;
      `;
  }}

  display: flex;
  gap: 1rem;
  cursor: pointer;
`;

export const FormContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const FormRow = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
`;

export const FieldContainer = styled.div`
  flex: ${({ $flex }) => $flex || 1};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.default};
  color: ${({ theme }) => theme.colors.blue};
`;
