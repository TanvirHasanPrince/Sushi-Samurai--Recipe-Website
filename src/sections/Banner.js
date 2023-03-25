import React from 'react';
import bannerImg from '../assets/banner.png';
const Banner = () => {
 return (
   <div className="flex ">
     <div></div>
     <div>
       <img src={bannerImg} className="" alt="A Sushi Banner" />
     </div>
   </div>
 );
};

export default Banner;