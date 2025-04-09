"use client"

import { type Dispatch, type SetStateAction, useState } from "react"
import { motion } from "framer-motion"
import { FiStar } from "react-icons/fi"

const StackedCardTestimonials = () => {
  const [selected, setSelected] = useState(0)

  return (
    <section className="mx-auto flex max-w-7xl items-center justify-center overflow-hidden bg-slate-950 px-4 py-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8">
      <div className="p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-5xl font-semibold text-white">What our customers think</h3>
          <p className="my-4 text-slate-300">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <div className="mb-2 flex items-center justify-between">
            <p className="text-sm font-medium text-slate-400">
              <span className="text-indigo-400">{selected + 1}</span> of {testimonials.length}
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setSelected(selected === 0 ? testimonials.length - 1 : selected - 1)}
                className="rounded-full border border-slate-700 p-2 text-slate-400 transition-colors hover:border-indigo-500 hover:text-indigo-400 cursor-pointer"
                aria-label="Previous testimonial"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={() => setSelected(selected === testimonials.length - 1 ? 0 : selected + 1)}
                className="rounded-full border border-slate-700 p-2 text-slate-400 transition-colors hover:border-indigo-500 hover:text-indigo-400 cursor-pointer"
                aria-label="Next testimonial"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
          <SelectBtns numTracks={testimonials.length} setSelected={setSelected} selected={selected} />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Cards testimonials={testimonials} setSelected={setSelected} selected={selected} />
      </motion.div>
    </section>
  )
}

const SelectBtns = ({
  numTracks,
  setSelected,
  selected,
}: {
  numTracks: number
  setSelected: Dispatch<SetStateAction<number>>
  selected: number
}) => {
  return (
    <div className="flex gap-1">
      {Array.from(Array(numTracks).keys()).map((n) => {
        return (
          <button key={n} onClick={() => setSelected(n)} className="relative h-1.5 w-full bg-slate-700">
            {selected === n ? (
              <motion.span
                className="absolute bottom-0 left-0 top-0 bg-blue-500"
                initial={{
                  width: "0%",
                }}
                animate={{
                  width: "100%",
                }}
                transition={{
                  duration: 5,
                }}
                onAnimationComplete={() => {
                  setSelected(selected === numTracks - 1 ? 0 : selected + 1)
                }}
              />
            ) : (
              <span
                className="absolute bottom-0 left-0 top-0 bg-slate-700"
                style={{
                  width: selected > n ? "100%" : "0%",
                }}
              />
            )}
          </button>
        )
      })}
    </div>
  )
}

const Cards = ({
  testimonials,
  selected,
  setSelected,
}: {
  testimonials: Testimonial[]
  selected: number
  setSelected: Dispatch<SetStateAction<number>>
}) => {
  return (
    <div className="relative h-[500px] p-4 lg:h-[550px]">
      {testimonials.map((t, i) => {
        return (
          <Card
            key={i}
            description={t.description}
            name={t.name}
            jobTitle={t.jobTitle}
            company={t.company}
            rating={t.rating}
            position={i}
            selected={selected}
            setSelected={setSelected}
          />
        )
      })}
    </div>
  )
}

const Card = ({
  description,
  name,
  jobTitle,
  company,
  rating,
  position,
  selected,
  setSelected,
}: {
  description: string
  name: string
  jobTitle?: string
  company?: string
  rating: number
  position: number
  selected: number
  setSelected: Dispatch<SetStateAction<number>>
}) => {
  const scale = position <= selected ? 1 : 1 + 0.015 * (position - selected)
  const offset = position <= selected ? 0 : 95 + (position - selected) * 3
  const background = position % 2 ? "rgb(15, 23, 42)" : "rgb(226, 232, 240)" // slate-950 and slate-200
  const color = position % 2 ? "white" : "rgb(15, 23, 42)" // white and slate-950

  return (
    <motion.div
      initial={false}
      style={{
        zIndex: position,
        transformOrigin: "left bottom",
        background,
        color,
      }}
      animate={{
        x: `${offset}%`,
        scale,
      }}
      whileHover={{
        translateX: position === selected ? 0 : -3,
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      onClick={() => setSelected(position)}
      className="absolute left-0 top-0 flex min-h-full w-full cursor-pointer flex-col justify-between rounded-2xl p-8 shadow-xl lg:p-12"
    >
      <div>
        {/* Quote mark */}
        <div className="mb-4 text-4xl opacity-20">&ldquo;</div>

        {/* Rating stars */}
        <div className="mb-4 flex">
          {Array.from({ length: rating }).map((_, i) => (
            <FiStar key={i} className="h-5 w-5 text-amber-300 fill-amber-500" />
          ))}
        </div>

        <p className="my-8 text-lg font-light italic lg:text-xl">&quot;{description}&quot;</p>
      </div>

      <div>
        <span className="block text-lg font-semibold">{name}</span>
        {jobTitle && company && (
          <span className="text-sm opacity-80">
            {jobTitle} at {company}
          </span>
        )}
      </div>
    </motion.div>
  )
}

export default StackedCardTestimonials

interface Testimonial {
  name: string
  description: string
  jobTitle?: string
  company?: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    description:
      "Partnering with Thryve was the best decision for our business. Their marketing expertise and website development services gave us a sleek, high-performing site that has increased our conversions significantly. Highly recommend!",
    name: "Jason Carter",
    jobTitle: "CEO",
    company: "FitCore Athletics",
    rating: 5,
  },
  {
    description:
      "Thryve completely transformed our brand identity! From logo design to marketing strategy, they helped us create a cohesive and powerful brand that truly stands out. We've seen incredible engagement and growth since working with them!",
    name: "Sarah Mitchell",
    jobTitle: "Marketing Director",
    company: "Glow SkinCare",
    rating: 5,
  },
  {
    description:
      "Thryve connected us with the perfect influencers for our brand sponsorship campaign. The collaborations felt natural, and the results were outstanding! Our reach and sales have grown beyond expectations!",
    name: "Emily Roberts",
    jobTitle: "Founder",
    company: "Urban Wear Co",
    rating: 4,
  },
]
