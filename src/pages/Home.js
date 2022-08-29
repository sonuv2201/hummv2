import React from 'react'
import Banner from '../componant/Utility/Banner';
import FoodCategory from '../componant/Utility/FoodCategory';
import CategoryComponant from '../componant/Utility/CategoryComponant';
import LookingBreakfast from '../componant/Utility/LookingBreakfast';
import RestaurantsNearYou from '../componant/Utility/RestaurantsNearYou';
import OtherFoodSection from '../componant/Utility/OtherFoodSection';
import FeatureSliderComponant from '../componant/Utility/FeatureSliderComponant';
import FeaturedRestaurants from '../componant/Utility/FeaturedRestaurants';
const Home = () => {
  return ( 
    <div>
      <Banner />
      <CategoryComponant />
      <FoodCategory />
      <LookingBreakfast />
      <RestaurantsNearYou />
      <FeatureSliderComponant />
      <FeaturedRestaurants /> 
      <OtherFoodSection />
      {
        /*
        
      
      
        <CategoryComponant />
      <FoodCategory />
      <LookingBreakfast />
      <RestaurantsNearYou />
      <FeatureSliderComponant />
      <FeaturedRestaurants /> 
      <OtherFoodSection />
      
      
      
        */
      }
      
      
    </div>
  )
}

export default Home;