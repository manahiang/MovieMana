import React from 'react'
import { Link } from "react-router-dom";
import { BiMovie } from "react-icons/bi";
function Header() {
    return (
        <div>

            <div className='header'>
                <div className='navbar'>
                    <div className='menu'>
                        <ul>
                            <li><BiMovie className="icon"/>MoviesApp</li>
                            <li><Link to="/">Movies</Link></li>
                            <li><Link to="tvshows">TV shows</Link></li>
                            <li><Link to={"actors"}>Actors</Link></li>
                        </ul>
                    </div>
                    <div className='search'>
                        <input type="text" placeholder="search" 
                        />
                    </div>
                </div>
                <hr />

            </div>
        </div>
    )
}

export default Header