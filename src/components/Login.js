import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true);
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
    <Header/>
    <div className='absolute'>
    <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='login background'/>
    </div>
    {/* login/signup form */}
    <form className='absolute p-8 bg-black w-3/12 flex justify-center flex-col mx-auto right-0 left-0 my-36 text-white rounded-md bg-opacity-80'>
    <h1 className='font-bold text-3xl py-4 '>{isSignInForm ? 'Sign In' : "Sign Up"}</h1>
      {!isSignInForm && <input type='text' placeholder='Name' className='p-3 my-3 w-full bg-gray-700'/>}
      <input type='text' placeholder='Email Address' className='p-3 my-3 w-full bg-gray-700'/>
      <input type='password' placeholder='Password' className='p-3 my-3 w-full bg-gray-700'/>
      <button className='p-4 my-6 bg-red-700 w-full rounded-md'>{isSignInForm ? 'Sign In' : "Sign Up"}</button>
      <div className='flex'>
      <p className='inline'>{isSignInForm ? 'New to Netflix?' : "Already a member?"} </p>
      <p className='inline ml-2 underline cursor-pointer font-bold' onClick={toggleSignInForm}> {isSignInForm ? 'Sign Up' : "Sign In"} now.</p>
      </div>

    </form>
    </div>
  )
}

export default Login;