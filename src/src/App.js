//import logo from './logo.svg';
import './index.css'
import './App.css';
import Main from './Main';
import CardDetails from './components/card-detail';
import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import React from 'react';
import Actors from './components/actors';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "card-details/:id",
      element: <CardDetails />,
    },
    {
      path: "actors/:id",
      element: <Actors />,
    }
  ]);
  
  return (

    <div>
      {
        <RouterProvider router={router} />
      }</div>
  );
}
export default App;
