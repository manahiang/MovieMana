//import logo from './logo.svg';
import './App.css';
import MoiveMana from './movieMana'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TVShow from './menu/tv-shows';
import Actors from './menu/actors';
import Movies from './menu/movies';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MoiveMana/>}>
          <Route path='movies' el
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
