import { darken } from 'polished';
import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 100%;
  background-color: ${({ theme, $primary }) =>
    $primary ? theme.colors.green : theme.colors.white};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme, $primary }) =>
      $primary
        ? darken(0.1, theme.colors.green)
        : darken(0.1, theme.colors.white)};
  }

  &:active {
    background-color: ${({ theme, $primary }) =>
      $primary
        ? darken(0.2, theme.colors.green)
        : darken(0.2, theme.colors.white)};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray};
    cursor: not-allowed;
  }
`;
