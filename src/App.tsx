import { BrowserRouter } from 'react-router-dom';
import AppProvider from './hook';
import Routes from './routes';

import GlobalStyles from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      
      <AppProvider>
          <Routes />
      </AppProvider>
     </BrowserRouter>
  );
}

export default App;
