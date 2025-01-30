import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from '../layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PrivatePaths from './privatePaths';
import PublicPaths from './publicPaths';

const RouterProvider = () => (
  <BrowserRouter>
    <Routes>
      <Route path={PublicPaths.LOGIN} element={<Login />} />
      <Route element={<Layout />}>
        <Route path={PrivatePaths.HOME} element={<Home />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default RouterProvider;
