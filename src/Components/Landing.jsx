import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import LocomotiveScroll from "locomotive-scroll";

function Landing() {
  const containerRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      multiplier: 1,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} data-scroll-container>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-0.5"
        className="bg-zinc-900 h-screen w-full pt-1 pb-[50rem]"
      >
        <div className="textstructure mt-52 px-20 ">
          <div className="masker font-semibold">
            {["WE CREATE ", "EYE-OPENING", "PRESENTATION"].map(
              (item, index) => (
                <div className="w-fit flex items-center" key={index}>
                  {index === 1 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "9vw" }}
                      transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                      className="w-[9vw] h-[5vw]  top-[7px] relative rounded-md"
                    >
                      <img
                        src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                        className="w-full h-full object-cover rounded-md"
                        alt=""
                      />
                    </motion.div>
                  )}
                  <h1 className="text-[7.5vw] leading-none tracking-tighter">
                    {item}
                  </h1>
                </div>
              )
            )}
          </div>
          <div className="border-t-[1px] border-zinc-800 mt-32">
            <div className="flex justify-between items-center mt-3">
              {[
                "For public and private companies",
                "From the first pitch to IPO",
              ].map((item, index) => (
                <h1 key={index}>{item}</h1>
              ))}
              <div className="BUTTONS gap-2 flex">
                <button className="border text-white border-white-500 rounded-full p-2 hover:bg-white hover:text-black duration-[.3s]">
                  Start the project
                </button>
                <button className="border border-white-500 rounded-full p-[1.5vh] hover:bg-white hover:text-black duration-[.3s]">
                  <GoArrowUpRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
