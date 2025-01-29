import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
`;

export const StyledInput = styled.input`
  padding: 10px;
  padding-left: ${({ $hasIcon }) => ($hasIcon ? '40px' : '10px')};
  border: 2px solid ${({ theme }) => theme.colors.gray};
  font-size: 16px;
  width: 100%;
  max-width: 300px;
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
