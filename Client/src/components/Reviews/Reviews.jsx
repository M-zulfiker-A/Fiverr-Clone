import React from 'react'
import "./Reviews.scss"
const Reviews = ({user , messaage}) => {
  return (
    <div className='review-container'>
        <div className="user">
            <img src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <div className="seller-details">
                <p>John Doe</p>
                <div className="country">
                    <img src="https://img.freepik.com/free-vector/illustration-usa-flag_53876-18165.jpg?w=1380&t=st=1682474385~exp=1682474985~hmac=683aa7eeb15c6b64209b36dcf1afa61e3b03d9fd5e691c385ec94e5c5aaaf31e" alt="" />
                    united states
                </div>
            </div>
        </div>
        <div className="comment">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt repellat doloremque hic velit totam quis facere numquam similique? Nisi perspiciatis cum laudantium. Adipisci deserunt architecto facilis asperiores odio placeat error.
        </div>
        <div className="feedback">
            <p>Helpful ?</p>
            <span className='like-and-dislike'>
                <span><img src="/img/like.png" alt="" /></span>
                <span>yes</span>
                <span><img src="/img/dislike.png" alt="" /></span>
                <span>No</span>
            </span>
        </div>
    </div>
  )
}

export default Reviews