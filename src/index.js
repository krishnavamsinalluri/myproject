import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/js/bootstrap.min"
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import Admindashboard from './features/AdminDashBoard/AdminDashBoard';
import Home from './Home/Home';
import Addhostipal from './features/AdminDashBoard/Addhospital';
import Addbed from './features/Addbed';
import { Provider } from "react-redux"
import { store } from "./app/store"
import HospitalDetails from './features/Hospital/HosipalDelaits';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
      path:"/admindashboard",
      element:<Admindashboard></Admindashboard>,
      children:[
        {
          path:"/admindashboard/addhospital",
          element:<Addhostipal></Addhostipal>
        },
          {
            path:"/admindashboard/addbed",
            element:<Addbed></Addbed>
          }
        
      ]
    },
    {
      path:"/details/:id",
      element:<HospitalDetails></HospitalDetails>
    },
       {path:"",
        element:<Home></Home>
      }
      
    ]
 },

]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
      <RouterProvider router={router} />
  </Provider>

);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
