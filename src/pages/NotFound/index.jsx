import React from 'react';
import PrivatePaths from '../../routes/privatePaths';
import { NotFoundContainer, NotFoundMessage, NotFoundTitle } from './styled';

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundMessage>Page Not Found</NotFoundMessage>
      <a href={PrivatePaths.COMPANIES}>Voltar</a>
    </NotFoundContainer>
  );
};

export default NotFound;
