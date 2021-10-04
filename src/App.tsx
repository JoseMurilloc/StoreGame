import { BrowserRouter } from 'react-router-dom';
import AppProvider from './hook';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';

import GlobalStyles from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      
      <AppProvider>
          <Routes />
          <ToastContainer autoClose={3000} />
      </AppProvider>
     </BrowserRouter>
  );
}

export default App;
