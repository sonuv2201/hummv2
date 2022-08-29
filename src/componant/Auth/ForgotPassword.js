import React,{useState} from 'react';

const ForgotPassword = ({setSignUpForm}) => {
  const [phone,setPhone] = useState();
  return (
    <div className='w-[70%]'>
      <div className='flex justify-between mb-8'>
        <div>
        <h2 className='mb-1 text-3xl font-bold'>Login</h2>
        <small className='mb-3 block'>or <span className=' text-accent cursor-pointer' onClick={()=>setSignUpForm(true)}>create an account</span></small>
        <p className='h-[2px] w-[30px] border border-solid border-black rounded mb-5'></p>
        </div>
        <div>
          <img src="./images/login.png" className='w-[100px] aspect-square' alt="login"/>
        </div>
      </div>
      <div className="relative">
        <input 
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
          type="tel" id="floating_outlined" className="block w-full px-5 py-4 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none peer" placeholder=" " />
        <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Phone Number</label>
      </div>
      <button type="button" className="w-full mt-7 text-black uppercase bg-accent focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-4 mr-2 mb-2 ">Login</button>
    </div>
  )
}

export default ForgotPassword
