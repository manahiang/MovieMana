import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
const api_key = "3d29277cead85831acf050c11756e8a2"
const image = "https://image.tmdb.org/t/p/w500";
const urls = "https://api.themoviedb.org/3/discover/movie/?api_key"

function CardDetails() {
    const{id}=useParams();
    const [singleMovie, setSingleMovie] = useState([])
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
    const Fetch = async () => {
        const data = await fetch(url);
        const movies = await data.json();
        console.log(movies);
        setSingleMovie(movies.id)
    }
    useEffect(() => {
        Fetch();
    }, []);
    return (
        <div className='container-card-details'>
            <div className='main'>
                <div clas sName='img'><img src='https://image.tmdb.org/t/p/w500//sv1xJUazXeYqALzczSZ3O6nkH75.jpg' /></div>
                <div className='details'>
                    <h1>Black Panther: Wakanda Forever</h1>
                    <h3>75.73% | 2022-11-09 | Action Adventure Science Fiction</h3><br /><br />
                    <h3>Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje
                        fight to protect their nation from intervening world powers
                        in the wake of King T’Challa’s death. As the Wakandans strive
                        to embrace their next chapter, the heroes must band together
                        with the help of War Dog Nakia and Everett Ross and forge a new
                        path for the kingdom of Wakanda.</h3><br />
                    <h2>Featured Crew</h2>

                </div>
            </div><hr />
            <h1>Cast</h1>
            <div className='cast'>
                <div className='image-datail'></div>
                <div className='image-datail'></div>
                <div className='image-datail'></div>
                <div className='image-datail'></div>
            </div>
            <h1>Image</h1>
            <div className='images'>
                <div className='image'></div>
                <div className='image'></div>
                <div className='image'></div>
                <div className='image'></div>
            </div>
        </div>
    )
}

export default CardDetails