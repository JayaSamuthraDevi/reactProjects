import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter } from 'react-router-dom';
import { clientId } from './constants/id';
import { Context } from './context';
import AppRoutes from './routes';

function App() {
  return (
      <GoogleOAuthProvider clientId={clientId}>
        <Context>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </Context>
      </GoogleOAuthProvider>
  );
}

export default App;
