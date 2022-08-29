import React from 'react';
import { FoodCategoryData } from '../constant/FoodCatagoryData';
import { Link } from 'react-router-dom';

const FoodCategory = () => {
  return (
    <div className='container px-5 mt-10 mb-10 md:py-7 mx-auto'>
      <div className='flex flex-wrap -m-4 justify-center'>
        {
          FoodCategoryData.map(item =>
            <div  key={item.id} className='md:p-4 p-1 w-1/5'>
            <Link to="" className='group inline-block w-full bg-gray-100 md:p-5 p-2.5 rounded-2xl hover:bg-accent'>
              <div className='md:p-4 flex flex-col text-center items-center'>
                <img src={item.activeImage} width="90" alt={item.title} height="90" className='block group-hover:hidden' />
                <img src={item.image} width="90" alt={item.title} height="90" className='hidden group-hover:block'/>
                <h3 className='text-gray-900 md:text-lg text-[12px] title-font font-medium md:my-3 mt-1 mb-0  group-hover:text-white'>{item.title}</h3>
              </div>
            </Link>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default FoodCategory
