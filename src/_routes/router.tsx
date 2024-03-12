import { createBrowserRouter } from 'react-router-dom'

import { AuthLayout } from '@/_layouts/auth.layout'
import { AppLayout } from '@/_layouts/app.layout'

import { HomePage } from '../pages/home'
import { LoginPage } from '@/pages/login'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/app',
        element: <HomePage />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
])