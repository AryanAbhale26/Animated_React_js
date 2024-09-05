import { motion } from "framer-motion";
import React from "react";

function Marque() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="w-full py-20 bg-[#004d43] rounded-tr-3xl rounded-tl-3xl m-0 p-0"
    >
      <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap font-bold overflow-hidden">
        {Array(3)
          .fill("WE ARE OCHI")
          .map((text, index) => (
            <motion.h1
              key={index}
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
              className="text-[12vw] leading-none pr-5"
            >
              {text}
            </motion.h1>
          ))}
      </div>
    </div>
  );
}

export default Marque;
