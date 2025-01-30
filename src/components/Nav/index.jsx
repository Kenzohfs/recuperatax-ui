import React from 'react';
import { FaRegBell, FaRegUser } from 'react-icons/fa6';
import { IconContainer, Item, NavContainer } from './styled';

const Nav = () => {
  return (
    <NavContainer>
      <Item>
        <h1>Logo</h1>
      </Item>

      <Item>
        <IconContainer>
          <FaRegBell />
        </IconContainer>
        <IconContainer>
          <FaRegUser />
        </IconContainer>
      </Item>
    </NavContainer>
  );
};

export default Nav;
