import React from 'react'
import Featured from '../../components/Featured/Featured'
import Trustedby from '../../components/Trustedby/Trustedby'
import Slide from '../../components/Slide/Slide'
import { cards } from '../../utils/data'
import CatCards from '../../components/catCards/CatCards';
import "./Home.scss"

const Home = () => {
  return (
    <div>
      <Featured />
      <Trustedby />
      <h1 className="carouselHeading">Popular professional services</h1>
      <Slide slidesToShow={5} >
        {
            cards.map((card)=>{
              return <CatCards id={card.id} item={card} />
            })
        }
      </Slide>
    </div>
  )
}

export default Home