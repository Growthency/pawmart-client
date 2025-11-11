import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import { Typewriter, Cursor } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div className="h-[550px] rounded-lg mb-16">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="w-full h-full rounded-lg"
      >
        <SwiperSlide className="relative">
          <img
            src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
            className="w-full h-full object-cover"
          />

          <div className="absolute flex items-center h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] top-0 left-0">
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
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img
            src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"
            className="w-full h-full object-cover"
          />

          <div className="absolute flex items-center h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] top-0 left-0">
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
        </SwiperSlide>

        <SwiperSlide className="relative">
          <img
            src="https://images.pexels.com/photos/3299905/pexels-photo-3299905.jpeg"
            className="w-full h-full object-cover"
          />

          <div className="absolute flex items-center h-full w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] top-0 left-0">
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
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
