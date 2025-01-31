import { createContext, useContext } from 'react';
import { api } from '../api';

const SheetsContext = createContext({
  GetSheets: async () => {},
});

export const SheetsProvider = ({ children }) => {
  const GetSheets = async () => {
    try {
      const response = await api.get('/sheets');

      return response.data || { headers: [], data: [] };
    } catch (error) {
      console.error('Error getting sheets', error);
      return { headers: [], data: [] };
    }
  };

  return (
    <SheetsContext.Provider value={{ GetSheets }}>
      {children}
    </SheetsContext.Provider>
  );
};

export const useSheets = () => {
  const context = useContext(SheetsContext);

  if (!context) {
    throw new Error('useSheets must be used within a SheetsProvider');
  }

  return context;
};
