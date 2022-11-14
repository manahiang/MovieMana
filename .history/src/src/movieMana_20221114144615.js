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
                        <li><a href='tv-shows'>TV shows</a></li>
                        <li><a href=''</li>
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