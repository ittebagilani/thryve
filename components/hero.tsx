"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100vh] w-full overflow-hidden bg-slate-950 text-white"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-navy-900 to-slate-950 opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0,rgba(59,130,246,0)_50%)]" />
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,rgba(30,64,175,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,64,175,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container relative mx-auto flex h-screen flex-col items-center justify-center px-4 md:px-6">
        <motion.div
          style={{ opacity, scale, y }}
          className="flex w-full max-w-5xl flex-col items-center"
        >
          {/* Floating elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute left-[10%] top-[20%] h-24 w-24 rounded-full bg-blue-500/10 blur-xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute right-[15%] top-[30%] h-32 w-32 rounded-full bg-indigo-500/10 blur-xl"
          />

          {/* Main content */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 rounded-full border border-blue-300/30 bg-blue-900/10 px-4 py-1.5 text-sm font-medium text-blue-100"
          >
            Elevate Your Brand Presence
          </motion.div> */}

          <div className="relative mb-8 flex flex-col items-center space-y-2 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex flex-col items-center space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0"
            >
              {/* <span className="text-4xl font-bold text-blue-400 sm:text-5xl md:text-6xl">scale,</span>
              {/* <span className="hidden text-4xl font-bold text-slate-500 sm:inline sm:text-5xl md:text-6xl">•</span> */}
              {/* <span className="text-4xl font-bold text-indigo-400 sm:text-5xl md:text-6xl">connect</span> */}
              {/* <span className="hidden text-4xl font-bold text-slate-500 sm:inline sm:text-5xl md:text-6xl">•</span> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              <span className="text-7xl font-extrabold tracking-tight text-transparent sm:text-7xl md:text-[150px]">
                <span className="bg-gradient-to-t from-cyan-100 to-blue-400 bg-clip-text text-transparent">
                  thryve
                </span>
              </span>
              {/* <div className="absolute -right-4 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white sm:-right-6 sm:-top-3 sm:h-8 sm:w-8 sm:text-sm">
                ™
              </div> */}
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-10 max-w-2xl text-center text-lg text-slate-300 md:text-xl"
          >
            we transform ambitious brands through strategic marketing, creative
            excellence, and data-driven solutions that deliver measurable
            growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
          >
            <Button
              size="lg"
              className="group bg-blue-600 hover:bg-blue-700 cursor-pointer"
              onClick={() => {
                window.location.href = "/contact";
              }}
            >
              start your journey
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-800 bg-blue-900/20 text-blue-100 hover:bg-blue-900/30 hover:text-blue-50 cursor-pointer"
              onClick={() => {
                window.location.href = "/services";
              }}
            >
              explore services
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 grid w-full grid-cols-2 gap-4 border-t border-blue-900/30 pt-8 md:grid-cols-4"
          >
            {[
              { value: "20+", label: "team members" },
              { value: "10+", label: "clients" },
              { value: "94%", label: "client retention" },
              { value: "100%", label: "client satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="flex flex-col items-center justify-center space-y-1 text-center"
              >
                <span className="text-2xl font-bold text-blue-400 md:text-3xl">
                  {stat.value}
                </span>
                <span className="text-xs text-slate-400 md:text-sm">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center space-y-2"
        >
          <span className="text-xs text-slate-400">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          >
            <ChevronDown className="h-5 w-5 text-blue-400" />
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  );
}
