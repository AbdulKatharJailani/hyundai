import React from 'react';
import Image from 'next/image';
import { images } from '../../constants';

const cardDetails = [
  { name: "Generator", cardImage: images.homepage_block },
  { name: "Gardening tools", cardImage: images.homepage_block2 },
  { name: "Washers and Compressors", cardImage: images.homepage_block3 },
  { name: "Renovation and Construction", cardImage: images.homepage_block4 },
  { name: "DIY", cardImage: images.homepage_block5 },
  { name: "Cordless tools", cardImage: images.homepage_block4 }
]



const Products = () => {
  return (
    <div className='products__container'>
      <h1 className='products__header'>Discover the world of Hyundai</h1>
      <div className='products__card-section'>
        {cardDetails.map((cardDetail) =>
          <div>
            <Image src={cardDetail.cardImage} className="products__image" />
            <div className="products__name">
              <h2>{cardDetail.name}</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Products