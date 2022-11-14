import './index.css'
import { Outlet, Link } from "react-router-dom";

function MoiveMana() {
    return (

        <div className="header">
            <div className="navbar">
                <div className="menu">
                    <ul>
                        <li>Movie App</li>
                        <li><a hreft="movies">Movies</a></li>
                        <li><a hreft="https://moviepiset.vercel.app/">TV shows</a></li>
                        <li><link to=""</li>
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