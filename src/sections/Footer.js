import React from 'react';
import Lottie from "lottie-react";
import happyEating from '../assets/happy-eating.json'

const Footer = () => {
 return (
   <div className="h-1/4 w-1/4 m-auto">
     <h1 className='font-[imported] font-bold text-5xl text-red-600'>Enjoy The Sushi</h1>
     <Lottie animationData={happyEating} loop={true} />
   </div>
 );
};

export default Footer;