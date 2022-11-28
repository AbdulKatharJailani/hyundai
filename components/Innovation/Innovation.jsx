import React from 'react'
import Image from 'next/image';
import { images } from '../../constants';
import News from './News/News'; 
import Blog from './Blog/Blog';
const Innovation = () => {
    return (
        <>
        <div className='innovation__container-background'>
            <div className='innovation__containar'>
                <div className='innovation__text-section'>
                    <div className='innovation__text-content'>
                        <h2>A power tool store for everyone. Meet Hyundai Power Products.</h2>
                    
                        <p>Regardless of whether you are a professional, do-it-yourselfer or just need reliable equipment once in a while, our tools will meet your expectations.</p>

                        <p>Hyundai Power Products shop with workshop, garden and power tools offers a wide range of products useful in <u> renovation and construction </u>, as well as categories related to <u>power generators</u> , <u>washers and compressors
                        </u> , or <u>garden tools </u>.</p>

                        <p>Our power generators will provide power to your home, company, construction site. Open frame combustion units are a cost effective solution for both small and large scale construction and commercial applications. <u>Inverter</u> generators are the most compact, lightweight and quiet generators in the Hyundai range, ideal for powering caravans, motorhomes and camping, with the option of converting to LPG.</p>

                        <p>Hyundai's range of garden machines offers something for every gardening task, from <u>mowers and grass trimmers </u> to scarifiers , tillers and <u>branch shredders</u> . We offer both 2-stroke and 4-stroke gasoline powered models, but also electric mowers for safe, clean and green gardening</p>

                        <p>Hyundai pressure washers, on the other hand, provide the best cleaning performance, whether you need a petrol or diesel model.</p>

                        <p>Do-it-yourselfers can try out Hyundai power tools - built for solid work, with an emphasis on speed and precision. There are models with wired power supply, as well as rechargeable ones with a lithium-ion battery. Our tools are affordable, easy to use and give you a professional finish every time.</p>
                    </div>
                </div>
                <div className='innovation__padding-section' />
                <div className='innovation__image-section'>
                    <Image src={images.hyundai1_blog} className="innovation__image" />
                </div>
            </div>
        </div>
        <News/>
        <Blog/>
        </>
    )
}

export default Innovation