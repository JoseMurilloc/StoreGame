import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AppProvider from './hook';
import Routes from './routes';

import { GlobalStyles } from './styles/global';
import { ResponsiveScalesLayout } from './styles/global/responsiveScalesLayout';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <ResponsiveScalesLayout />
      <AppProvider>
        <Routes />
        <ToastContainer autoClose={3000} />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
