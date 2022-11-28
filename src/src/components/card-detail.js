import React, { useState, useEffect } from 'react'
import {BsCaretRight} from "react-icons/bs";
import { useParams, Link } from 'react-router-dom'
const api_key = "3d29277cead85831acf050c11756e8a2&&append_to_response=credits,images,videos"
const image = "https://image.tmdb.org/t/p/w500";


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
        const playKey = singleMovie.videos.results.find((video) => video.name === "Official Trailer");
        setTrailer(playKey.key)
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
                        <button onClick={playtrailer} style={{fontSize:'15px'}}><BsCaretRight className='play-icon'/>{display ? "close trailer" : "Play trailer"}</button>
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

                {/* Get array from cast */}

                {
                    singleMovie.credits?.cast.map((casts) => (

                        <div>

                            {/* Link to cast details */}

                            <Link to={"cast-details/" + casts.id} key={casts.id} style={{ textDecoration: 'none' }}>
                                <div className='cast-title'>
                                    <img src={image + casts.profile_path} />
                                    <h2 style={{ fontWeight: '200' }}>{casts.character}</h2>
                                    <h2>{casts.original_name}</h2>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
            <hr />
            <h1>Images</h1>
            <div className='grid-image'>
                {
                    singleMovie.images?.backdrops.map((imagess) => (
                        <img src={image + imagess.file_path} />
                    ))
                }
            </div>
        </div>

    )
}

export default CardDetails