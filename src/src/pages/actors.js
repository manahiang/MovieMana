import React from 'react'
import { Link, } from 'react-router-dom';
import { useState, useEffect } from "react"
const image = "https://image.tmdb.org/t/p/w500";
const url = `https://api.themoviedb.org/3/person?api_key`
const api_key = "3d29277cead85831acf050c11756e8a2"

function Actors() {
  const [actors, setActors] = useState([])
  const urls = `https://api.themoviedb.org/3/person/popular?api_key=${api_key}`;
  const FetchActors = async () => {
    const at = await fetch(urls)
    const fetchActors = await at.json();
    console.log(fetchActors.results)
    setActors(fetchActors.results)
  }
  useEffect(() => {
    FetchActors();

  }, []);
  return (
    <div className='container-actors'>
      <h1 style={{color:'#fa9326',fontSize:'20px'}}>Popular Actors</h1>
      <div className='center-actors'>
      <div className='grid-actors'>
        {
          actors.map((actor)=>(
            <Link to={"actors-details/"+ actor.id} key={actor.id} style={{textDecoration:'none'}}>
            <div className='card-actors'>
          <img src={image+actor.profile_path} alt=" " />
          <h3>{actor.name}</h3>
          <h3 style={{fontWeight:'300'}}>{actor.name}</h3>
        </div>
        </Link>
          ))
        }
      </div>
      </div>
    </div>
  )
}

export default Actors