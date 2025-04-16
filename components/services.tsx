"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { IconType } from "react-icons";
import {
  FiArrowRight,
  FiDollarSign,
  FiEye,
  FiPlay,
  FiSearch,
} from "react-icons/fi";

type FeatureType = {
  id: number;
  callout: string;
  title: string;
  description: string;
  contentPosition: "l" | "r";
  Icon: IconType;
  imageSrc?: string;
  benefits: string[];
  stats: { value: string; label: string }[];
  cta: string;
};

interface ServicesProps {
  features?: FeatureType[];
}

const defaultFeatures: FeatureType[] = [
  {
    id: 1,
    callout: "get noticed",
    title: "digital marketing",
    description:
      "develop and execute data-driven campaigns that increase visibility and drive conversions",
    contentPosition: "r",
    Icon: FiEye,
    imageSrc: "/marketing.jpeg",
    benefits: [
      "Search engine optimization (SEO)",
      "Pay-per-click advertising (PPC)",
      "Social media marketing",
      "Email marketing campaigns",
      "Analytics and performance tracking",
    ],
    stats: [
      { value: "300%", label: "average ROI" },
      { value: "65%", label: "traffic increase" },
    ],
    cta: "boost your visibility",
  },
  {
    id: 2,
    callout: "find people",
    title: "brand strategy",
    description:
      "create a compelling and cohesive brand identity that resonates with your target audience.",
    contentPosition: "l",
    Icon: FiSearch,
    imageSrc: "/branding.jpeg",
    benefits: [
      "Brand identity development",
      "Market positioning",
      "Competitive analysis",
      "Brand messaging and voice",
      "Visual identity systems",
    ],
    stats: [
      { value: "87%", label: "brand recognition" },
      { value: "3.5x", label: "customer loyalty" },
    ],
    cta: "define your brand",
  },
  {
    id: 3,
    callout: "go online",
    title: "web design",
    description:
      "design and develop responsive, user-friendly websites that convert visitors into customers.",
    contentPosition: "r",
    Icon: FiPlay,
    imageSrc: "/webdesign.jpeg",
    benefits: [
      "Custom website design",
      "E-commerce solutions",
      "Mobile-first approach",
      "UX/UI optimization",
      "Performance and speed enhancements",
    ],
    stats: [
      { value: "45%", label: "conversion increase" },
      { value: "1.8s", label: "avg. load time" },
    ],
    cta: "create your website",
  },
  {
    id: 4,
    callout: "absolute cinema",
    title: "content creation",
    description:
      "produce engaging content that tells your story and connects with your audience.",
    contentPosition: "l",
    Icon: FiDollarSign,
    imageSrc: "/content.jpeg",
    benefits: [
      "Video production",
      "Photography",
      "Copywriting",
      "Graphic design",
      "Animation and motion graphics",
    ],
    stats: [
      { value: "4.2x", label: "engagement rate" },
      { value: "78%", label: "content retention" },
    ],
    cta: "tell your story",
  },
];

const Services = ({ features = defaultFeatures }: ServicesProps) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <div ref={sectionRef} className="relative bg-slate-950 py-16 md:py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mx-auto mb-16 max-w-4xl text-center px-4"
      >
        <h2 className="mb-4 text-5xl sm:text-6xl font-bold bg-gradient-to-t from-cyan-100 to-blue-400 text-transparent bg-clip-text md:text-8xl leading-tight">
          how we help
        </h2>
      </motion.div>

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {features.map((feature, index) => (
          <FeatureSection key={feature.id} feature={feature} index={index} />
        ))}
      </div>
    </div>
  );
};

const FeatureSection = ({
  feature,
  index,
}: {
  feature: FeatureType;
  index: number;
}) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className={`mb-24 flex flex-col items-center gap-8 md:mb-32 md:flex-row md:gap-12 ${
        index % 2 === 1 ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="w-full overflow-hidden rounded-xl shadow-2xl md:w-1/2"
      >
        <div className="relative">
          {feature.imageSrc ? (
            <>
              <img
                src={feature.imageSrc || "/placeholder.svg"}
                alt={feature.title}
                className="h-[400px] w-full object-cover md:h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                {/* Callout removed as in original code */}
              </div>
            </>
          ) : (
            <div className="flex h-[400px] items-center justify-center bg-indigo-100 md:h-[500px]">
              <span className="text-9xl text-blue-700">
                <feature.Icon />
              </span>
            </div>
          )}
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="w-full md:w-1/2"
      >
        <p className="mb-3 text-3xl sm:text-4xl font-bold bg-gradient-to-t from-cyan-100 to-blue-400 bg-clip-text text-transparent md:text-5xl leading-tight tracking-tight break-words hyphens-auto">
          {feature.title}
        </p>
        <p className="mb-6 text-slate-300">{feature.description}</p>

        {/* Benefits list - commented out as in original */}

        {/* Stats */}
        <div className="mb-8 flex flex-wrap gap-8">
          {feature.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 }}
              className="flex flex-col"
            >
              <span className="text-3xl font-bold text-cyan-500">
                {stat.value}
              </span>
              <span className="text-sm text-slate-500">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.9 }}
          className="flex items-center rounded-lg bg-transparent border border-blue-400 cursor-pointer px-5 py-3 text-blue-200 transition-all hover:bg-blue-900/20 hover:text-blue-50"
          onClick={() => {
            window.location.href = "/contact";
          }}
        >
          {feature.cta}
          <FiArrowRight className="ml-2" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Services;