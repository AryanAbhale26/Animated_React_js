import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div className="eye w-full h-screen overflow-hidden">
        <div
          data-scroll
          data-scroll-speed="-.3"
          className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32vw] flex justify-between">
            {/* Left Eye */}
            <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex justify-center items-center">
              <div className="w-[70%] h-[70%] rounded-full bg-zinc-900 relative flex justify-center items-center">
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-5"
                >
                  <div className="w-5 h-5 rounded-full bg-zinc-100"></div>
                </div>
              </div>
            </div>

            {/* Right Eye */}
            <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex justify-center items-center">
              <div className="w-[70%] h-[70%] rounded-full bg-zinc-900 relative flex justify-center items-center">
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-5"
                >
                  <div className="w-5 h-5 rounded-full bg-zinc-100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Eyes;
