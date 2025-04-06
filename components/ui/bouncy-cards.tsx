import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Globe, Palette, MessageSquare } from "lucide-react";

const services = [
  {
    icon: <TrendingUp size={40} />,
    title: "Digital Marketing",
    description:
      "Develop and execute data-driven campaigns that increase visibility and drive conversions.",
  },
  {
    icon: <Globe size={40} />,
    title: "Brand Strategy",
    description:
      "Create a compelling and cohesive brand identity that resonates with your target audience.",
  },
  {
    icon: <Palette size={40} />,
    title: "Web Design",
    description:
      "Design and develop responsive, user-friendly websites that convert visitors into customers.",
  },
  {
    icon: <MessageSquare size={40} />,
    title: "Content Creation",
    description:
      "Produce engaging content that tells your story and connects with your audience.",
  },
];

export const BouncyCardsFeatures = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 text-slate-800">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8"></div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4">
          <div className="flex flex-col items-center">
            {services.find((s) => s.title === "Digital Marketing")?.icon}
            <CardTitle>Digital Marketing</CardTitle>
          </div>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-slate-950 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-slate-50">
              {services.find((s) => s.title === "Digital Marketing")?.description}
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8">
          <div className="flex flex-col items-center">
            {services.find((s) => s.title === "Web Design")?.icon}
            <CardTitle>Website Design</CardTitle>
          </div>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-slate-950 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-slate-50">
              {services.find((s) => s.title === "Web Design")?.description}
            </span>
          </div>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8">
          <div className="flex flex-col items-center">
            {services.find((s) => s.title === "Brand Strategy")?.icon}
            <CardTitle>Brand Strategy</CardTitle>
          </div>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-slate-950 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-slate-50">
              {services.find((s) => s.title === "Brand Strategy")?.description}
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4">
          <div className="flex flex-col items-center">
            {services.find((s) => s.title === "Content Creation")?.icon}
            <CardTitle>Content Creation</CardTitle>
          </div>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-slate-950 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-slate-50">
              {services.find((s) => s.title === "Content Creation")?.description}
            </span>
          </div>
        </BounceCard>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="whitespace-nowrap rounded-lg bg-slate-900 px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-slate-700"
        >
          Learn more
        </motion.button>
      </div>
    </section>
  );
};

const BounceCard = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
  );
};