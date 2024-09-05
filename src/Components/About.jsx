import React from "react";
import { GoArrowUpRight } from "react-icons/go";

function About() {
  return (
    <>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-0.5"
        className="w-full p-20 bg-[#cdea68] text-black text-[3vw] tracking-tighter rounded-tr-3xl rounded-tl-3xl"
      >
        <div className="text pl-10 pr-[15rem] pb-10">
          <h2>
            Ochi is a strategic presentation agency for forward-thinking
            businesses that need to raise funds, sell prod­ucts, ex­plain
            com­plex ideas, and hire great peo­ple.
          </h2>
        </div>
        <div className="w-full border-t-[2px] border-[#738146] pt-20 flex justify-between p-20">
          <div className="approach flex flex-col pl-10 gap-5">
            <h1>Our approach:</h1>
            <div className="butt text-xl flex items-center gap-5 bg-black p-3 w-fit rounded-full">
              <button className="text-white p-4 rounded-full">READ MORE</button>
              <button className="border border-white-500 rounded-full p-[1.5vh] text-white hover:bg-white hover:text-black duration-[.3s]">
                <GoArrowUpRight />
              </button>
            </div>
          </div>
          <div className="abpic w-1/2 h-[70vh] bg-red-200 rounded-3xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="src/assets/Homepage-Photo-663x469.jpg"
              alt="Homepage"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
