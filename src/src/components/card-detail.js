import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
const api_key = "3d29277cead85831acf050c11756e8a2&&append_to_response=videos"
const image = "https://image.tmdb.org/t/p/w500";
//const urls = "https://api.themoviedb.org/3/discover/movie/credit?api_key"

function CardDetails() {
    const { id } = useParams();
    const [singleMovie, setSingleMovie] = useState([])
    const [trailer, setTrailer] = useState("")
    const [display, setDisplay] = useState(false)
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
    const Fetch = async () => {
        const data = await fetch(url);
        const movies = await data.json();
        console.log(movies);
        setSingleMovie(movies)
    }
    useEffect(() => {
        Fetch();
    }, []);

    const playtrailer = () => {
        const trailerPlay = singleMovie.videos.results.find((videos) => videos.name === "Behind The Scenes Featurette");
        setTrailer(trailerPlay.key)
        setDisplay(!display);
    }
    return (
        <div className='container-card-details'>
            <div className='main'>
                <div><img src={image + singleMovie.poster_path} width="400" height={600} /></div>
                <div className='details'>
                    <h1>{singleMovie.original_title}</h1>
                    <h3>{singleMovie.vote_average} | {singleMovie.release_date} | Action Adventure Science Fiction</h3><br /><br />
                    <hr />

                    <h3>{singleMovie.overview}</h3><br />
                    <hr />
                    <h2>Revenue: {singleMovie.revenue}$</h2>
                    <h2>Vote Count: {singleMovie.vote_count}</h2><br />
                    <div className='play'>
                        <button onClick={playtrailer}>{display ? "close trailer" : "Play trailer"}</button>
                    </div>
                    {display && (
                        <iframe width="720" height="315" allowFullScreen
                            src={`https://www.youtube.com/embed/${trailer}`}>
                        </iframe>
                    )}
                </div>
            </div>
            <hr />
            <h1>Cast</h1>
            <div className='cast'>
                <div className='cast-title'>
                    <img src="https://image.tmdb.org/t/p/w500//pDvjTHGv8NhBkbIcBJFGt9zDw8.jpg" />
                    <h2><b>Name</b></h2>
                    <h2>Title</h2>
                </div>

                <div className='cast-title'>
                    <img src="https://image.tmdb.org/t/p/w500//pDvjTHGv8NhBkbIcBJFGt9zDw8.jpg" />
                    <h2>Name</h2>
                    <h2>Title</h2>
                </div>

                <div className='cast-title'>
                    <img src="https://image.tmdb.org/t/p/w500//pDvjTHGv8NhBkbIcBJFGt9zDw8.jpg" />
                    <h2>Name</h2>
                    <h2>Title</h2>
                </div>

                <div className='cast-title'>
                    <img src="https://image.tmdb.org/t/p/w500//pDvjTHGv8NhBkbIcBJFGt9zDw8.jpg" />
                    <h2>Name</h2>
                    <h2>Title</h2>
                </div>



            </div>
            {/* <h1>Image</h1>
            <div className='images'>
                <div className='image'></div>
                <div className='image'></div>
                <div className='image'></div>
                <div className='image'></div>
            </div> */}
        </div>
    )
}

export default CardDetails