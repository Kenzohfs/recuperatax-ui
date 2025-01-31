import { createContext, useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { ToastMessage } from '../components/ToastMessage';

const ToastContext = createContext({
  addToast: ({ type = '', title = '', description = '' }) => {},
});

export const ToastProvider = ({ children }) => {
  const addToast = ({ type, title, description }) => {
    toast(<ToastMessage title={title} description={description} />, {
      type: type ?? 'info',
      theme: 'colored',
      position: 'top-right',
      closeOnClick: true,
    });
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <ToastContainer limit={6} />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
};
