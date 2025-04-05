"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { LampDemo } from "./ui/lamp";
import { Spotlight } from "./ui/spotlight";
import { Button } from "./ui/button";

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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div ref={heroRef} className="w-full">
          <h1 className="text-4xl md:text-5xl lg:text-9xl font-bold leading-tight mb-6 text-white flex items-center justify-center -mt-40">
            thryve
          </h1>
          <p className="text-lg md:text-xl text-slate-500 mb-10 flex items-center justify-center">
            scale. connect. thryve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 flex items-center justify-center">
            <Link href="/services" className="">
              <Button className="px-6 py-2 bg-slate-300 text-slate-950 rounded-none hover:bg-slate-700 transition-all flex items-center justify-center md:justify-start gap-2 cursor-pointer">
                Our Services <ArrowRight size={16} />
              </Button>
            </Link>
            <Link
              href="/contact"
            >
              <Button className="px-6 py-2 border border-slate-100 bg-transparent text-slate-100 rounded-none hover:bg-slate-700 transition-all flex items-center justify-center md:justify-start gap-2 cursor-pointer">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
