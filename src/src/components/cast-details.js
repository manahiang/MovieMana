import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const api_key = "3d29277cead85831acf050c11756e8a2&&append_to_response=credits,images"
const image = "https://image.tmdb.org/t/p/w500";

function CastDetails() {
    const { id } = useParams();
    const [castDetails, setCastDetails] = useState([])
    const url = `https://api.themoviedb.org/3/person/${id}$?api_key=${api_key}`
    const Fetch = async () => {
        const cd = await fetch(url);
        const castObject = await cd.json();
        console.log(castObject);
        setCastDetails(castObject)
    }
    useEffect(() => {
        Fetch();
    }, []);

    return (

        <div className='container-cast-details'>
            <div className='main-cast-details'>
                <div className='big'>
                    <img src={image + castDetails.profile_path} />
                </div>
                <div className='details-cast-details'>
                    <h1>{castDetails.name}</h1>
                    <p>{castDetails.birthday}||{castDetails.place_of_bith}</p><br />
                    {
                        castDetails.credits?.cast.map((castDetail) => (
                            <p>{castDetail.overview}</p>
                        ))
                    }
                    <h4>Known For</h4>
                    <div className='image-cast-details'>
                        {
                            castDetails.credits?.cast.map((castDetail) => (
                                <img src={image + castDetail.backdrop_path} />
                            ))
                        }
                    </div>
                </div>
            </div><hr />
            <h1 className='credits'>CREDITS</h1>
            <ul>

                {
                    castDetails.credits?.cast.map((castDetail) => (
                        <li>{castDetail.release_date}</li>
                    ))
                }
            </ul>

        </div>

    )
}

export default CastDetails