import React from "react";
import bannerImg from "../assets/banner.png";
import Typewriter from "typewriter-effect";
import Lottie from "lottie-react";
import sushiAnimation from "../assets/53947-sushi.json";

const Banner = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 p-10 ">
      <div className="flex items-center text-5xl lg:text-7xl justify-center font-[imported]">
        <Typewriter
          options={{
            strings: [
              "Experience the art of sushi",
              "Fresh fish expertly crafted",
              "Sushi that's simply irresistible",
              "Where every roll is a work of art",
              "Discover the flavors of Japan",
            ],
            autoStart: true,
            loop: true,
          }}
        />
        <Lottie animationData={sushiAnimation} loop={true} />
      </div>
      <div className="">
        <img src={bannerImg} className="" alt="A Sushi Banner" />
      </div>
    </div>
  );
};

export default Banner;
