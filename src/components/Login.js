import React, { useState, useRef } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { auth } from '../utils/firebase';

const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true);
  const [errorMessage, setErrorMessage]=useState(null);
  const email=useRef(null);
  const password=useRef(null);
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);
  }
  const handleButtonClick=()=>{
    //validate the form
    const message =checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if(message) return;
      //Sign In and Sign Up
    if(!isSignInForm){
      //Sign up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
    // ..
  });
    }
    else{
      // Sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage);
  });
    }
    // console.log(message);
    // console.log(email.current.value);
    // console.log(password.current.value);
  }
  return (
    <div>
    <Header/>
    <div className='absolute'>
    <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='login background'/>
    </div>
    {/* login/signup form */}
    <form onSubmit={(e)=>e.preventDefault()}className='absolute p-8 bg-black w-3/12 flex justify-center flex-col mx-auto right-0 left-0 my-36 text-white rounded-md bg-opacity-80'>
    <h1 className='font-bold text-3xl py-4 '>{isSignInForm ? 'Sign In' : "Sign Up"}</h1>
      {!isSignInForm && <input type='text' placeholder='Full Name' className='p-3 my-3 w-full bg-gray-700'/>}
      <input ref={email} type='text' placeholder='Email Address' className={`p-3 my-3 w-full bg-gray-700 ${errorMessage === 'Email Id is not valid' ? 'border-red-500 text-red-500 border-solid border-2' : ''}`}/>
      <input ref={password} type='password' placeholder='Password' className={`p-3 my-3 w-full bg-gray-700 ${errorMessage === 'Password is not valid' ? 'border-red-500 text-red-500 border-solid border-2' : ''}`}/>
      <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
      <button className='p-4 my-6 bg-red-700 w-full rounded-md' onClick={handleButtonClick}>{isSignInForm ? 'Sign In' : "Sign Up"}</button>
      <div className='flex'>
      <p className='inline'>{isSignInForm ? 'New to Netflix?' : "Already a member?"} </p>
      <p className='inline ml-2 underline cursor-pointer font-bold' onClick={toggleSignInForm}> {isSignInForm ? 'Sign Up' : "Sign In"} now.</p>
      </div>

    </form>
    </div>
  )
}

export default Login;