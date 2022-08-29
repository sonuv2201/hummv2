import React from 'react';
import { Category } from '../constant/Category';
import {Link} from 'react-router-dom';
import Slider from "react-slick";


const CategoryComponant = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
          slidesToShow: 2,
          slidesToScroll: 2,
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

  return (
    <div className=''>
      <div className='container overflow-x-hidden md:px-5 py-3 mt-10 px-2 md:py-7 mx-auto'>
        <h2 className='md:text-4xl text-2xl font-bold text-gray-700'>Category</h2>
        <div className='md:-mx-3'>
        <Slider {...settings}>
        {
          Category.map((item)=>
            <div key={item.id} className='md:mt-5 mt-2 px-3 mb-5'>
              <Link to="/" className='relative rounded-lg block bg-red-700 overflow-hidden' >
                <div className='flex justify-center align-bottom relative text-center'>
                  <img src={item.image} className="object-cover aspect-square "  alt={item.title} />
                  {
                    item.label === "" ? "" : <span className='bg-accent uppercase md:text-sm text-[10px] px-[5px] pt-[3px] md:pt-1 md:pb-1.5 md:px-4 md:top-9 md:right-5 mb-[-5px] absolute rounded-[50px]'>{item.label}</span>
                  }
                  
                </div>
                <h4 className='absolute bottom-0 p-3 bg-[rgba(0,0,0,0.7)] w-full text-center text-white md:text-xl text-xs uppercase'>{item.title}</h4>
              </Link>
            </div>
          )
        }
        </Slider>
        </div>
    
      </div>
      
    </div>
  )
}

export default CategoryComponant
