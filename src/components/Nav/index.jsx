import React from 'react';
import { FaRegBell, FaRegUser } from 'react-icons/fa6';
import Logo from '../../assets/logo-light-gray.png';
import {
  IconContainer,
  Item,
  LogoContainer,
  LogoImg,
  NavContainer,
} from './styled';

const Nav = () => {
  return (
    <NavContainer>
      <Item>
        <LogoContainer>
          <LogoImg src={Logo} alt="Logo" />
        </LogoContainer>
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
