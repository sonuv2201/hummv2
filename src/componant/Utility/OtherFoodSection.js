import React from 'react';
import { OtherFoodData } from '../constant/OtherFoodData';
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const OtherFoodSection = () => {
  let k = 0;
  var settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  };

  const check_value = () => {

    if (k === 3) {
      k = 0;
    } else {
      k = k + 1;
    }
  }

  return (
    <div className='bg-[#e9e9eb] overflow-x-hidden pt-1 pb-1 px-2 md:px-0'>
      <div className='container md:px-5 py-4 pb-9 px-2 md:py-10 mx-auto'>
        <div className='-mx-3'>
          <Slider {...settings}>
            {
              OtherFoodData.map((item) =>
                <div key={item.id} className='px-4'>
                  <Link to="/"
                    className={`${k === 0 ? "bg-[#ffe8e0]" : k === 1 ? "bg-[#ffe9b2]" : k === 2 ? "bg-[#dbe0f9]" : "bg-[#d0e8e3]"} relative aspect-square flex md:pl-5 ms:pt-5 pl-3 pt-3 rounded-3xl overflow-hidden`}>
                    <img src={item.image} width="60" alt={item.title} height="60" className='w-[100%] h-[100%] object-cover absolute left-0 top-0' />
                    <h4 className={`${k === 0 ? "text-[#ffc702]" : k === 1 ? "text-[#dfa000]" : k === 2 ? "text-[#4b69fd]" : "text-[#009e80]"} md:text-2xl text-sm font-bold`}>{item.title}</h4>
                  </Link>
                  {check_value()}
                </div>
              )
            }
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default OtherFoodSection;
