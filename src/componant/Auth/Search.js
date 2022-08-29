import React from 'react';

const Search = ({ children, isOpen, setIsOpen }) => {
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 -translate-x-0  "
          : " transition-all delay-500 opacity-0 -translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-lg left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " -translate-x-0 " : " -translate-x-full ")
        }
      >
        <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 md:overflow-y-hidden md:pl-5 md:pt-5 overflow-y-scroll h-full">
          <header className="p-4 font-bold text-lg">Enter your delevery location</header>
          <div className="flex pl-4 flex-col gap-5">
            <div className="mb-3 xl:w-96 w-[90%]">
              <input
                type="search"
                className=" block w-full px-5 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleSearch"
                placeholder="Search for area, street name.."
              />
            </div>

            <div className="mb-3 xl:w-96 w-[90%] group cursor-pointer border border-gray-200 p-6 rounded-lg">
              <div className='flex gap-5'>
              <svg className='mt-1.5' version="1.1" x="0px" y="0px" width="20" height="20" viewBox="0 0 297 297">
                <path d="M148.5,0C66.653,0,0.067,66.616,0.067,148.499C0.067,230.383,66.653,297,148.5,297s148.433-66.617,148.433-148.501
	C296.933,66.616,230.347,0,148.5,0z M158.597,276.411v-61.274c0-5.575-4.521-10.097-10.097-10.097s-10.097,4.521-10.097,10.097 v61.274c-62.68-4.908-112.845-55.102-117.747-117.814h61.207c5.575,0,10.097-4.521,10.097-10.097s-4.522-10.097-10.097-10.097 H20.656C25.558,75.69,75.723,25.497,138.403,20.589v61.274c0,5.575,4.521,10.097,10.097,10.097s10.097-4.521,10.097-10.097V20.589 c62.681,4.908,112.846,55.102,117.747,117.814h-61.207c-5.575,0-10.097,4.521-10.097,10.097s4.521,10.097,10.097,10.097h61.207
	C271.441,221.31,221.276,271.503,158.597,276.411z"/>
              </svg>
              <div>
                <h4 className='group-hover:text-[#ffc702] '>Get Current Locaton</h4>
                <span>Using GPS</span>
              </div>
              </div>
            </div>
          </div>
          <p onClick={()=>setIsOpen(false)} className='absolute right-10 md:top-3 -top-2 cursor-pointer w-[30px] h-[30px]'>
            <span className=' left-0 top-4 absolute w-[30px] h-[2px] bg-black rotate-45'></span>
            <span className=' left-0 top-4 absolute w-[30px] h-[2px] bg-black -rotate-45'></span>
          </p>
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  )
}

export default Search
