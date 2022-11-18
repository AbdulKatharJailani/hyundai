import React from 'react'
import Image from 'next/image';
import { images } from '../../constants';
const Dropdown = () => {
  return (
    <div className='dropdown__container'>
      <div className='dropdown__list'>
        <ul className='dropdown_list-items'>
          <li>
            <Image src={images.generator} className="dropdown_list-items-image"/>
            <p>Generator</p>
          </li>
          <li>
            <Image src={images.gardening_tools} className="dropdown_list-items-image"/>
            <p>Gardening tools</p> 
          </li>
          <li>
            <Image src={images.compressor} className="dropdown_list-items-image"/>
            <p>Washers and Compressors</p>
            </li>
          <li>
            <Image src={images.construction} className="dropdown_list-items-image"/>
            <p>Renovations and Construction</p>
          </li>
          <li>
            <Image src={images.diy} className="dropdown_list-items-image"/>
            <p>DIY</p>
          </li>
          <li>
            <Image src={images.cordless_tool} className="dropdown_list-items-image"/>
            <p>Cordless tools</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Dropdown