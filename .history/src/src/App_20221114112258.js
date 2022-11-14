//import logo from './logo.svg';
import './App.css';
import MoiveMana from './movieMana'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TVShow from './menu/tv-shows';
import Actors from './menu/actors';

function App() {
  return (
    <BrowserRouter>
      <MoiveMana />
      <Routes>
        <Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
