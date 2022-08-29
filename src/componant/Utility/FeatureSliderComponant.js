import React from 'react';
import { FeatureSlider } from '../constant/FeatureSlider';
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const FeatureSliderComponant = () => {
  var settings = {
    dots: true,
    arrow: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          variableWidth: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          variableWidth: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        }
      }
    ]
  };

  return (
    <div className=' w-full bg-[#111] overflow-hidden pt-5 pb-5 px-2 md:px-0'>
      <div className='md:px-5  px-2 md:py-10 mx-auto'>
        <div className='-mx-3'>
          <Slider {...settings}>
            {
              FeatureSlider.map((item)=>
                <div key={item.id} className='md:px-5 px-2'>
                  <Link to="/">
                    <img src={item.image} alt="" />
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

export default FeatureSliderComponant
