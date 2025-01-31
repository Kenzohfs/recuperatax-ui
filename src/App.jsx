import { ThemeProvider } from 'styled-components';
import './App.css';
import RouterProvider from './routes/Router';

import { CompaniesProvider } from './hooks/companies';
import { SheetsProvider } from './hooks/sheets';

import theme from './style/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CompaniesProvider>
        <SheetsProvider>
          <RouterProvider />
        </SheetsProvider>
      </CompaniesProvider>
    </ThemeProvider>
  );
}

export default App;
