import Link from "next/link";
import { FlipWords } from "./ui/flip-words";

const words = ["scale", "connect", "thryve"];

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-slate-950"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-4xl mx-auto font-normal mb-10">
          <span className="text-neutral-400">It&apos;s time to</span>

          <FlipWords words={words} className="text-white font-medium" />
        </div>
        <Link href={"/contact"} className="mb-8">
          <button
            className={`
            relative z-0 items-center gap-2 overflow-hidden rounded-lg border-[1px] 
            border-blue-500 px-4 py-2 font-semibold
            text-blue-200 transition-all duration-500 cursor-pointer
            
            before:absolute before:inset-0
            before:-z-10 before:translate-x-[150%]
            before:translate-y-[150%] before:scale-[2.5]
            before:rounded-[100%] before:bg-blue-500
            flex mx-auto
            before:transition-transform before:duration-1000
            before:content-[""]
            
            hover:scale-105
            hover:before:translate-x-[0%]
            hover:before:translate-y-[0%]
            active:scale-95`}
          >
            <span>get started</span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
