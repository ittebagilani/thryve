"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import type { IconType } from "react-icons"
import { FiArrowRight, FiDollarSign, FiEye, FiPlay, FiSearch } from "react-icons/fi"

type FeatureType = {
  id: number
  callout: string
  title: string
  description: string
  contentPosition: "l" | "r"
  Icon: IconType
  imageSrc?: string
  benefits: string[]
  stats: { value: string; label: string }[]
  cta: string
}

interface ServicesProps {
  features?: FeatureType[]
}

const defaultFeatures: FeatureType[] = [
  {
    id: 1,
    callout: "get noticed",
    title: "digital marketing",
    description: "Develop and execute data-driven campaigns that increase visibility and drive conversions",
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
      { value: "300%", label: "Average ROI" },
      { value: "65%", label: "Traffic increase" },
    ],
    cta: "Boost your visibility",
  },
  {
    id: 2,
    callout: "find people",
    title: "brand strategy",
    description: "Create a compelling and cohesive brand identity that resonates with your target audience.",
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
      { value: "87%", label: "Brand recognition" },
      { value: "3.5x", label: "Customer loyalty" },
    ],
    cta: "Define your brand",
  },
  {
    id: 3,
    callout: "go online",
    title: "web design",
    description: "Design and develop responsive, user-friendly websites that convert visitors into customers.",
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
      { value: "45%", label: "Conversion increase" },
      { value: "1.8s", label: "Avg. load time" },
    ],
    cta: "Create your website",
  },
  {
    id: 4,
    callout: "absolute cinema",
    title: "content creation",
    description: "Produce engaging content that tells your story and connects with your audience.",
    contentPosition: "l",
    Icon: FiDollarSign,
    imageSrc: "/content.jpeg",
    benefits: ["Video production", "Photography", "Copywriting", "Graphic design", "Animation and motion graphics"],
    stats: [
      { value: "4.2x", label: "Engagement rate" },
      { value: "78%", label: "Content retention" },
    ],
    cta: "Tell your story",
  },
]

const Services = ({ features = defaultFeatures }: ServicesProps) => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" })

  return (
    <div ref={sectionRef} className="relative bg-slate-950 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="mx-auto mb-16 max-w-3xl text-center"
      >
          {/* <span className="mb-3 inline-block rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800">
            Our Services
          </span> */}
        <h2 className="mb-4 text-4xl font-bold text-slate-300 md:text-6xl">how we help you thryve</h2>
        <p className="mx-auto max-w-2xl text-lg text-slate-400">
          We offer comprehensive solutions to help your business grow, connect with your audience, and thrive in today&apos;s
          competitive market.
        </p>
      </motion.div>

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {features.map((feature, index) => (
          <FeatureSection key={feature.id} feature={feature} index={index} />
        ))}
      </div>
    </div>
  )
}

const FeatureSection = ({ feature, index }: { feature: FeatureType; index: number }) => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

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
                <span className="mb-2 inline-block rounded-full bg-indigo-600/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {feature.callout}
                </span>
              </div>
            </>
          ) : (
            <div className="flex h-[400px] items-center justify-center bg-indigo-100 md:h-[500px]">
              <span className="text-9xl text-indigo-700">
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
        <p className="mb-3 text-4xl font-bold text-indigo-100 md:text-5xl">{feature.title}</p>
        <p className="mb-6 text-slate-300">{feature.description}</p>

        {/* Benefits list */}
        <div className="mb-8">
          <h3 className="mb-3 text-lg font-semibold text-indigo-200">What we offer:</h3>
          <ul className="space-y-2">
            {feature.benefits.map((benefit, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
                className="flex items-start text-indigo-100"
              >
                <span className="mr-2 mt-1 text-indigo-300">•</span>
                <span>{benefit}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Stats */}
        <div className="mb-8 flex space-x-8">
          {feature.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 }}
              className="flex flex-col"
            >
              <span className="text-3xl font-bold text-blue-100">{stat.value}</span>
              <span className="text-sm text-slate-500">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.9 }}
          className="flex items-center rounded-lg bg-indigo-600 px-5 py-3 text-white transition-all hover:bg-indigo-700"
        >
          {feature.cta}
          <FiArrowRight className="ml-2" />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Services
