import React from 'react'
import{Link} from "react"

function Header() {
  return (
    <div>

<div className='header'>
                <div className='navbar'>
                    <div className='menu'>
                        <ul>
                            <li>Movie App</li>
                            <li><a href="">Movies</a></li>
                            <li><a href="">Movies</a></li>
                            <li><a href="">Actors</a></li>
                        
                        </ul>
                    </div>
                    <div className='search'>
                        <input type="text" placeholder="search" />
                    </div>
                </div>
                <hr />

            </div>
    </div>
  )
}

export default Header