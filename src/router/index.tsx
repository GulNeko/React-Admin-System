import { createBrowserRouter } from 'react-router-dom';
import BasicLayout from '../layouts/BasicLayout';
import Dashboard from '../pages/Dashboard';
import Users from '../pages/Users';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BasicLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/users',
        element: <Users />,
      },
    ],
  },
]);
