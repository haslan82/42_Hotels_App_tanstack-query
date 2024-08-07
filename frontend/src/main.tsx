import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClientProvider, QueryClient, queryOptions, QueryClientContext } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ToastContainer } from 'react-toastify';


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient} >
    <App />
    {/* ekranın sağ latına gelir */}
    <ReactQueryDevtools initialIsOpen={false} />


{/* bildirim bileşeni */}
    <ToastContainer/>
    </QueryClientProvider>
  </React.StrictMode>,
)
