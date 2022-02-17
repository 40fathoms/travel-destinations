import React from 'react'

import Marker from '../images/marker.png'

const Destination = (props) => {

  return (
    <div className="destinations-item">

        <img src={require(`../images/${props.img}`)} className="destinations-item-image" alt="Destination picture" />

        <div className="destinations-item-content">
            <div className="location">
                <img src={Marker} />
                <h3>{props.country.toUpperCase()}</h3>
                <a href={props.link}>View on Google Maps</a>
            </div>

            <h2 className="name">{props.title}</h2>

            <p className="description">{props.paragraph}</p>
        </div>
    </div>
  )
}

export default Destination