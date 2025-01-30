import React from 'react';
import { Outlet } from 'react-router';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import { Container, Content, MainContent } from './styled';

const Layout = () => {
  return (
    <Container>
      <Nav />
      <Content>
        <Sidebar />
        <MainContent>
          <Outlet />
        </MainContent>
      </Content>
    </Container>
  );
};

export default Layout;
