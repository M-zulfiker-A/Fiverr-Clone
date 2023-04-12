import React from 'react'
import './CatCards.scss';

const CatCards = ({item}) => {
  return (
    <div className='catcards'>
        <img src={item.img} alt="cards" />
        <div className='cardDesc'>{item.desc}</div>
        <div className='cardtitle'>{item.title}</div>
        <div className="overlay"></div>
    </div>
  )
}

export default CatCards