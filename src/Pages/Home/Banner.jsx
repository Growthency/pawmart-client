import React from "react";
import { Typewriter, Cursor } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className="carousel w-full h-[550px] rounded-lg mb-16">
      {/* স্লাইড ১ (কুকুর) */}
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
          className="w-full object-cover"
        />
        <div className="absolute flex items-center h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 w-1/2 pl-12">
            <h2 className="text-5xl font-bold">
              <Typewriter
                words={["Find Your Furry Friend Today!"]}
                loop={1}
                typeSpeed={70}
              />
              <Cursor />
            </h2>
            <p>Because Every Pet Deserves Love and Care.</p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* স্লাইড ২ (বিড়াল) */}
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"
          className="w-full object-cover"
        />
        <div className="absolute flex items-center h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 w-1/2 pl-12">
            <h2 className="text-5xl font-bold">
              <Typewriter
                words={["Adopt, Don’t Shop — Give a Pet a Home."]}
                loop={1}
                typeSpeed={70}
              />
              <Cursor />
            </h2>
            <p>Your new best friend is waiting for you.</p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* স্লাইড ৩ (পোষা প্রাণীর জিনিসপত্র) */}
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://images.pexels.com/photos/3299905/pexels-photo-3299905.jpeg"
          className="w-full object-cover"
        />
        <div className="absolute flex items-center h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 w-1/2 pl-12">
            <h2 className="text-5xl font-bold">
              <Typewriter
                words={["All Pet Supplies in One Place."]}
                loop={1}
                typeSpeed={70}
              />
              <Cursor />
            </h2>
            <p>Get all your pet supplies, food, and toys.</p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
