//import{useEffect, useState} from "react"
const image="https://www.themoviedb.org/t/p/w220_and_h330_face";

function Card({ title, original_title, vote_average, backdrop_path, date, img, rate}) {
    return (
        <div className="card">
            <img src={image+img}/>
            <h3>{original_title}</h3>
            <h3>{date}</h3>
            <h3>{rate}</h3>
            <h3 className="share">SHAER</h3>
        </div>

    )
}
export default Card;