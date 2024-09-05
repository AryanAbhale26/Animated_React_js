import React from "react";
import { FaCircle } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

function Featuresd() {
  return (
    <>
      <div className="w-full">
        <div className="w-full p-10 pt-24">
          <h1 className="text-7xl">Featured Projects</h1>
        </div>
        <div className="Cont border-t border-solid">
          <div className="chead p-10 pt-24 flex gap-[50%] justify-start items-center">
            <span className="flex justify-start items-center gap-2 w-fit">
              <FaCircle /> CARDBOARD SPACESHIP
            </span>
            <span className="flex justify-start items-center gap-2 w-fit">
              <FaCircle /> LOSER
            </span>
          </div>
          <div className="cards w-full flex gap-10 p-10">
            {/* First Card */}
            <div className="w-1/2 h-[75vh] overflow-hidden rounded-xl relative flex items-center justify-center transition-transform duration-300 hover:scale-90">
              <div className="w-full h-full rounded-xl overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer"
                  src="src/assets/Frame-3875-663x551.jpg"
                  alt="Card 1"
                />
              </div>
              {/* Centered Text */}
              <h1 className="absolute text-[#CDEA68] text-5xl transition-transform duration-300 hover:text-7xl cursor-pointer">
                Flue
              </h1>
            </div>
            {/* Second Card */}
            <div className="w-1/2 h-[75vh] overflow-hidden rounded-xl z-10 relative flex items-center justify-center transition-transform duration-300 hover:scale-90">
              <div className="w-full h-full rounded-xl overflow-hidden">
                <img
                  src="src/assets/Fyde_Illustration_Crypto_2-663x551.png"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 cursor-pointer"
                  alt="Card 2"
                />
              </div>
              {/* Centered Text */}
              <h1 className="absolute text-[#CDEA68] text-5xl transition-transform duration-300 hover:text-7xl cursor-pointer">
                Flue
              </h1>
            </div>
          </div>
        </div>
        <div className="bt flex items-center justify-center py-10">
          <div className="butt text-xl flex items-center gap-5 bg-black p-3 w-fit rounded-full">
            <button className="text-white p-4 rounded-full">READ MORE</button>
            <button className="border border-white-500 rounded-full p-[1.5vh] text-white hover:bg-white hover:text-black duration-[.3s]">
              <GoArrowUpRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Featuresd;
