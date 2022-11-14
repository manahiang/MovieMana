import './index.css'
import { Link } from "react-router-dom"

function MoiveMana() {
    return (

        <div className="header">
            <div className="navbar">
                <div className="menu">
                    <ul>
                        <li>Movie App</li>
                        <li><a href='movies.js'>Movies</a></li>
                        <li><a href='tv-shows'></a>TV shows</li>
                        <li><Link to="/actors.js">Actors</Link></li>
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