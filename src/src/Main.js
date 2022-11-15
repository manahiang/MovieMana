import { useEffect, useState } from 'react';
import Card from './components/card';
import './index.css'
//const url = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTJiOGZjZTg5ODliMzlmY2U2NGEwZmQ4NTlmNTNkOCIsInN1YiI6IjVlOTk2MjJkZDE0NDQzMDAxOTUyNzFjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xzho6lktWFTUo9di-EzmjkvwgVvMTco_QeqvLqbHupI";

function Main() {
    const [data, setData] = useState([])
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=3d29277cead85831acf050c11756e8a2"
    const Fetch = async () => {
        const data = await fetch(url);
        const movies = await data.json();
        console.log(movies.results);
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
                            <li><a href='#'>Movies App</a></li>
                            <li><a href='#'>Movies </a></li>
                            <li><a href='#'>TV shows</a></li>
                            <li><a href='#'>actors</a></li>
                        </ul>
                    </div>
                    <div className='search'>
                        <input type="text" placeholder="search" />
                    </div>
                </div>

            </div>
            <hr />
            <h1 style={{ textAlign: 'center', color: 'yellow' }}>Popular movies</h1>
            <div className='grid'>
                {
                    data.map((movies) => (
                        <Card
                            title={movies.title} vote_average={movies.vote_average}
                            original_title={movies.original_title}
                            date={movies.release_date} img={movies.backdrop_path}
                            rate={movies.vote_average
                            }
                             />
                    ))
                }
            </div>
        </div>

    )

}
export default Main;