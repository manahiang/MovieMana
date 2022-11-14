import './index.css'
import {Link} from "react-router-dom"
import Movies from './menu/movies';

function MoiveMana() {
    return (

        <div className="header">
            <div className="navbar">
                <div className="menu">
                    <ul>
                        <li>Movie App</li>
                        <li><Link to="/movies">Movie</Link></li>
                        <li><Link to="/tv-shows">TV shows</Link></li>
                        <li><Link to="/actors">Actors</Link></li>
                    </ul>
                </div>
                <div className="search">
                    <input type="text" placeholder="search" />
                </div>
            </div>
        </div>
    )
}
export default MoiveMana;