import React from 'react'
import './CatCards.scss';
import { Link } from 'react-router-dom';

const CatCards = ({item}) => {
  return (
    <div className='catcards'>
      <Link to="/gigs?cat=design">
        <img src={item.img} alt="cards" />
        <div className='cardDesc'>{item.desc}</div>
        <div className='cardtitle'>{item.title}</div>
        <div className="overlay"></div>
      </Link>
    </div>
  )
}

export default CatCards