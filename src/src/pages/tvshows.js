import React from 'react'
import { Form } from 'react-router-dom';
import { useState, useEffect } from "react"
const image = "https://image.tmdb.org/t/p/w500";
const url = "https://api.themoviedb.org/3/tv/popular?api_key"
const api_key = "3d29277cead85831acf050c11756e8a2"


function TVshows() {
    const [tvshows, setTvshows] = useState([])
    const urls = `${url}=${api_key}`;
    const Fetch2 = async () => {
        const ts = await fetch(urls)
        const picture = await ts.json();
        console.log(picture.results)
        setTvshows(picture.results)
    }
    useEffect(() => {
        Fetch2();

    }, [])


    return (
        <div className='container-tvshows'>
            <div className='center'>
                <h1  style={{color:'#fa9326',fontSize:'20px'}}>TV Shows</h1>
                <div className='grid-tvshows'>
                    {
                        tvshows.map((tv) => (

                            <div className='card-tvshows'>
                                <img src={image + tv.poster_path} />
                                <div className='tv-overlay'> <h2>{tv.name}</h2></div>
                                <div className='tvshows-title'>
                                    <h4>{tv.name}</h4>
                                    <h4>Rate: {tv.vote_average} || {tv.first_air_date}</h4>
                                    <h3 style={{ color: 'rgb(241, 151, 7)' }}>Share</h3>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default TVshows