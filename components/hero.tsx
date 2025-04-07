"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Spotlight } from "./ui/spotlight";
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${
          scrollPosition * 0.3
        }px)`;
        heroRef.current.style.opacity = `${1 - scrollPosition * 0.002}`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden h-screen bg-slate-950">
      {/* <LampDemo /> */}
      <Spotlight />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div ref={heroRef} className="w-full">
          <h1 className="text-4xl md:text-5xl lg:text-9xl font-bold leading-tight mb-6 text-white flex items-center justify-center -mt-40">
            thryve
          </h1>
          <p className="text-lg md:text-xl text-slate-500 mb-10 flex items-center justify-center">
            scale. connect. thryve.
          </p>
          <div className="flex-col sm:flex-row gap-4 flex items-center justify-center">
            <Link href="/services" className="">
              {/* <Button className="px-6 py-2 bg-slate-300 text-slate-950 rounded-none hover:bg-slate-700 transition-all flex items-center justify-center md:justify-start gap-2 cursor-pointer">
                Our Services <ArrowRight size={16} />
              </Button> */}
              <RoundedSlideButton />
            </Link>
            <Link href="/contact">
              {/* <Button className="px-6 py-2 border border-slate-100 bg-transparent text-slate-100 rounded-none hover:bg-slate-700 transition-all flex items-center justify-center md:justify-start gap-2 cursor-pointer">
                Get in Touch
              </Button> */}
              <button className="group flex h-10 items-center gap-2 bg-neutral-200 pl-3 pr-4 transition-all duration-300 ease-in-out hover:bg-white hover:pl-2 hover:text-black cursor-pointer active:bg-neutral-700">
                <span className="rounded-full bg-black p-1 text-sm transition-colors duration-300 group-hover:bg-white">
                  <FiArrowRight className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-black group-active:-rotate-45" />
                </span>
                <span>get in touch</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const RoundedSlideButton = () => {
  return (
    <button
      className={`
        relative z-0 flex items-center gap-2 overflow-hidden border-[1px] w-[130px] justify-center
        border-slate-700 px-4 py-2 font-semibold
        text-slate-300 transition-all duration-500 cursor-pointer
        
        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%] before:bg-white
        before:transition-transform before:duration-1000
        before:content-[""]

        hover:scale-105 hover:text-neutral-900
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-95`}
    >
      {/* <FiLogIn /> */}
      <span>our services</span>
    </button>
  );
};

export default Hero;
