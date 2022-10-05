import React from 'react';
import star from "../images/Star.svg"

export default function Card(props){
    let BadgeText
    if (props.item.openspots === 0) {
        BadgeText="SOLD OUT"
    } else if (props.item.location === "Online"){
        BadgeText="ONLINE"
    }

    return(
        <div className="Card">
            {BadgeText && <div className="Card-Badge">{BadgeText}</div>}

            <img src={props.item.img} className="Card-Img" alt="Card"/>
            <div className="Card-Stats">
                <img src={star} className="Card-Star" alt="star"/>
                <span>{props.item.rating}</span>
                <span className="grey">({props.item.no_of_ratings})•</span>
                <span className="grey">{props.item.location}</span>
            </div>
            <p className="Card-Title">{props.item.description}</p>
            <p>From <span className="bold">${props.item.cost}/</span>{props.item.unit}</p>

        </div>
        
    )
}