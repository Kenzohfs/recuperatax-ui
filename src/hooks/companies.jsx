import { createContext, useContext } from 'react';
import { api } from '../api';
import { useToast } from './toast';

const CompaniesContext = createContext({
  GetCompanies: async (name) => {},
  CreateCompany: async (company) => {},
  DeleteCompany: async (companyId) => {},
});

export const CompaniesProvider = ({ children }) => {
  const { addToast } = useToast();

  const GetCompanies = async (name = '') => {
    try {
      const query = new URLSearchParams({ name }).toString();

      const response = await api.get(`/companies?${query}`);

      return response.data || [];
    } catch (error) {
      console.error('Error getting companies', error);
      return [];
    }
  };

  const CreateCompany = async (company) => {
    try {
      const response = await api.post('/companies', company);

      addToast({
        type: 'success',
        title: 'Empresa Criada',
      });

      return response.data || {};
    } catch (error) {
      console.error('Error creating company', error);
      addToast({
        type: 'error',
        title: 'Erro ao criar empresa',
      });

      return {};
    }
  };

  const DeleteCompany = async (companyId) => {
    try {
      const response = await api.delete(`/companies/${companyId}`);

      addToast({
        type: 'success',
        title: 'Empresa Deletada',
      });

      return response.data || {};
    } catch (error) {
      console.error('Error deleting company', error);
      addToast({
        type: 'error',
        title: 'Erro ao deletar empresa',
      });

      return {};
    }
  };

  return (
    <CompaniesContext.Provider
      value={{ GetCompanies, CreateCompany, DeleteCompany }}
    >
      {children}
    </CompaniesContext.Provider>
  );
};

export const useCompanies = () => {
  const context = useContext(CompaniesContext);

  if (!context) {
    throw new Error('useCompanies must be used within a CompaniesProvider');
  }

  return context;
};
