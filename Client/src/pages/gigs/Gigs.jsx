import React from 'react'
import { gigs } from '../../utils/data'
import GigCards from '../../components/GIgCards/GigCards'
import "./Gigs.scss"

const Gigs = () => {
  return (
    <div className='gigsPage'>
      {gigs.map((gig)=>
        <GigCards item={gig} />
      )}
    </div>
  )
}

export default Gigs