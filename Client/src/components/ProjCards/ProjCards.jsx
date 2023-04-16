import React from 'react'
import "./ProjCards.scss"

const ProjCards = ({item}) => {
  return (
    <div className='projCard-container'>
        <img src={item.img} alt="Gig Image" />
        <div className="cardBottom">
            <img src={item.pp} alt="profile pic" />
            <div className="details">
                <div>{item.cat}</div>
                <p>By {item.username}</p>
            </div>
        </div>
    </div>
  )
}

export default ProjCards