import React from 'react'

const StepTwo = ({refreshProcess,setSignUpForm,otp,setOtp,timerVisible,timer,message,verifyOtp,resend,changeMobileNumber,fromProcess}) => {
  return (
    <div id="step-1">
      <div className='flex justify-between mb-5'>
        <div>
          <h2 className='mb-1 text-3xl font-bold'>Verify OTP</h2>
          <small className='mb-3 block'>or <span className=' text-accent cursor-pointer' onClick={() => setSignUpForm(false)}>login to your account</span></small>
          <p className='h-[2px] w-[30px] border border-solid border-black rounded mb-5'></p>
        </div>
        <div>
          <img src="./images/login.png" className='w-[100px] aspect-square' alt="login" />
        </div>
      </div>
      <div className="relative mb-3">
        <p className='text-[#000] opacity-1 text-[20] underline cursor-pointer' onClick={() => changeMobileNumber()}>Change mobile number</p>
      </div>
      <div className="relative mb-5">
        <input
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          type="text" id="floating_outlined" className="block w-full px-5 py-4 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none peer" placeholder=" " />
        <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
          Enter Otp
        </label>
      </div>
      <div className={`relative mb-0 ${timerVisible ? "block" : "hidden"}`}>
        <p className='text-[#000] opacity-1 text-sm'>resend after {timer} second</p>
      </div>
      <div>
        <p className=' text-red-700 font-bold'>{message}</p>
      </div>
      <button
        onClick={() => verifyOtp()}
        type="button" className="w-full mt-7 text-black uppercase bg-accent focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-4 mr-2 mb-2 ">
        Verify Otp
        { fromProcess ? <i className='fa fa-refresh animate-[wiggle_2s_linear_infinite] ml-2'></i> : "" }
      </button>


      <div className={`relative mt-3 ${timerVisible ? "hidden" : "block"}`}>
        <p className='text-[#000] opacity-1 text-[20] underline cursor-pointer' onClick={() => resend()}>
          resend otp
          { refreshProcess ? <i className='fa fa-refresh animate-[wiggle_2s_linear_infinite] ml-2'></i> : "" }
        </p>
      </div>

    </div>
  )
}

export default StepTwo
