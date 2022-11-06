import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';

import Navbar from '../Navigation/Navbar';
import Footer from '../Partials/Footer';
import Routes from './Routes';
import { queryClient } from '../../react-query/queryClient';
import { AuthContextProvider } from '../../context/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <div className='w-full max-w-full min-w-full min-h-screen overflow-hidden'>
          <Navbar />
          <Routes />
          <Footer />
          <ToastContainer rtl />
          <ReactQueryDevtools />
        </div>
      </QueryClientProvider>
    </AuthContextProvider>
  );
}

export default App;
