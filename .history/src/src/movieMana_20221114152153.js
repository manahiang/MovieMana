import { useEffect, useState } from 'react';
import './index.css'
//import { Link } from "react-router-dom"

function MoiveMana() {
    const[data,setData]=useState([]);
    useEffect(()=>{
        fetch("https://api.themoviedb.org/3=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTJiOGZjZTg5ODliMzlmY2U2NGEwZmQ4NTlmNTNkOCIsInN1YiI6IjVlOTk2MjJkZDE0NDQzMDAxOTUyNzFjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xzho6lktWFTUo9di-EzmjkvwgVvMTco_QeqvLqbHupI")
        then
    })
    return (

        <div className="header">
            <div className="navbar">
                <div className="menu">
                    <ul>
                        <li>Movie App</li>
                        <li><a href='movies'>Movies</a></li>
                        <li><a href='tv-shows'>TV shows</a></li>
                        <li><a href='actors'>Actors</a></li>
                    </ul>
                </div>
                <div className="search">
                    <input type="text" placeholder="search" />
                </div>
            </div>
            <hr/>
        </div>
    )
}
export default MoiveMana;