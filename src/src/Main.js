import { useEffect, useState } from 'react';
import './index.css'
import { Link, } from "react-router-dom"
const api_key = "3d29277cead85831acf050c11756e8a2";
const urls = "https://api.themoviedb.org/3/discover/movie/?api_key"
const image = "https://image.tmdb.org//t/p/w220_and_h330_face";

function MainPage() {
    const [data, setData] = useState([])
    const [search, setSearch] = useState("")
    const url = search ? "https://api.themoviedb.org/3/search/movie?" : `${urls}`
    const Fetch = async (search) => {
        const data = await fetch(`${url}=${api_key}&&query=${search}`);
        const movies = await data.json();
        console.log(movies);
        setData(movies.results)
    }
    useEffect(() => {
        Fetch(search);
    }, []);

    return (

        <div>
            {/* <input placeholder='search'
                onChange={e => setSearch(e.target.value)}
                value={search} */}
            {/* /> */}
            {/* <button
                onClick={() => {
                    Fetch(search);
                    setSearch("");
                }}>search</button> */}
            {/* Card */}
            <div className='container'>
                <div className='container-card'>
                    <h1 style={{ color: '#fa9326', fontSize: '20px' }}>Popular movies</h1>
                    <div className='grid'>
                        {
                            data.map((movies) => (
                                <div className="card" key={movies.id}>

                                    <Link to={"card-details/" + movies.id} key={movies.id} style={{ textDecoration: 'none', color: 'black' }}>
                                        <img src={image + movies.poster_path} alt="image" />
                                        <div className='title'>
                                            <h3>{movies.title}</h3>
                                        </div>
                                        <div className='card-title'>
                                            <p style={{ paddingTop: '20px', fontWeight: '700', lineHeight: '0.9' }}>{movies.title}</p>
                                            <p >{movies.release_date}</p>
                                            <p><b>Genre </b></p>
                                            <h4 className=" share"><b>SHAER</b></h4>
                                        </div>
                                    </Link>

                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>

        </div>
    )
}
export default MainPage;