import { RestaurantsNearYouData } from '../constant/RestaurantsNearYouData';
import {Link} from 'react-router-dom';

const FeaturedRestaurants = () => {

  return (
    <div className=' bg-gray-100 pt-1 pb-10 px-2 md:px-0'>
      <div className='container md:px-5 mt-10 mb-10 px-2 md:py-10 mx-auto'>
        <div className='md:flex justify-between items-center'>
          <h2 className='md:text-4xl text-2xl font-bold text-gray-900'>Restaurants</h2>
          <div className='flex md:flex-row flex-wrap mt-3 gap-5'>
            <button>Delivery Time</button>
            <button>Rating</button>
            <button>Low Cost to Hight</button>
            <button>Hight Cost To Low</button>
          </div>
        </div>
        <div className='flex flex-wrap md:-mx-4 mt-10'>
        {
            RestaurantsNearYouData.map((item) =>
              <div key={item.id} className="px-3 pb-7"> 
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
        </div>
      </div>
    </div>
  )
}

export default FeaturedRestaurants
