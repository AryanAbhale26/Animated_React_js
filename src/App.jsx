import React from "react";
import Header from "./Components/Header";
import Landing from "./Components/Landing";
import Marque from "./Components/Marque";
import About from "./Components/About";
import Eyes from "./Components/Eyes";
import Featuresd from "./Components/Featuresd";
import Rating_ from "./Components/Rating_";
import Fotter from "./Components/Fotter";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className="w-full  text-white  bg-zinc-900 min-h-screen">
        <Header />
        <Landing />
        <Marque />
        <About />
        <Eyes />
        <Featuresd />
        <Rating_ />
        <Fotter />
      </div>
    </>
  );
}

export default App;
