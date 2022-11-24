//import logo from './logo.svg';
import './index.css'
import './App.css';
import MainPage from './Main';
import CardDetails from './components/card-detail';
import { createBrowserRouter, RouterProvider, } from "react-router-dom"
import CastDetails from './components/cast-details';
import Header from './components/header';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "card-details/:id",
      element: <CardDetails />,
    },
    {
      path: "card-details/:id/cast-details/:id",
      element: <CastDetails/>
    }
  ]);

  return (
    <div>
      <Header />
      {
        <RouterProvider router={router} />
      }</div>
  );
}
export default App;
