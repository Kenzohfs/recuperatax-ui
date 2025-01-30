import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledInput = styled.input`
  padding: 8px;
  padding-left: ${({ $hasIcon }) => ($hasIcon ? '40px' : '10px')};
  border: 2px solid ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.default};
  width: 100%;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.blue};
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
`;
