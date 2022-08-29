import React from 'react';
import Slider from "react-slick";
import { RestaurantsNearYouData } from '../constant/RestaurantsNearYouData';
import {Link} from 'react-router-dom';

const RestaurantsNearYou = () => {
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
    <div className=' bg-gray-100 overflow-x-hidden pt-1 pb-10 px-2 md:px-0'>
      <div className='container md:px-5 mt-10 mb-10 px-2 md:py-10 mx-auto'>
        <h2 className='md:text-4xl text-2xl font-bold text-gray-900'>Restaurants Near You</h2>
        <div className='-mx-3'>
        <Slider {...settings}>
          {
            RestaurantsNearYouData.map((item) =>
              <div key={item.id} className="px-3 py-10">
                <div className="max-w-sm bg-white rounded-lg border shadow-md">
                  <Link to="/" className='relative'>
                    <img className="rounded-t-lg md:aspect-[3/2] aspect-[3/2] object-cover" src={item.images} alt="" />
                      { 
                        item.offer === "" ? "" : <span className='absolute top-3 left-2 bg-white rounded-[30px] pw-3 px-3 text-black font-bold'>{item.offer} <br /></span> 
                      }
                    </Link>
                  <div className="p-5"> 
                    
                    <div>
                      <Link to="/">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900">{item.title}</h5>
                      </Link>
                      <div className='mb-2 text-m text-gray-400'>
                        <span>{item.distance}</span>
                        <i className='fa fa-star text-accent px-2'></i>
                        <span>{item.rating}</span>
                      </div>
                      <div className='mt-4 pb-3'>
                      {
                        item.foodType.map((childItem,i)=>
                          <span key={i} className={` py-1.5 rounded-lg px-3 mr-2 ${ i===0 ? 'text-[#DFA000] bg-[#fcbd211a]' : i === 1 ? 'text-[#4B69FD] bg-[#b3c0fe66]' : i === 2 ? 'text-[#DFA000] bg-[#ff420033]' : ""}`} >{childItem}</span>
                        )
                      }
                      </div>
                      
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

export default RestaurantsNearYou
