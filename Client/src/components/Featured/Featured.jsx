import React from 'react'
import "./Featured.scss"

const Featured = () => {
  return (
    <div className='featured_container'>
        <div className="left">
            <h1>Find the perfect <i>freelance</i> services for your business</h1>
            <div className="search_container">
                <div className="searchbox">
                    <img src="./img/search.png" alt="search icon"/>
                    <input type="text" className="search" placeholder='Try "Building a mobile app"'/>
                </div>
                <button className="search_button">Search</button>
            </div>
            <div className="popular">
                <span>Popular :</span>
                <button>Web Design</button>
                <button>Wordpress</button>
                <button>Logo Design</button>
                <button>AI Art</button>
            </div>
        </div>
        <div className="right">
            <img src="./img/man.png" alt="character" />
        </div>
    </div>
  )
}

export default Featured