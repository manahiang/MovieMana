import { useEffect, useState } from 'react';
import './index.css'
import { Link, } from "react-router-dom"
const api_key = "3d29277cead85831acf050c11756e8a2";
const image = "https://image.tmdb.org//t/p/w220_and_h330_face";

function MainPage() {
    const [data, setData] = useState([])
    const [keyword, setKeyword] = useState("")
    const url = keyword ? "https://api.themoviedb.org/3/search/movie" : "https://api.themoviedb.org/3/discover/movie"
    const Fetch = async (keyword) => {
        const data = await fetch(`${url}?api_key=${api_key}&&query=${keyword}`);
        const movies = await data.json();
        console.log(movies);
        setData(movies.results)
    }
    useEffect(() => {
        Fetch(keyword);
    }, []);

    return (
        data?

        <div>


            {/* Card */}
            <div className='container'>
                <div className='container-card'>

                    {/* Search */}
                    <input placeholder='search'
                        onChange={e => setKeyword(e.target.value)}
                        value={keyword} className="input-search" />
                    <button
                        onClick={() => {
                            Fetch(keyword);
                        }} className="button-search">search</button>


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
        :
        <>
        <h1>Fetching data.....</h1>
        </>
    )
}
export default MainPage;