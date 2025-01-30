import { darken } from 'polished';
import { FaEye, FaPenToSquare, FaTrashCan } from 'react-icons/fa6';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`;

export const ContainerFields = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
`;

export const Field = styled.div`
  width: 100%;
  display: flex;
  gap: 0.2rem;
`;

export const FieldLabel = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.default};
  color: ${({ theme }) => theme.colors.blue};
  font-weight: 500;
`;

export const FieldValue = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.default};
  color: ${({ theme }) => theme.colors.blue};
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const ViewIcon = styled(FaEye)`
  color: ${({ theme }) => theme.colors.darkGray};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.medium};

  &:hover {
    color: ${({ theme }) => darken(0.1, theme.colors.black)};
  }
`;

export const EditIcon = styled(FaPenToSquare)`
  color: ${({ theme }) => theme.colors.darkGray};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.medium};

  &:hover {
    color: ${({ theme }) => darken(0.1, theme.colors.black)};
  }
`;

export const DeleteIcon = styled(FaTrashCan)`
  color: ${({ theme }) => theme.colors.red};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.medium};

  &:hover {
    color: ${({ theme }) => darken(0.1, theme.colors.red)};
  }
`;
