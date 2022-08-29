import React,{useEffect, useState} from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const Signin = ({ isOpenSignin, setIsSigninOpen }) => {
  const [signUpForm,setSignUpForm] = useState(false);
  const [loginForm,setLoginForm] = useState(0);

  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpenSignin
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpenSignin ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 md:overflow-y-hidden md:pl-5 md:pt-5 overflow-y-scroll h-full">
          <div className="flex pl-4 pt-10 flex-col gap-5">
            {
              signUpForm ? 
              <SignUpForm signUpForm={signUpForm} setSignUpForm={setSignUpForm} setIsSigninOpen={setIsSigninOpen} />
              :
              <SignInForm signUpForm={signUpForm} setSignUpForm={setSignUpForm} setIsSigninOpen={setIsSigninOpen} />
            }
             
             
          </div>
          <p onClick={()=>setIsSigninOpen(false)} className='absolute right-10 top-3 cursor-pointer w-[30px] h-[30px]'>
            <span className=' left-0 top-4 absolute w-[30px] h-[2px] bg-black rotate-45'></span>
            <span className=' left-0 top-4 absolute w-[30px] h-[2px] bg-black -rotate-45'></span>
          </p>
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsSigninOpen(false);
        }}
      ></section>
    </main>
  )
}

export default Signin
