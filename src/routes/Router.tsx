import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout'
import {
  Dashboard,
  Home,
  Login,
  NotFound,
  ProtectedRoute,
  Register,
} from '../pages'
import AuthCheck from '../components/auth/AuthCheck'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'register',
        element: (
          <AuthCheck>
            <Register />
          </AuthCheck>
        ),
      },
      {
        path: 'login',
        element: (
          <AuthCheck>
            <Login />
          </AuthCheck>
        ),
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'protected-route',
        element: (
          <AuthCheck isProtected>
            <ProtectedRoute />
          </AuthCheck>
        ),
      },
    ],
  },
])
