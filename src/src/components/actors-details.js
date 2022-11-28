import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const api_key = "3d29277cead85831acf050c11756e8a2&&append_to_response=credits"
const image = "https://image.tmdb.org/t/p/w500";

function ActorsDetails() {
    const { id } = useParams();
    const [actorsDetails, setActorsDetails] = useState([])
    const url = `https://api.themoviedb.org/3/person/${id}?api_key=${api_key}`
    const Fetch2 = async () => {
        const ad = await fetch(url);
        const actorsObject = await ad.json();
        console.log(actorsObject);
        setActorsDetails(actorsObject)
    }
    useEffect(() => {
        Fetch2();
    }, []);

    return (

        <div className='container-cast-details'>
            <div className='main-cast-details'>
                <div className='big'>
                    <img src={image + actorsDetails.profile_path} />
                </div>
                <div className='details-cast-details'>
                    <h1>{actorsDetails.name}</h1>
                    <p>{actorsDetails.birthday}||{actorsDetails.place_of_birth}</p><br />
                    <p>{actorsDetails.biography}</p><br />
                    <h4>Known For</h4>
                    <div className='image-cast-details'>
                        {
                            actorsDetails.credits?.cast.map((actorsDetail) => (
                                <img src={image + actorsDetail.backdrop_path} />
                            ))
                        }
                    </div>
                </div>
            </div><hr />
            <h1 className='credits'>CREDITS</h1>
            <ul>
            {
                            actorsDetails.credits?.cast.map((actorsDetail) => (
                                <li>{actorsDetail.release_date}</li>
                            ))
                        }
                

            </ul>

        </div>

    )
}

export default ActorsDetails;