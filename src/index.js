import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Mainpage from './features/Mainpage';
import Adimdashboard from './features/Adimdashboard';
import Elurubus from './features/Elurubus';

const router=createBrowserRouter([
  {
    path:"/",
    element:<Mainpage></Mainpage>
},
{
  path:"/dashboard",
  element:<Adimdashboard></Adimdashboard>,
  children:([{
    path:`/dashboard/tikecks/:bid`,
    element:<Elurubus></Elurubus>
  }])

}

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <RouterProvider router={router} >
    <App />
  </RouterProvider>
  </Provider> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
