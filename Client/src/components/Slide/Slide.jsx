import React from 'react'
import Slider from "infinite-react-carousel"
import "./Slide.scss"

const Slide = ({children,slidesToShow}) => {
  return (
      <Slider classNam="carouselcontainer" slidesToShow={slidesToShow}>
          {children}
      </Slider>
  )
}

export default Slide