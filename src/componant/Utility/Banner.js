
const Banner  = () =>{

  return(
    <div className=" py-10 bg-[url(https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png)]">
      <div className="container mx-auto flex flex-wrap p-5 flex-col justify-center md:flex-row items-center">
          <h1 className="text-center md:text-[70px] text-20 w-full font-bold text-[#fff] ">HUMM</h1>
          <h2 className="w-full text-center text-[#fff] text-[36px] text-18 text-400">Discover the best food & drinks in Ahmedabad</h2>
          
          <div className="bg-white md:w-[70%] md:flex rounded px-5 py-2 self-center mt-10">
            <div className="flex md:w-[25%] justify-center items-center px-3">
              <i className="fa fa-map-marker"></i>
              <input
                type="search"
                className=" block w-full px-5 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding   rounded transition ease-in-out m-0 focus:outline-none"
                id="exampleSearch"
                placeholder="Location"
              />
            </div>
            <div className="flex w-[70%] justify-center items-center px-3">
              <span className="md:block hidden bg-gray-300 w-[2px] h-[30px] mr-5"></span>
              <i className="fa fa-search"></i>
            <input
                type="search"
                className=" block w-full px-5 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding  transition ease-in-out m-0  focus:outline-none"
                id="exampleSearch"
                placeholder="Search for restaurant, cuisine or a dish"
              />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Banner;