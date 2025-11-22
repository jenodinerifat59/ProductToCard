import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Rootlayot from './layout/Rootlayot.jsx';
import Product from './pages/Product.jsx';
import Card from './pages/Card.jsx';
import CardContex from './contex/CardContex.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayot,
    children: [
      { index: true, Component: App },
      { path: "product", Component: Product },
      { path: "card", Component: Card },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <CardContex>
  <RouterProvider router={router} />,
  </CardContex>,
)
