import React from "react";

function Rating_() {
  return (
    <>
      <div className="card w-full h-screen  flex gap-5 p-20">
        <div className=" container w-1/2 h-[50vh]">
          <div className="w-full h-full bg-[#004D43] rounded-xl ">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              className="w-[20vw] top-1/2 left-1/2 translate-x-[50%]  translate-y-[50%]"
              alt=""
            />
          </div>
        </div>
        <div className=" container w-1/2 h-[50vh] flex gap-5">
          <div className="w-full h-full bg-[#a1abaa] rounded-xl items-center justify-center flex  cursor-pointer">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
              alt=""
            />
          </div>
          <div className="w-full h-full  bg-[#a1abaa] rounded-xl flex justify-center items-center cursor-pointer">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Rating_;
