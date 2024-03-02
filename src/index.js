import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {ProductPage} from "./pages/ProductPage/ProductPage";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "product/:productId",
        element: <ProductPage />,
    },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

