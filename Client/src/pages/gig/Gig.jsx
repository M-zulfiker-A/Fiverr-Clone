import React from 'react'
import "./Gig.scss"
import Slide from '../../components/Slide/Slide'
import Reviews from '../../components/Reviews/Reviews'

const Gig = () => {
  return (
    <div className='gig'>
      <div className="container">
        <div className="left">
          <div className="breadcrumbs">Fiverr {">"} Graphics Design</div>
          <h1>I will create Graphics design for you</h1>
          <div className="user">
            <img className= "profilepic" src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/0d59217302fc3141e9bad4282d217528-1673307842712/e2124d86-d076-4849-8607-0ee9a597c73b.jpg" alt="" />
            <span>John Doe</span>
            <div className="star">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>4.9</span>
            </div>
          </div>
            <div className="slider_container">
              <Slide slidesToShow={1}>
                <img src="https://images.pexels.com/photos/8797307/pexels-photo-8797307.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <img src="https://images.pexels.com/photos/5708069/pexels-photo-5708069.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <img src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              </Slide>
            </div>
            <div className="about">
              <div className="title">About this Gig</div>
              <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid atque sequi, neque eveniet sapiente asperiores dignissimos hic consequuntur cum cumque laboriosam, harum nobis? Sequi voluptates aperiam error unde, minima dolorum! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima magni, non iure quae a delectus porro odit doloribus eveniet laboriosam officia dolore quasi maxime hic ab et consequatur rem voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, tempore architecto incidunt minus maiores voluptatum nostrum eos. Esse eos quasi quas odit, libero ducimus eaque? Accusantium optio minima odio. Quod.</div>
            </div>
            <div className="about-seller">
              <img className= "profilepic" src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <div className="seller-details">
                <div className="name">John Doe</div>
                <div className="shortdesc">I design AI art for you</div>
                <div className="star">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>4.9</span>
                </div>
                <button>Contact me</button>
              </div>
              <div className="box">
                <div className="basic-details">
                  <div className="qna">
                    <div className="q">From</div>
                    <div className="a">USA</div>
                  </div>
                  <div className="qna">
                    <div className="q">Member SInce</div>
                    <div className="a">Jan 2023</div>
                  </div>
                  <div className="qna">
                    <div className="q">Avg. Response time</div>
                    <div className="a">1 hour</div>
                  </div>
                  <div className="qna">
                    <div className="q">Last Delivery</div>
                    <div className="a">about 3 hours</div>
                  </div>
                  <div className="qna">
                    <div className="q">Languages</div>
                    <div className="a">Malayalam , English , Hindi</div>
                  </div>
                  <div className="desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis labore amet officia repellat cum eligendi est saepe eos, ullam natus aliquid non dicta libero illum nihil inventore optio ad enim?
                  </div>
                </div>
              </div>
              <div className="reviews">
                <h2>Reviews</h2>
                <hr />
                <Reviews />
              </div>
            </div>
        </div>
        <div className="right">
          <div className="cardtitle">
            <p>1 AI Generated Image</p>
            <p>$5.99</p>
          </div>
          <div className="card-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, inventore. Provident voluptates ex aspernatur velit dolore illum quaerat culpa ratione consectetur 
          </div>
          <div className="delivery">
            <div>
              <img src="/img/clock.png" alt="" />
              2 Days delivery
            </div>
            <div>
              <img src="/img/recycle.png" alt="" />
              5 revisions
            </div>
          </div>
          <div className="cardfeatures">
            <ul>
              <li><img src="/img/greencheck.png" alt="" />2 concepts included </li>
              <li><img src="/img/greencheck.png" alt="" />Logo transparency</li>
              <li><img src="/img/greencheck.png" alt="" />Printable file </li>
              <li><img src="/img/greencheck.png" alt="" />Vector file</li>
              <li><img src="/img/greencheck.png" alt="" />Include 3D mockup</li>
              <li><img src="/img/greencheck.png" alt="" />Include source file</li>
            </ul>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Gig