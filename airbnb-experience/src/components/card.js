import React from 'react';
import star from "../images/Star.svg"

export default function Card(props){

    return(
        <div className="Card">
            <img src={props.img} className="Card-Img" alt="Card"/>
            <div className="Card-Stats">
                <img src={star} className="Card-Star" alt="star"/>
                <span>{props.rating}</span>
                <span className="grey">({props.no_of_ratings})•</span>
                <span className="grey">{props.country}</span>
            </div>
            <p>{props.description}</p>
            <p>From <span className="bold">${props.cost}/</span>{props.unit}</p>

        </div>
        
    )
}