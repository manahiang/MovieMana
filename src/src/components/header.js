import React from 'react'
import {useState,useEffect} from "react"
import { Link } from "react-router-dom";
import { BiMovie } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";


function Header() {
    const[menu,setMenu]=useState([])
    // const changeMenu=()=>{
    //     setMenu(!menu);
    // }
 
    return (
        <div>
            <div className='header' style={{ position: 'fixed', top: '0%', zIndex: '10' }}>
            <BiMenu className='bimenu' onClick={()=>setMenu(!menu)}/>
                <div className='navbar'>
               
                    <div className='menu'>
                       
                       {
                        menu &&
                        <ul>
                        <AiOutlineClose className="aiclose1"onClick={()=>setMenu(!menu)}/>
                        <li className='light'><BiMovie className="icon" />MoviesApp</li>
                        <li><Link to="/">Movies</Link></li>
                        <li><Link to="tvshows">TV shows</Link></li>
                        <li><Link to={"actors"}>Actors</Link></li>
                    </ul>
                       }
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