import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './components/ErrorPage.jsx';
import App from './components/App.jsx'
import Shop from './components/Shop.jsx';
import Cart from './components/Cart.jsx';
import GamesPage from './components/GamesPage.jsx';
import SearchResults from './components/SearchResults.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "games/:id",
        element: <GamesPage />,
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/search/:term",
        element: <SearchResults />
      }
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
