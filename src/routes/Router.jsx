import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from '../layout';
import Companies from '../pages/Companies';
import CompanyForm from '../pages/CompanyForm';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Sheets from '../pages/Sheets';
import PrivatePaths from './privatePaths';
import PublicPaths from './publicPaths';

const RouterProvider = () => (
  <BrowserRouter>
    <Routes>
      <Route path={PublicPaths.LOGIN} element={<Login />} />

      <Route element={<Layout />}>
        <Route path={PrivatePaths.COMPANIES} element={<Companies />} />
        <Route
          path={PrivatePaths.REGISTERS_COMPANIES}
          element={<CompanyForm />}
        />
        <Route path={PrivatePaths.SHEETS} element={<Sheets />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default RouterProvider;
