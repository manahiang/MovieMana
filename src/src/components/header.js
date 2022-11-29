import React from 'react'
import { Link } from "react-router-dom";
import { BiMovie } from "react-icons/bi";


function Header() {
    return (
        <div>
            <div className='header' style={{ position: 'fixed', top: '0%', zIndex: '10' }}>
                <div className='navbar'>
                    <div className='menu'>
                        <ul>
                            <li className='light'><BiMovie className="icon" />MoviesApp</li>
                            <li><Link to="/">Movies</Link></li>
                            <li><Link to="tvshows">TV shows</Link></li>
                            <li><Link to={"actors"}>Actors</Link></li>
                        </ul>
                    </div>
                    <div className='search' style={{ display: 'none' }}>
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