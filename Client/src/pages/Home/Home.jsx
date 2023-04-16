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
      <div className="features">
        <div className="details">
          <h1 className="features__heading">A whole world of freelance talent at your fingertips</h1>
          <div className="points">
            <div className="features__title">
              <img src="./img/check.png" alt="checktick" />
              The best for every budget
            </div>
            <p className="features__desc">Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
            <div className="features__title">
            <img src="./img/check.png" alt="checktick" />Quality work done quickly
            </div>
            <p className="features__desc">
            Find the right freelancer to begin working on your project within minutes.
            </p>
            <div className="features__title">
            <img src="./img/check.png" alt="checktick" />Protected payments, every time
            </div>
            <p className="features__desc">
            Always know what you'll pay upfront. Your payment isn't released until you approve the work.
            </p>
            <div className="features__title">
            <img src="./img/check.png" alt="checktick" />24/7 support
            </div>
            <p className="features__desc">
            Questions? Our round-the-clock support team is available to help anytime, anywhere.
            </p>
          </div>

        </div>
          <div className="features_video">
            <video controls src='./img/AdVideo.mp4' />
          </div>
      </div>
    </div>
  )
}

export default Home