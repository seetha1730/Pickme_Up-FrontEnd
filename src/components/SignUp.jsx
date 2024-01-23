// Signup.jsx
import React from 'react';
import Heading1 from './Heading1';
import Heading2 from './Heading2';
import InputField from './InputField';
import SolidButton from './Button/SolidButton';
import { Link } from 'react-router-dom';
import signupImage from "../assets/images/Signup-image.jpeg"
import ButtonWithBorder from './Button/ButtonWidthBorder';
import UserIcon from './UserIcon';

const SignUp = () => {
  return (
    <div className="login-container min-h-screen bg-white  rounded-lg dark:bg-gray-800 dark:border-gray-700">
      <div className='min-h-52 flex'>
        <img className="rounded-t-lg" src={signupImage} alt="SignupImage" />
      </div>
<div className='px-5'>
      <div className="p-5 text-center">
        <Heading1 text="Sign Up" className="text-secondary" />
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Join our ride-sharing community now</p>
      </div>
      <div className='flex px-2 justify-between items-center'>
      <Heading2 text="Create an account" className="text-secondary"/>
      <UserIcon class="w-50"/>
      </div>

      <div className="signup-form ">
        <form className='w-100 px-2'>
        <InputField type="text" className="border-b border-primary" placeholder="User Name" />
        <InputField type="text" className="border-b border-primary" placeholder="First Name" />
        <InputField type="text" className="border-b border-primary" placeholder="Last Name" />
        <InputField type="email" className="border-b border-primary" placeholder="Email" />
        <InputField type="password" className="border-b border-primary" placeholder="Password" />          
        <div className=' my-6'>
         <SolidButton type="submit" text="Sign Up" />
         </div>
        </form>
        <div className='mb-2 px-2 flex w-full'>
        <Link className="w-full" to="/login"><ButtonWithBorder type="button" text="Login" /></Link>

        </div>

      </div>

      </div>

    </div>
  );
};
export default SignUp;