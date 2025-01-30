import React from 'react';
import { StyledButton } from './styled';

const Button = ({
  children,
  primary = true,
  onClick,
  disabled = false,
  fullWidth = false,
}) => {
  return (
    <StyledButton
      $primary={primary}
      $fullWidth={fullWidth}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
