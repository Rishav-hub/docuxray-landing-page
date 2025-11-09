import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from '@/contexts/ModalContext';
import AppRouter from './router';

function App() {
  // Use the BASE_URL from Vite config (conditional based on mode)
  const basename = import.meta.env.BASE_URL.replace(/\/$/, ''); // Remove trailing slash
  
  return (
    <BrowserRouter basename={basename}>
      <ModalProvider>
        <AppRouter />
      </ModalProvider>
    </BrowserRouter>
  );
}

export default App;

