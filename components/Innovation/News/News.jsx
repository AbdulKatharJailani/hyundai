import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from '../../../constants';
import Image from 'next/image';

const newsDetails = [
  {
    id: 1,
    title: "Power generator - Hyundai power generator",
    image: images.garden_banner,
    description: "In practice, electricity is necessary for us - primarily in everyday functioning, and also in renovation or construction works, during DIY, but also in moments of relaxation. Unfortunately, we do not always and everywhere have free access to it, especially outside the home.And even where there are plenty of sockets, there are often power failures. In such moments, a power generator, i.e. a power generator, turns out to be invaluable. A rich catalog of this type of devices for the home, garage, workshop, plot and construction site is available in Hyundai's offer."
  },
  {
    id: 2,
    title: "Garden tools - well-maintained greenery",
    image: images.hyundai3_blog,
    description: 'The world of Hyundai devices is primarily a vast, multi-element microcosm of cordless power tools. These devices enable and greatly facilitate the implementation of small and large plans at home or in a home workshop, but also as part of renovation or construction works. And without a cloud of exhaust fumes, without excessive noise, without tangled cables! The most popular types of these devices are undoubtedly drills, screwdrivers and impact wrenches, but the offer of cordless tools is much, much richer.'
  },
  {
    id: 3,
    title: "Cordless tools - for home, workshop, company",
    image: images.hyundai4_blog,
    description: 'An important group of Hyundai cordless tools are garden tools, thanks to which the care of the green surroundings of the house becomes trouble-free, effective and pleasant. Importantly, as in the case of tools for DIY or renovation - there is no problem of too short or tangled cables, exhaust fumes, additional noise. The user gains full freedom of creative action in the open air. Particularly popular are cordless lawnmowers, brushcutters and trimmers, available in many models.'
  }
]

const News = () => {

  const settings = {
    dots: true,
    autoplay: false,
  };
  return (
    <div className='news__container'>
      <Slider {...settings}>
        {
          newsDetails.map((newsDetail) => {
            return (
              <div className='newsDetails__section'>
                <div className='newsDetails__image-section'>
                  <Image src={newsDetail.image}  className='newsDetails__image'/>
                </div>
                <div className='newsDetails__text-section'>
                  <h2>{newsDetail.title}</h2>
                  <p>{newsDetail.description}</p>
                </div>
              </div>
            )
          })
        }
      </Slider>
    </div>
  )
}

export default News