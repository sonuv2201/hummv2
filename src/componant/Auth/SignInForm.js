import React, { useEffect, useState } from 'react';
import { URL } from '../constant/API';
import { setLogin } from '../../store/features/authReducer';
import { useDispatch } from 'react-redux/es/exports';

const SignInForm = ({ setSignUpForm,setIsSigninOpen }) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [usernameMessage, setUsernameMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [message, setMessage] = useState("");
  const [loginProcess, setLoginProcess] = useState(false);
  const dispatch = useDispatch();

  const [token, setToken] = useState();

  const loginUser = () => {
    setLoginProcess(true);
    setMessage("");
    setUsernameMessage("");
    setPasswordMessage("");

    fetch('http://54.161.84.81:8000/user-auth/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "username": phone,
        "password": password
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.password) {
          setPasswordMessage(response.password)
        }

        if (response.username) {
          setUsernameMessage(response.username)
        }

        if (response.detail) {
          setPasswordMessage(response.detail);
        }

        if (response.access) {
          localStorage.setItem("token", response.access);
          localStorage.setItem("username", response.user_name);
          localStorage.setItem("id", response.id);
          dispatch(setLogin(response))
          setIsSigninOpen(false);
          setPhone("");
          setPassword("");
        }
        console.log(response)
        setLoginProcess(false);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }


  return (
    <div className='w-[70%]'>
      <div className='flex justify-between mb-8'>
        <div>
          <h2 className='mb-1 text-3xl font-bold'>Login</h2>
          <small className='mb-3 block'>or <span className=' text-accent cursor-pointer'
            onClick={() => {
              setSignUpForm(true)
              localStorage.setItem('loginForm', 1);
            }}>create an account</span></small>
          <p className='h-[2px] w-[30px] border border-solid border-black rounded mb-5'></p>
        </div>
        <div>
          <img src="./images/login.png" className='w-[100px] aspect-square' alt="login" />
        </div>
      </div>
      <div className="relative">
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="tel" id="floating_outlined" className="block w-full px-5 py-4 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none peer" placeholder=" " />
        <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Phone Number</label>
      </div>

      {usernameMessage === "" ? "" : <p className=' text-red-700 font-bold'>{usernameMessage}</p>}

      <div className="relative mt-5">
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="tel" id="floating_outlined" className="block w-full px-5 py-4 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none peer" placeholder=" " />
        <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
          Password
        </label>
      </div>

      {passwordMessage === "" ? "" : <p className='mt-3 text-red-700 font-bold'>{passwordMessage}</p>}

      <button
        onClick={() => loginUser()}
        type="button" className="w-full mt-7 text-black uppercase bg-accent focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-4 mr-2 mb-2 ">
          Login
      { loginProcess ? <i className='fa fa-refresh animate-[wiggle_2s_linear_infinite] ml-2'></i> : "" }  
      </button>

      {message === "" ? "" : <p className=' text-red-700 font-bold'>{message}</p>}
    </div>
  )
}

export default SignInForm
