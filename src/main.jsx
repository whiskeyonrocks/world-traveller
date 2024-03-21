import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/index.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/', // This is the index route
        element: <Home />
      },
      {
        path: '/accommodations',
        element: <>Accomodations</>
      },
      {
        path: '/todo',
        element: <>Things to Do!</>
      },
      {
        path: '/gallery',
        element: <>All your photos here!</>
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
