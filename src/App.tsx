import { useRoutes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import './styles/globals.css';
import { Routes } from './routes/routes';

const App = () => {
  const prepareRoutes = useRoutes(Routes);
  return (
    <div className='h-screen'>
      {prepareRoutes}

      <Toaster position='top-right' />
    </div>
  );
};

export default App;
