import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const api_key = "3d29277cead85831acf050c11756e8a2&&append_to_response=credits,image,videos"
const image = "https://image.tmdb.org/t/p/w500";

function CastDetails() {
    const { id } = useParams();
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
    const[CastDetails,setCastDetails]=useState([]);
    const FetchCD=async()=>{
        const cd=await fetch(url)
        const object=await cd.json();
        console.log(object)
        setCastDetails(object)
    }
    useEffect(()=>{
        FetchCD();
    })

    return (

        <div className='container-cast-details'>
            <div className='main-cast-details'>
                <div className='big'>
                    <img src="https://image.tmdb.org/t/p/w500//1DnNysK267b0te48KCkUlTKoTzj.jpg" />
                </div>
                <div className='details-cast-details'>
                    <h1>Virginia Gardner</h1>
                    <p> Apr 18, 1995 (27 years old) Sacramento, California, USA</p><br />
                    <p>Virginia Gardner (born April 18, 1995) is an American actress from Sacramento, California. She is best known for playing Christina Raskin in the found footage film Project Almanac and Karolina Dean in the web television series Marvel's Runaways.</p><br />
                    <h4>Known For</h4>
                    <div className='image-cast-details'>
                        <img src="https://image.tmdb.org/t/p/w500//ellZ2dQLPVeWgd2fjf4arcZwALc.jpg" />
                       
                    </div>
                </div>
            </div><hr />
            <h1>CREDITS</h1>
            <ul>
                <li>2016 | Tell Me How I Die As Anna</li>
                <li>2016 | Tell Me How I Die As Anna</li>
                <li>2016 | Tell Me How I Die As Anna</li>
                <li>2016 | Tell Me How I Die As Anna</li>
                <li>2016 | Tell Me How I Die As Anna</li>
                <li>2016 | Tell Me How I Die As Anna</li>
                <li>2016 | Tell Me How I Die As Anna</li>
                <li>2016 | Tell Me How I Die As Anna</li>
            </ul>

        </div>

    )
}

export default CastDetails