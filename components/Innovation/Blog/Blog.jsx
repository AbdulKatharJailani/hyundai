import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { images } from '../../../constants';
import Image from 'next/image';

const Blog = () => {
    const settings = {
        dots: false,
        autoplay: false,
      };
    const BlogDetails = [
        {
          id: 1,
          title: "Which power generator - large, medium, small?",
          image: images.hyundai4_blog,
          description: " The size of the power generator, its power, and the capacity of the fuel tank should be selected according to individual needs.Whoever has to face frequent or long-term power outages (because, for example, lives in an area where traction is damaged during gales or storms or heavy snowfalls), will do well by choosing a really large, stationary power generator. One that will power the whole house for a long time - preferably without having to constantly add gasoline or oil. The device should have a power in the range of 1500-350... "
        },
        {
          id: 2,
          title: "Ranking: 7 best mowers.We suggest what to buy",
          image: images.hyundai5_blog,
          description: "Which mower is the best? The wide selection of Hyundai mowers does not make it easy to pick the one. The diverse offer has been prepared to respond to various needs - and meeting the expectations of customers is of key importance here. On this basis, we have created our ranking."
        },
        {
          id: 3,
          title: "How to choose the perfect mower?For a small and large garden, electric, combustion…",
          image: images.hyundai6_blog,
          description: "A good mower is one that responds to the real needs of the user.Therefore, before buying, it is worth considering a number of aspects of the subject - from the size and type of the lawn, through the way the garden is arranged and the terrain, to your own comfort and ... the level of noise tolerance of household members and neighbors. To make this task easier, we have grouped the key issues into a few questions."
        }
      ]
  return (
    <>
         <h1 className='blog__container-header'>Tips and inspiration</h1>
        <div className='blog__container'>
      <Slider {...settings}>
        {
            BlogDetails.map((blogDetail) => {
            return (
              <div className='bloglDetails__section'>
                <div className='blogDetails__text-section'>
                  <h2>{blogDetail.title}</h2>
                  <p>{blogDetail.description}</p>
                </div>
                <div className='blogDetails__image-section'>
                  <Image src={blogDetail.image}  className='blogDetails__image'/>
                </div>
              </div>
            )
          })
        }
      </Slider>
    </div>
    </>
  )
}

export default Blog