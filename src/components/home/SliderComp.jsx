import React from 'react'
import Slider from "react-slick";


const SliderComp = () => {
  const settings = {
    //dots: true,
    infinite: true,
    speed: 500,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>

      <Slider {...settings}>

        <div className='!flex items-center bg-gray-100 px-6'>
          <div className=''>
            <div className='text-6xl font-bold'>En Kaliteli Ayakkabılar Burada</div>
            <div className=' text-lg-my-6 mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</div>
            <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>İncele</div>
          </div>
          <img src='https://m.media-amazon.com/images/I/71ske-81hqL._AC_UF1000,1000_QL80_.jpg' alt='' className='w-[600px] h-[400px]' />
        </div>
      
        <div className='!flex items-center bg-gray-100 px-6'>
          <div className=''>
            <div className='text-6xl font-bold'>En Kaliteli Ayakkabılar Burada</div>
            <div className=' text-lg-my-6 mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</div>
            <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>İncele</div>
          </div>
          <img src='https://m.media-amazon.com/images/I/71ske-81hqL._AC_UF1000,1000_QL80_.jpg' alt='' className='w-[600px] h-[400px]' />
        </div>

      </Slider>

    </div>

  );
}


export default SliderComp