import React from 'react';
import { LookingBreakfastData } from '../constant/LookingBreakfastData';
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const LookingBreakfast = () => {
  var settings = {
    dots: true,
    arrow:false,
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
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='bg-accent overflow-x-hidden pt-1 pb-10 px-2 md:px-0'>
      <div className='container md:px-5 mt-10 mb-10 px-2 md:py-10 mx-auto'>
        <h2 className='md:text-4xl text-2xl font-bold text-gray-900'>Lookign For Breakfast</h2>
        <h3 className='md:text-2xl'>Here's what you might like to taste</h3>
        <div className='-mx-3'>
        <Slider {...settings}>
          {
            LookingBreakfastData.map((item) =>
              <div key={item.id} className="px-3 py-10">
                <div className="max-w-sm bg-white rounded-lg border shadow-md">
                  <Link to="/" className='relative'>
                    <img className="rounded-t-lg md:aspect-[4/3] aspect-[3/2] object-cover" src={item.images} alt="" />
             
                      { 
                        item.offer === "" ? "" : <span className='absolute top-3 left-2 bg-white rounded-[30px] pw-3 px-3 text-black font-bold'>{item.offer} <br /></span> 
                      }
                      
                   
                    <h2 className='text-2xl text-black text-bold absolute bottom-3 right-3 px-5 py-2 bg-accent rounded-lg'>{item.currency}{item.price}</h2>
                  </Link>
                  <div className="p-5 min-h-[180px]"> 
                    <span className=' block h-[20px] text-accent font-bold'>{item.isFreeDelevery}</span>
                    <div>
                      <Link to="/">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{item.title}</h5>
                      </Link>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                      <Link to="/" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-accent rounded-lg hover:bg-accent focus:ring-4 focus:outline-none focus:ring-blue-300">
                        Read more
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                      </Link>
                    </div> 
                    
                  </div>
                </div>
              </div>
            )
          }
          </Slider>
          </div>
      </div>
    </div>
  )
}

export default LookingBreakfast
