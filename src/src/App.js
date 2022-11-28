//import logo from './logo.svg';
import './index.css'
import './App.css';
import MainPage from './Main';
import CardDetails from './components/card-detail';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes, } from "react-router-dom"
import CastDetails from './components/cast-details';
import Header from './components/header';
import TVshows from './pages/tvshows';
import Actors from './pages/actors';
import ActorsDetails from './components/actors-details';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='tvshows' element={<TVshows />} />
          <Route path='actors' element={<Actors />} />
          <Route path='actors/actors-details/:id' element={<ActorsDetails />} />
          <Route path='/' element={<MainPage />} />
          <Route path='card-details/:id' element={<CardDetails />} />
          <Route path='card-details/:id/cast-details/:id' element={<CastDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
  // const router = createBrowserRouter([

  //   {
  //     path: "/",
  //     element: <MainPage/>,
  //   },
  //   {
  //     path: "card-details/:id",
  //     element: <CardDetails />,
  //   },
  //   {
  //     path: "card-details/:id/cast-details/:id",
  //     element: <CastDetails />
  //   },
  //   {
  //     path: "tvshows",
  //     element: <TVshows/>
  //   },
  //   {
  //     path: "actors",
  //     element: <Actors/>
  //   }


  // ]);
  // return (
  //   <div>
  //     <Header/>

  //     {
  //       <RouterProvider router={router} />
  //     }</div>
  // );
}
export default App;
