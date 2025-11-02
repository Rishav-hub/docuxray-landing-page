import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from '@/contexts/ModalContext';
import AppRouter from './router';

function App() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <AppRouter />
      </ModalProvider>
    </BrowserRouter>
  );
}

export default App;

