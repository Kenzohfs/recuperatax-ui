import React, { useState } from 'react';
import { FaLock, FaUserAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router';

import Logo from '../../assets/logo-white.png';
import Button from '../../components/Button';
import Input from '../../components/Input';
import PrivatePaths from '../../routes/privatePaths';
import {
  Background,
  ForgotPassword,
  LoginOptions,
  LogoContainer,
  LogoImg,
  ModalBottom,
  ModalContainer,
  ModalContent,
  ModalHeader,
  RememberMeContainer,
  WelcomeMessage,
} from './styled';

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const reset = () => {
    setUser('');
    setPass('');
  };

  const onLoginClick = () => {
    reset();
    navigate(PrivatePaths.COMPANIES);
  };

  return (
    <Background>
      <ModalContainer>
        <ModalHeader>
          <LogoContainer>
            <LogoImg src={Logo} alt="Logo" />
          </LogoContainer>
          <WelcomeMessage>Seja bem vindo!</WelcomeMessage>
        </ModalHeader>
        <ModalContent>
          <Input
            name="user"
            onChange={(e) => setUser(e.target.value)}
            placeholder="Usuário"
            value={user}
            icon={FaUserAlt}
          />
          <Input
            name="password"
            onChange={(e) => setPass(e.target.value)}
            placeholder="Senha"
            value={pass}
            icon={FaLock}
          />

          <LoginOptions>
            <RememberMeContainer>
              <input id="rememberme" type="checkbox" />
              <label htmlFor="rememberme">Lembrar de mim</label>
            </RememberMeContainer>
            <ForgotPassword>Esqueci minha senha</ForgotPassword>
          </LoginOptions>
        </ModalContent>

        <ModalBottom>
          <Button fullWidth={true} onClick={onLoginClick}>
            LOGIN
          </Button>
        </ModalBottom>
      </ModalContainer>
    </Background>
  );
};

export default Login;
