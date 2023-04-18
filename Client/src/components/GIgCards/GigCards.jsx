import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./GigCards.scss"

const GigCards = ({item}) => {
    const { id, img , pp , price , star , desc , username} = item;
    const [liked , setLiked] = useState(false)
  return (
        <div className='gigcards-container'>
            <Link to={`/gig/${id}`}>
            <img src={img} alt="gigimage" />
            </Link>
            <div className="like" onClick={(e)=> {
                setLiked(!liked)}}>
            {liked ? <img src="https://img.icons8.com/ios-filled/50/000000/like--v1.png"/> :<img  src="https://img.icons8.com/ios/50/null/like--v1.png"/>} 
            </div>
            <div className="details">
            <Link to={`/gig/${id}`}>
                <div className="profile">
                    <img src={pp} alt="profile picture" />
                    <p>{username}</p>
                </div>
            </Link>
            <Link to={`/gig/${id}`}>
                <div className="desc">{desc}</div>
            </Link>
            <div className="review">
                <div className="star">
                <img src="https://img.icons8.com/ios-filled/50/null/star--v1.png"/>
                    {"" +star}
                </div>
                <div className="price">
                    From ₹{price}
                </div>
            </div>
            </div>
        </div>
  )
}

export default GigCards