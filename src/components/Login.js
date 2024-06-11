import React, { useState } from 'react'

import Header from "./Header"
const Login = () => {
    const[isSignIn,setIsSignIn]=useState(true)
const handleSignIn=()=>{
    setIsSignIn(!isSignIn)
}

  return (
    <>
    <div className="absolute">
        <Header/>
     <img alt="" aria-hidden="true" data-uia="nmhp-card-hero+background+image" src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_small.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" class="default-ltr-cache-1jxs5rh e13sg9vu0"></img>  
       </div>
     <form className='absolute mx-auto right-0 left-0 my-36 p-12 bg-black w-3/12 opacity-85 rounded-lg text-white'>
        <h1 className='text-3xl my-3 font-bold  '>{isSignIn?'Sign In':'Sign Up'}</h1>
       {!isSignIn&& <input className=" w-full rounded-lg my-3 p-3 bg-gray-900 "  type="text" placeHolder="Full Name" required/>}
        <input className=" w-full rounded-lg my-3 p-3 bg-gray-900 "  type="email" placeHolder="Email Address" required/>
        <input  className=" w-full rounded-lg my-3 p-3  bg-gray-900 "type="password" placeHolder="Password" required/>
        <button  className=" w-full rounded-lg my-3 p-3 text-lg font-bold bg-red-700" typeof='submit'>{isSignIn?'Sign In':'Sign Up'}</button>
        <p  className="cursor-pointer"onClick={handleSignIn}>{isSignIn? "New to Netflix? Sign Up Now.":"Already a User.Sign In Now."}</p>
     </form>
      
     </>
  )
}

export default Login