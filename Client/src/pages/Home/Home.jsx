import React from 'react'
import Featured from '../../components/Featured/Featured'
import Trustedby from '../../components/Trustedby/Trustedby'
import Slide from '../../components/Slide/Slide'
import { cards, projects } from '../../utils/data'
import CatCards from '../../components/catCards/CatCards';
import "./Home.scss"
import ProjCards from '../../components/ProjCards/ProjCards'

const Home = () => {
  return (
    <div>
      <Featured />
      <Trustedby />
      <h1 className="carouselHeading">Popular professional services</h1>
      <Slide slidesToShow={5} >
        {
            cards.map((card)=>{
              return <CatCards key={card.id} item={card} />
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
      <h1 className='marketplace_heading'>Explore the Marketplace</h1>
      <div className="marketplace">
        <div className="market_item">
          <img src="https://cdn-icons-png.flaticon.com/512/1786/1786971.png" alt="Business" />
          <p>Business</p>
        </div>
        <div className="market_item">
          <img src="https://cdn-icons-png.flaticon.com/512/2991/2991406.png" alt="Digital" />
          <p>Digital Marketing</p>
        </div>
        <div className="market_item">
          <img src="   https://cdn-icons-png.flaticon.com/512/3586/3586779.png " alt="Animation" />
          <p>Video & Animation</p>
        </div>
        <div className="market_item">
          <img src="https://cdn-icons-png.flaticon.com/512/3131/3131430.png" alt="Writing" />
          <p>Writing & Translation</p>
        </div>
        <div className="market_item">
          <img src="   https://cdn-icons-png.flaticon.com/512/1077/1077701.png " alt="Graphics" />
          <p>Graphics & Designing</p>
        </div>
        <div className="market_item">
          <img src="   https://cdn-icons-png.flaticon.com/512/1336/1336494.png " alt="Programming" />
          <p>Programming & Tech</p>
        </div>
        <div className="market_item">
          <img src="   https://cdn-icons-png.flaticon.com/512/6749/6749718.png " alt="Lifestyle" />
          <p>Lifestyle</p>
        </div>
        <div className="market_item">
          <img src="https://cdn-icons-png.flaticon.com/512/993/993762.png" alt="Data" />
          <p>Data</p>
        </div>
        <div className="market_item">
          <img src="https://cdn-icons-png.flaticon.com/512/685/685655.png " alt="Photography" />
          <p>Photography</p>
        </div>
        <div className="market_item">
          <img src="https://cdn-icons-png.flaticon.com/512/8729/8729572.png  " alt="Music" />
          <p>Music & Audio</p>
        </div>
      </div>
      <div className="projects_container">
        <h1 className="projects_heading">Get inspired by projects made by our freelancers</h1>
        <Slide slidesToShow={4} >
          {
            projects.map((card)=>{
              return <ProjCards key={card.id} item={card} />
            })
          }
        </Slide>
      </div>
        
    </div>
  )
}

export default Home