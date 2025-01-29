import React from 'react';
import { StyledButton } from './styled';

const Button = ({ children, primary = true, onClick, disabled = false }) => {
  return (
    <StyledButton $primary={primary} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
