import React from 'react';
import { images } from '../../constants';
import Image from 'next/image';
import { FaRegUser, FaPhoneAlt, FaFacebookF, FaYoutube, FaSearch } from 'react-icons/fa';
import { SlBasket } from 'react-icons/sl';

const Header = () => {
  return (
    <>
      <div className='hyundai__header-container'>
        <div className='hyundai__header-logoSection'>
          <Image src={images.hyundai_logo} alt="logo" className='hyundai__header-logo' />
        </div>
        <div className='w-100'>
        <div className='d-flex'>
          <div className='hyundai__header-searchSection'>
            <FaSearch className='icon' />
            <input className='hyundai__header-searchSection_input'  
            placeholder='Enter the product name'/>
          </div>
          <div className='hyundai__header-userSection'>
            <div className='hyundai__header-userSection-login'>
              <FaRegUser className='icon'/>
              <p>Login</p>
            </div>
            <div className='hyundai__header-userSection-addtocart'>
              <SlBasket className='icon'/>
              <p>Baskat</p>
            </div>
            <div className='hyundai__header-userSection-contact'>
              <FaPhoneAlt className='icon'/>
              <p>Contact</p>
            </div>
            <div className='hyundai__header-userSection-facebook'>
              <FaFacebookF className='icon'/>
             </div>
            <div className='hyundai__header-userSection-youtube'>
              <FaYoutube className='icon'/>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>

  )
}

export default Header