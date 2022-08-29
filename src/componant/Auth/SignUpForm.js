import React, { useEffect, useState } from 'react'
import { URL } from '../constant/API';
import StepOne from './SignUpFolder/StepOne';
import StepTwo from './SignUpFolder/StepTwo';
import StepThree from './SignUpFolder/StepThree';
import StepFour from './SignUpFolder/StepFour';
import StepFive from './SignUpFolder/StepFive';
import StepSix from './SignUpFolder/StepSix';

const SignUpForm = ({ setSignUpForm,setIsSigninOpen }) => {
  const [currentState, setCurrentState] = useState(0);
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState("");
  const [emailOtp, setEmailOtp] = useState("");
  const [message, setMessage] = useState("");
  const [captchaImage, setCaptchaImage] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [aadharOtp, setAadharOtp] = useState("");
  const [sessionId, setSessionId] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [stepForeLoading, setStepForeLoading] = useState(false);
  const [fromProcess, setFormProcess] = useState(false);
  const [refreshProcess, setRefreshProcess] = useState(false);
  const [token,setToken] = useState();
  
  const [timer, setTimer] = useState(5);
  const [timerVisible, setTimerVisible] = useState(false);
  let LIMIT = 0

  const CURRENT_STATE = 'currentState';
  const MOBILE_STATE = 'mobileState';
  const EMAIL_STATE = 'emailState';
  const SESSION_STATE = 'sessionState';
  const TIMER_LIMIT = 30;
  const myTimer = "";
  useEffect(() => {
    if (localStorage.getItem(CURRENT_STATE)) {
      setCurrentState(localStorage.getItem(CURRENT_STATE));
    }
    if (localStorage.getItem(MOBILE_STATE)) {
      setMobile(localStorage.getItem(MOBILE_STATE));
    }
    if (localStorage.getItem(EMAIL_STATE)) {
      setEmail(localStorage.getItem(EMAIL_STATE));
    }

    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'));
    }

  }, [])

  useEffect(()=>{
  fetch('http://54.161.84.81:8000/user-auth/email-otp/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        'email': email,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if(response.message === "OTP sent")
        {
          
        }
        console.log(response)
      })
      .catch((error) => {
        console.error('Error:', error);     
      });
  },[token])



  const sendOtp = () => {
    setFormProcess(true)
    fetch('http://54.161.84.81:8000/user-auth/otp/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "number": mobile
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message == "") {
          setMessage(data.error[0]);
        } else {
          setMessage("");
          localStorage.setItem(CURRENT_STATE, 1);
          localStorage.setItem(MOBILE_STATE, mobile);
          setCurrentState(1);
          otpTimer();
          setFormProcess(false)
        }
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
        setFormProcess(false);
      });
  }

  const changeMobileNumber = () => {
    localStorage.setItem(CURRENT_STATE, 0);
    setCurrentState(0);
    setTimer(TIMER_LIMIT);
    setTimerVisible(true);
    setOtp("")
  }

  const verifyOtp = () => {
    setFormProcess(true);
    fetch('http://54.161.84.81:8000/user-auth/otp/verify/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "number": mobile,
        "otp": otp
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message == "") {
          setMessage(data.error[0]);
        } else {
          setMessage("");
          localStorage.setItem(CURRENT_STATE, 2);
          setCurrentState(2);
        }
        setFormProcess(false)
      })
      .catch((error) => {
        console.error('Error:', error);
        setFormProcess(false)
      });
  }


  const signUpUser = () => {
    setFormProcess(true);
    fetch('http://54.161.84.81:8000/user-auth/register/user/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'number': mobile,
        'first_name': firstName,
        'last_name': lastName,
        'email': email,
        'password': password,
        'profile_image': profile
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.message === "User registered") {
          userLogin()
        }

        if(response.message === "User already registered"){
          setMessage(response.message)
          setFormProcess(false);
        }
        console.log(response)
      })
      .catch((error) => {
        console.error('Error:', error);
        setFormProcess(false);
      });

    //setCurrentState(3);
    //localStorage.setItem(CURRENT_STATE, 3);
  }
  
  const userLogin = () => {
    fetch('http://54.161.84.81:8000/user-auth/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'username': mobile,
        'password': password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if(response.access){
          localStorage.setItem('token',response.access);
          localStorage.setItem('id',response.id);
          localStorage.setItem(EMAIL_STATE,email);
          localStorage.setItem('username',response.user_name);
          setToken(response.access);
          setCurrentState(3);
          localStorage.setItem(CURRENT_STATE, 3);
          sendEMailOtp(response.access);
        }
        console.log(response)
        setFormProcess(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setFormProcess(false);
      });
}

const sendEMailOtp = (newToken) => {
  let otpToken="";
  if(token){
    otpToken = token;
  }else{
    otpToken = newToken;
  }
  console.log(token);
  setMessage("");
  otpTimer();
  setTimerVisible(true);
  fetch('http://54.161.84.81:8000/user-auth/email-otp/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${otpToken}`,
      },
      body: JSON.stringify({
        'email': email,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if(response.message === "OTP sent")
        {
          
        }
        console.log(response)
      })
      .catch((error) => {
        console.error('Error:', error);     
      });
}

const verifyEmailOtp = () => {
  setMessage("");
  setFormProcess(true);
  fetch('http://54.161.84.81:8000/user-auth/email-otp/verify/', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body:JSON.stringify({
      "email":email,
      "otp":emailOtp
    })
  })
    .then((response) => response.json())
    .then((response) => {
      if(response.message === "OTP Verfied"){
        createAadharSession(token);
      }
      
      if(response.message === ""){
        setMessage(response.error[0]);
      }
      console.log(response.error[0])
      setFormProcess(false)
    })
    .catch((error) => {
      console.error('Error:', error);
      setFormProcess(false);
    });
  
}

const createAadharSession = (token) => {
  setFormProcess(true);
  fetch('http://54.161.84.81:8000/user-auth/aadhar/session/', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.decentroTxnId) {
        setSessionId(response.decentroTxnId);
        setCaptchaImage(`data:image/png;base64,${response.data.captchaImage}`);
        localStorage.setItem(SESSION_STATE, response.decentroTxnId);
        setCurrentState(4);
        setStepForeLoading(false);
      }
      console.log(response)
      setFormProcess(false)
    })
    .catch((error) => {
      console.error('Error:', error);
      setFormProcess(false);
    });
}

const refreshCaptcha = () => {
  setRefreshProcess(true)
  fetch('http://54.161.84.81:8000/user-auth/aadhar/reload-captcha/', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "initiation_transaction_id": sessionId
    })
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.decentroTxnId) {
        setCaptchaImage(`data:image/png;base64,${response.data.captchaImage}`);
      }
      console.log(response)
      setRefreshProcess(false);
    })
    .catch((error) => {
      console.error('Error:', error);
      setRefreshProcess(false)
    });
}

const sendAdharOtp = () => {
  setFormProcess(true);
  fetch('http://54.161.84.81:8000/user-auth/aadhar/send-otp/', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "initiation_transaction_id": sessionId,
      "aadhaar_number": aadhaar,
      "captcha": captcha,
    })
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.status === "SUCCESS") {
        setCurrentState(5);
        setSuccessMessage(response.message);
        setMessage("")
      }

      if (response.status === "FAILURE") {
        setMessage(response.message)
      }

      console.log(response)
      setFormProcess(false);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

const verifyAadharOtp = () => {
  setFormProcess(true);
  fetch('http://54.161.84.81:8000/user-auth/aadhar/check-otp/', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "initiation_transaction_id": sessionId,
      "otp": aadharOtp
    })
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.status === "FAILURE") {
        setSuccessMessage("");
        setMessage(response.message)
      }

      if (response.status === "SUCCESS") {
        setSuccessMessage(response.message);
        setTimeout(() => {
          setSuccessMessage("");
          localStorage.setItem(CURRENT_STATE, 0);
          setCurrentState(0);
          setMobile("");
          setEmail("");
          setFirstName("");
          setLastName("")
          setOtp("");
          setEmailOtp("");
          setAadharOtp("");
          setPassword("");
          setIsSigninOpen(false);
        }, 3000)

      }

      console.log(response)
      setFormProcess(false);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

const resend = () => {
  setRefreshProcess(true);
  setMessage();
  fetch('http://54.161.84.81:8000/user-auth/otp/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "number": mobile
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.message == "") {
        setMessage(data.error[0]);
      } else {
        setRefreshProcess(false)
        otpTimer();
      }
      console.log(data);
    })
    .catch((error) => {
      console.error('Error:', error);
      setFormProcess(false);
    });

}

const otpTimer = () => {
  var LIMIT = TIMER_LIMIT;
  setTimer(TIMER_LIMIT)
  setTimerVisible(true);
  var myTimer = setInterval(() => {
    setTimer((prev) => prev - 1)
    LIMIT = LIMIT - 1;
    if (LIMIT == -1) {
      setTimerVisible(false);
      clearInterval(myTimer);
    }
  }, 1000);
}

return (
  <div className='w-[70%]'>

    {
      currentState == 0 ?
        <StepOne
          setSignUpForm={setSignUpForm}
          mobile={mobile}
          setMobile={setMobile}
          sendOtp={sendOtp}
          fromProcess={fromProcess}
          message={message} />
        :
        currentState == 1 ?
          <StepTwo
            setSignUpForm={setSignUpForm}
            otp={otp}
            setOtp={setOtp}
            timerVisible={timerVisible}
            timer={timer}
            message={message}
            verifyOtp={verifyOtp}
            resend={resend}
            fromProcess={fromProcess}
            refreshProcess={refreshProcess}
            changeMobileNumber={changeMobileNumber} />
          :
          currentState == 2 ?
            <StepThree
              setSignUpForm={setSignUpForm}
              firstName={firstName}
              setFirstName={setFirstName}
              lastName={lastName}
              setLastName={setLastName}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              profile={profile}
              setProfile={setProfile}
              fromProcess={fromProcess}
              message={message}
              signUpUser={signUpUser} />
            :
            currentState == 3 ?
              <StepFour
                setSignUpForm={setSignUpForm}
                emailOtp={emailOtp}
                setEmailOtp={setEmailOtp}
                fromProcess={fromProcess}
                sendEMailOtp={sendEMailOtp}
                timerVisible={timerVisible}
                timer={timer}
                message={message}
                verifyEmailOtp={verifyEmailOtp}
              />
              :
              currentState === 4 ?
                <StepFive
                  setSignUpForm={setSignUpForm}
                  aadhaar={aadhaar}
                  setAadhaar={setAadhaar}
                  captchaImage={captchaImage}
                  refreshCaptcha={refreshCaptcha}
                  captcha={captcha}
                  sendAdharOtp={sendAdharOtp}
                  message={message}
                  setCaptcha={setCaptcha}
                  fromProcess={fromProcess}
                  refreshProcess={refreshProcess}
                />
                :
                currentState === 5 ?
                  <StepSix
                    setSignUpForm={setSignUpForm}
                    aadharOtp={aadharOtp}
                    setAadhaar={setAadhaar}
                    setAadharOtp={setAadharOtp}
                    createAadharSession={createAadharSession}
                    setMessage={setMessage}
                    token={token}
                    verifyAadharOtp={verifyAadharOtp}
                    message={message}
                    successMessage={successMessage}
                    resend={resend}
                    timerVisible={timerVisible}
                    timer={timer}
                    fromProcess={fromProcess}
                  />
                  :
                  <></>
    }


    {
      stepForeLoading ? <>
        <p className=' text-3xl justify-center ml-[50%] mt-10'>
          <i className='fa fa-refresh animate-[wiggle_2s_linear_infinite]'></i>
        </p>
      </> : ""
    }

  </div>
)
}

export default SignUpForm;
