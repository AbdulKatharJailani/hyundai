import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from '../../constants';
import Image from 'next/image';
// import Carousel from '../../containers/Carousel/Carousel';
const banners=[
  images.babgrinder_banner,images.garden_banner,images.garden_banner,
]
const Banner = () => {

  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <div className='banner__slider'>
    <Slider {...settings}>
       {banners.map((banner)=>{
          return(
            <div className='slider__width'>
            <Image src={banner} className="slider__image"/>
            </div>
          )})}
     </Slider>
    </div>
    
  )
}

export default Banner