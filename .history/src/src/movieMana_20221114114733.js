import './index.css'
import {Link} from "react-router-dom"

function MoiveMana() {
    return (

        <div className="header">
            <div className="navbar">
                <div className="menu">
                    <ul>
                        <li>Movie App</li>
                        <li><Link to="</li>
                        <li><a hreft="https://moviepiset.vercel.app/">TV shows</a></li>
                        <li><Link to="movies">Actors</Link></li>
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