import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './pages/root';
import Home from './pages/home';
import Cart from './pages/cart';
import Account from './pages/account';
import SignIn from './pages/signin';
import About from './pages/about';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/account',
        element: <Account />
      },
      {
        path: '/signin',
        element: <SignIn />
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
