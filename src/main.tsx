import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router.tsx';
import { QueryClientProvider,QueryClient } from '@tanstack/react-query'
// Create a client
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
    <RouterProvider  router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
