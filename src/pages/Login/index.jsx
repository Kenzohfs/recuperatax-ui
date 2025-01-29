import React, { useState } from 'react';
import { FaLock, FaUserAlt } from 'react-icons/fa';
import Input from '../../components/Input';
import {
  Background,
  ModalContainer,
  ModalContent,
  ModalHeader,
  WelcomeMessage,
} from './styled';

const Login = () => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  return (
    <Background>
      <ModalContainer>
        <ModalHeader>
          <h1>Logo</h1>
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
        </ModalContent>
      </ModalContainer>
    </Background>
  );
};

export default Login;
