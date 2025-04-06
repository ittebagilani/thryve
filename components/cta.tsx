import React from "react";
import Link from "next/link";
import { FlipWords } from "./ui/flip-words";
import NeuFollowButton from "./ui/neu-button";

const words = ["scale", "connect", "thryve"];

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-slate-950"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-4xl mx-auto font-normal mb-10">
          <span className="text-neutral-400">
            It&apos;s time to
          </span>

          <FlipWords words={words} className="text-white font-medium"/>
        </div>

        <NeuFollowButton />
      </div>
    </section>
  );
};

export default CTASection;
