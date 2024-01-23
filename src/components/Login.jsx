// Login.jsx
import React from 'react';
import Heading1 from './Heading1';
import Heading2 from './Heading2';
import InputField from './InputField';
import SolidButton from './Button/SolidButton';
import { Link } from 'react-router-dom';
import signupImage from "../assets/images/Signup-image.jpeg"

const Login = () => {
  return (
    <div className="login-container w-100 bg-white h-dvh rounded-lg dark:bg-gray-800 dark:border-gray-700">
      <div className='min-h-52 flex'>
        <img className="rounded-t-lg" src={signupImage} alt="SignupImage" />
      </div>
      <div className='px-5'>
      <div className=" text-center">
        <Heading1 text="Welcome back!" className="text-secondary" />
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Sign in to access your account</p>
      </div>

      <div className='flex px-2  items-center'>
      <Heading2 text="Login your account" className="text-secondary"/>
      </div>

      <div className="signup-form ">
        <form className='w-100 px-2'>
          <InputField type="text" className="border-b border-primary" placeholder="Email or User Name" />
          <InputField type="password" className="border-b border-primary" placeholder="Password" />
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-primary" />
              <label className="ml-2 text-gray-700 dark:text-gray-400">Remember me</label>
            </div>
            <Link to="/forgotPage" className="text-primary hover:underline">Forgot your password?</Link>
          </div>
          <SolidButton type="submit" text="Login" />
        </form>
      </div>

      <div className="opacity-section px-5">
        <p className="text-gray-700 dark:text-gray-400 text-align-center">Or sign in with</p>
        {/* Add Google login button */}
        {/* <GoogleLoginButton /> */}
        {/* Add Facebook login button */}
        {/* <FacebookLoginButton /> */}
      </div>

      <div className="group-signup px-5">
        <p className="text-gray-700 dark:text-gray-400">Don't have an account?</p>
        <Link to="/signup"><SolidButton type="submit" text="Sign up" /></Link>
      </div>
    </div>
    </div>
  );
};

export default Login;
