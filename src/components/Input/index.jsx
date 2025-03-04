import React from 'react';
import { IconWrapper, InputContainer, StyledInput } from './styled';

const Input = ({ name, placeholder, value, onChange, icon: Icon, ...rest }) => {
  return (
    <InputContainer>
      {Icon && (
        <IconWrapper>
          <Icon />
        </IconWrapper>
      )}
      <StyledInput
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        $hasIcon={!!Icon}
        {...rest}
      />
    </InputContainer>
  );
};

export default Input;
