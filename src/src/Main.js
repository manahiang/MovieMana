import { useEffect, useState } from 'react';
import './index.css'
import { Link, NavLink } from "react-router-dom"
import Tvshows from './components/tv-shows';
import CardDetails from './components/card-detail';
const api_key = "3d29277cead85831acf050c11756e8a2"
const urls = "https://api.themoviedb.org/3/discover/movie/?api_key"
const image = "https://image.tmdb.org/t/p/w500";

function Main({ movies }) {
    const [data, setData] = useState([])
    const url = `${urls}=${api_key}`
    const Fetch = async () => {
        const data = await fetch(url);
        const movies = await data.json();
        console.log(movies);
        setData(movies.results)
    }
    useEffect(() => {
        Fetch();
    }, []);
    return (
        <div className='container'>
            <div className='header'>
                <div className='navbar'>
                    <div className='menu'>
                        <ul>
                            <li>Movies</li>
                            <li><a href='#'>Movies</a></li>
                            <li><a href='#'>TV shows</a></li>
                            <li><a href='#'>actors</a></li>
                        </ul>
                    </div>
                    <div className='search'>
                        <input type="text" placeholder="search" />
                    </div>
                </div>
                <hr />

                <h1 style={{ textAlign: 'center', color: 'yellow' }}>Popular movies</h1>
                <div className='grid'>
                    {
                        data.map((movies) => (

                            <div className="card" key={movies.id}>
                                <Link to={"/card-details/" + movies.id} key={movies.id}>
                                    <img src={image + movies.backdrop_path}/>
                                    <h3>{movies.title}</h3>
                                    <h3>{movies.release_date}</h3>
                                    <h3>{movies.vote_average}</h3>
                                    <h3 className="share">SHAER</h3>
                                </Link>
                            </div>

                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Main;