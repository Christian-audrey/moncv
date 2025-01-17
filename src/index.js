import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Knowledges from './pages/Knowledges';
import PortFolio from './pages/PortFolio';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './styles/styles.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router =createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "competences",
    element: <Knowledges/>,
  },
  {
    path: "portfolio",
    element: <PortFolio/>,
  },
  {
    path: "contact",
    element: <Contact/>,
  },
  {
    path: "*",
    element: <NotFound/>,
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
