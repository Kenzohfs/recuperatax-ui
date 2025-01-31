import React from 'react';
import { FaRegBell, FaRegUser } from 'react-icons/fa6';
import { useNavigate } from 'react-router';
import Logo from '../../assets/logo-light-gray.png';
import PublicPaths from '../../routes/publicPaths';
import {
  IconContainer,
  Item,
  LogoContainer,
  LogoImg,
  NavContainer,
} from './styled';

const Nav = () => {
  const navigate = useNavigate();

  const onUserClick = () => {
    navigate(PublicPaths.LOGIN);
  };

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
          <FaRegUser onClick={onUserClick} />
        </IconContainer>
      </Item>
    </NavContainer>
  );
};

export default Nav;
