import React from 'react';
import { AuthProvider } from './auth';
import { CartProvider } from './cart';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <CartProvider>
          { children  }
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default AppProvider;