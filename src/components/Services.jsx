import React from 'react'
import img1 from '../assets/3.jpg'
import img2 from '../assets/4.jpg'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
const Services = () => {
    return (
        <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000} showThumbs={false}>
            <div>
                <img src={img1} alt="full stack development" />
                <p className='legend'>full stack development</p>
            </div>
            <div>
                <img src={img2} alt="" />
                <p className='legend'>the best results in the web domain</p>
            </div>
        </Carousel>
    )
}

export default Services
