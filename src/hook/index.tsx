import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './auth';
import { CartProvider } from './cart';
import { theme } from '../styles';

const AppProvider: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <CartProvider>
        { children }
      </CartProvider>
    </AuthProvider>
  </ThemeProvider>
);

export default AppProvider;
