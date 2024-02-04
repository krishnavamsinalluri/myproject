import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import { store } from './store/store';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Countires from './feauters/Country';
import Products from './feauters/Product';
import Details from './feauters/Countrydetails';
import Addproduct from './feauters/Addproducts';
import Edit from './feauters/editproducts';
import Login from './feauters/login';
import Dashboard from './feauters/dashboard';
import Buyproduct from './feauters/Buyproduct';
import Home from './feauters/Homepage';
import Regiration from './feauters/Registration';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[{
      
        path:"/countrys",
        element:<Countires></Countires>,
        children:[{
          path:"/countrys/countrysdetails/:cname",
          element:<Details></Details>
        }]
        
      },
      {
        path:"/",
        element:<Home></Home>
      },

      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/regiration",
        element:<Regiration></Regiration>
      },
  
       {
        path:"/products",
        element:<Products></Products>
      },
      {
        path:"/addproducts",
        element:<Addproduct></Addproduct>
      },
      {
        path:'/editprodocts/:pid',
        element:<Edit></Edit>

      },  
      {
        path:"/dashbord",
        element:<Dashboard></Dashboard>,
      },
 
          {
            path:'/dashbord/buyprouct/:pid',
            element:<Buyproduct></Buyproduct>
    
          },
          

        

    
      




   ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
        <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();