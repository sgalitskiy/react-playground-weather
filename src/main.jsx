import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root.jsx";
import ErrorPage from "./pages/error.jsx";
import Weather from "./routes/Weather.jsx";
import Login from "./routes/Login.jsx";
import Register from "./routes/Register.jsx";
import Profile from "./routes/Profile.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/weather/:locationName",
        element: <Weather />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register/>,
      },
      {
        path: '/profile',
        // element: <Profile/>,
        element: <PrivateRoute Component={Profile}/>,
      },
      // {
      //   path: '/my-students',
      //   element: <PrivateRouteOfMentor Component={MyStydents}/>,
      // },
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
