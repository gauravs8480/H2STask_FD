import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import { header } from "../assets";
import gsap from "gsap";
import {
  RiInstagramLine,
  RiTwitterFill,
  RiArrowDownLine,
} from "react-icons/ri";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".subheader", { y: 50, opacity: 0, duration: 1 });
      gsap.from(".main-heading", {
        y: 50,
        opacity: 0,
        delay: 0.5,
        duration: 1,
      });
      gsap.from(".scroll-down", { y: 50, opacity: 0, delay: 1, duration: 1 });
      gsap.from(".socials-left", {
        x: -50,
        opacity: 0,
        delay: 1.5,
        duration: 1,
      });
      gsap.from(".nav-right", { x: 50, opacity: 0, delay: 1.5, duration: 1 });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative w-full min-h-screen lg:h-[1100px] 3xl:h-[1500px]  4xl:h-[2000px] isolate overflow-hidden scroll-smooth"
    >
      {/* Background Layer */}
      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <div className="w-full h-full bg-[radial-gradient(rgba(255,255,255,0.1),#0a1e27e6)] absolute" />
        <img
          src={header}
          alt="Hero Background"
          className="w-full h-full object-cover object-center md:mt-0"
        />
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-transparent to-[#0a1e27] z-0" />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Left Socials Box */}
      <div className="socials-left absolute lg:left-8 xl:left-20 top-150 3xl:top-125 4xl:top-205  lg:top-180  xl:top-107 -translate-y-1/2 sm:flex flex-col items-center justify-between text-white  w-16 h-auto md:h-[220px] lg:h-[250px] 3xl:h-[300px] 4xl:h-[400px] py-6 md:py-8 lg:py-10 3xl:py-14 px-1">
        <span className="rotate-90 text-lg md:text-xl 4xl:text-3xl  font-medium tracking-[2px] whitespace-nowrap">
          Follow us
        </span>
        <div className="flex   md:flex-col gap-4 md:gap-6 4xl:gap-16  lg:gap-8">
          <a href="#" className="text-lg md:text-xl 4xl:text-4xl">
            <RiInstagramLine />
          </a>
          <a href="#" className="text-lg md:text-xl 4xl:text-4xl">
            <RiTwitterFill />
          </a>
        </div>
      </div>

      {/* Right Section Nav */}
      <div className="nav-right absolute right-20 top-90  xl:top-95 3xl:top-110  4xl:top-185 -translate-y-1/2 hidden lg:flex flex-col items-end text-white">
        <div className="relative pr-6 flex flex-col items-end gap-6 text-xl 4xl:text-4xl 4xl:gap-12 font-medium">
          <span className="relative z-10">Start</span>
          <span>01</span>
          <span>02</span>
          <span>03</span>
          <div className="absolute top-0 right-0 w-[3px] h-full bg-white/10" />
          <div className="absolute top-0 right-0 w-[3px] h-[40px] bg-white/60" />
        </div>
      </div>

      {/* Hero Text Content */}
      <div className="flex items-center justify-center px-4 mt-35 3xl:mt-50 4xl:mt-100">
        <div className="max-w-[950px] text-white text-center lg:text-left md:space-y-4 3xl:space-y-6">
          <h3
            className="subheader relative mr-0 lg:pl-20   text-center md:text-center lg:text-left text-base md:text-xl font-semibold tracking-[2px] text-[#e9c675]
            before:absolute before:left-1/2 before:-translate-x-1/2 md:before:left-1/2 md:before:-translate-x-1/2 lg:before:left-0 lg:before:translate-x-0 before:top-[0.72em] before:w-0 md:before:w-20 md:before:hidden lg:before:block lg:before:w-16 before:h-[2px] before:bg-[#e9c675]
            md:before:top-1/2 md:before:-translate-y-1/2"
          >
            A HIKING GUIDE
          </h3>
          <h1 className="main-heading font-playfair text-4xl sm:text-5xl   lg:text-7xl  leading-tight font-semibold">
            Be Prepared For The Mountains And Beyond!
          </h1>

          {/* Scroll Down Button */}
          <a
            href="#about"
            className="scroll-down cursor-pointer flex items-center justify-center  lg:justify-start gap-2"
          >
            <span className="text-lg  4xl:text-2xl lowercase">scroll down</span>
            <RiArrowDownLine />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
