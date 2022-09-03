import React from "react"

export default function Card(props) {
    return (
        <div className="card--container">
            <img className="card--photo" src={props.imageUrl}/>
            <div className="card--info">
                <div className="info--location">
                    <img className="location--icon" src="../images/location-icon.png"/>
                    <p className="location--location">{props.location}</p>
                    <a className="location--url" href={props.googleMapsUrl}> View on Google Maps</a>
                </div>
                <h1 className="info--title">{props.title}</h1>
                <p className="info--duration"> <b> {props.startDate} - {props.endDate} </b> </p>
                <p className="info--text"> {props.description}</p>
            </div>
        </div>
        
    )
}