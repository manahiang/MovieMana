//import logo from './logo.svg';
import './index.css'
import './App.css';
import Main from './menu/Main';
 import { BrowserRouter, } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Main/>
    </BrowserRouter>
  );
}
export default App;
