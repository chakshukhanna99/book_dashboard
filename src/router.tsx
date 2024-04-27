import { createBrowserRouter, Navigate } from 'react-router-dom';
import LoginPage from '@/pages/Login';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import DashboardLayout from './layouts/DashboardLayout';
import Books from './pages/Books';
import AuthLayout from './layouts/AuthLayout';
 const router = createBrowserRouter([
    {
      path:'dashboard',
      element:<DashboardLayout/>,
      children:[{
        path :'home',
        element:<HomePage/>,
      },
      {
        path:'books',
        element:<Books/>
      }

      ],
    },
    {
        path: '/auth',
        element: <AuthLayout/>,
        children: [
            {
                path: 'login',
                element: <LoginPage />,
            },
            {
                path: 'register',
                element: <Register/>,
            },
        ],
    },
   
]);
export default router;