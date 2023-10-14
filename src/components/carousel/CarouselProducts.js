import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const CarouselProducts = () => (
  <Carousel autoplay>
    <div className='mt-12 mb-8 '>
    <img src='/homeCarousel/carousel1.jpg' style={{width:'95%', height:'500px' , borderRadius:'20px', margin:'auto'}} className='' />
    </div>
    
  </Carousel>
);
export default CarouselProducts;