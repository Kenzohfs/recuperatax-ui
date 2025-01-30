import React from 'react';
import { NotFoundContainer, NotFoundMessage, NotFoundTitle } from './styled';

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundMessage>Page Not Found</NotFoundMessage>
    </NotFoundContainer>
  );
};

export default NotFound;
