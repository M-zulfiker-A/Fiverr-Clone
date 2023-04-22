import React, { useState } from 'react'
import { gigs } from '../../utils/data'
import GigCards from '../../components/GIgCards/GigCards'
import "./Gigs.scss"

const Gigs = () => {
  const [dropdown , setDropdown] = useState(false)
  const [sortBy , setsortBy] = useState("Best selling")
  return (
    <>
    <div className="gigspage">
      <div className="breadcrumbs">Fiverr {">"} AI Artists</div>
      <h1 className="title">AI Artist</h1>
      <div className="description">Explore the boundaries of art and technology with Fiverr's AI artists</div>
      <div className="controls">
        <div className="left">
          Budget
          <input className='min' placeholder='min'/>
          <input className='max' placeholder='max'/>
          <button className='minmax'>Apply</button>
        </div>
        <div className="right">
          <div className="sortby">
            <p>Sort By :</p>
            <span onClick={()=>setDropdown(!dropdown)}>{sortBy}</span>
            <img src={dropdown ? "https://cdn-icons-png.flaticon.com/512/130/130906.png " : "https://cdn-icons-png.flaticon.com/512/32/32195.png"} alt="arrow" onClick={()=>setDropdown(!dropdown)}/>
          </div>
          {dropdown && 
            <div className='sortdropdown' onClick={(e)=>{
              setsortBy(e.target.innerHTML)
              setDropdown(false)
              }}>
              <span>Newest</span>
              <span>Best Selling</span>
            </div>
          }
        </div>
      </div>
    </div>
      <div className='gigscontainer'>
        {gigs.map((gig)=>
          <GigCards item={gig} />
          )}
      </div>
    </>
  )
}

export default Gigs