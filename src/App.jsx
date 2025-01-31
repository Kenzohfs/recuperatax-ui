import { ThemeProvider } from 'styled-components';
import './App.css';
import RouterProvider from './routes/Router';

import { CompaniesProvider } from './hooks/companies';
import { SheetsProvider } from './hooks/sheets';

import { ToastProvider } from './hooks/toast';
import theme from './style/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <CompaniesProvider>
          <SheetsProvider>
            <RouterProvider />
          </SheetsProvider>
        </CompaniesProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
