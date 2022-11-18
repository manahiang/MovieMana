//import logo from './logo.svg';
import './index.css'
import './App.css';
import Main from './Main';
import CardDetails from './components/card-detail';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom"
import React from 'react';
import Tvshows from './components/tv-shows';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/card-details/:id",
      element: <CardDetails />,
    },
    {
      
    }
  ]);

  return (


    <div>
      {
        // <BrowserRouter>
        //   <Main />
        //   <Routes>
        //     <Route path='/' element={<Main/>}/>
        //     <Route path='/card-details' element={<CardDetails />} />
        //   </Routes>
        // </BrowserRouter>
         <RouterProvider router={router} />
      }</div>
  );
}
export default App;
