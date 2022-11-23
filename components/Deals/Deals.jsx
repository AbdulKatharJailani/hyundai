import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from '../../constants';
import Image from 'next/image';


const cardDetails = [
  {
    id:1,
    modalname: "HSO20305-A",
    Description: "Hyundai 2000W 305mm Double Tilt Miter Saw",
    cardImage: images.pilarka,
    regular_price:"PLN 1,599",
    deal_price:"PLN 1,379",
    discount:"-13%",
  },
  {
    id:2,
    modalname: "HM2150-230",
    Description: "Hyundai 2150W 230mm angle grinder",
    cardImage: images.szlifierka,
    regular_price:"PLN 439",
    deal_price:"PLN 373",
    discount:"-15%"
  },
  {
    id:3,
    modalname: "HG800A",
    Description: "Portable Gasoline Power Generator 700 W",
    cardImage: images.pl_generator,
    regular_price:"PLN 1,829",
    deal_price:"PLN 1,646",
    discount:"-10%"
  },
  {
    id:4,
    modalname: "HCOMP100",
    Description: "Soil compactor Hyundai 97 cm³ 3 HP 0-20 m/min Km/h",
    cardImage: images.myjka2,
    regular_price:"PLN 1,829",
    deal_price:"PLN 1,646",
    discount:"-10%"
  },
  { 
    id:5,
    modalname: "HMTB5255-3",
    Description: "Petrol tiller 196 cm³ 52 cm - Four-stroke engine",
    cardImage: images.myjka,
    regular_price:"PLN 2,099",
    deal_price:"PLN 1,679",
    discount:"-20%",
  },
  {
    id:6,
    modalname: "HBVE2800S",
    Description: "Electric plant shredder 2800 W 60 L - On wheels",
    cardImage: images.szlifierka2,
    regular_price:"PLN 1,149",
    deal_price:"PLN 862",
    discount:"-25%"
  }
]

const Deals = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    slidesToShow: 5,
  };
  return (
    <div className='deals__container'>
      <h1 className='deals__container-header'>The best deals</h1>
      <Slider {...settings}>
      {
        cardDetails.map((cardDetail)=>{
         return(
          <div className='deals__card-section'>
            <Image src={cardDetail.cardImage} className="deals__card-image"/>
            <p className='deals__card-name'>{cardDetail.modalname}</p>
            <p className='deals__card-description'>{cardDetail.Description}</p>
            <p className='deals__card-price'>{cardDetail.regular_price}</p>
            <p className='deals__card-deals'>{cardDetail.deal_price}
            <span>{cardDetail.discount}</span></p>
            <button className='deals__card-button'>See More</button>
          </div>
         )
        })
        }
   </Slider>
    </div>
  )
}

export default Deals