"use client";

import { type Dispatch, type SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

const StackedCardTestimonials = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center justify-center overflow-hidden bg-slate-950 px-4 py-12 lg:grid lg:grid-cols-2 lg:gap-8 lg:py-24 lg:px-8">
      <div className="p-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-6xl font-bold bg-gradient-to-t from-blue-100 to-blue-400 bg-clip-text text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
            our customer's words
          </h3>
          <p className="mt-4 text-sm text-slate-300 sm:text-base md:text-lg">
            don't just take our word for it. here's what our clients have to say about working with us.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 md:mt-8"
        >
          <div className="mb-2 flex items-center justify-between">
            <p className="text-xs font-medium text-slate-400 sm:text-sm">
              <span className="text-indigo-400">{selected + 1}</span> of {testimonials.length}
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setSelected(selected === 0 ? testimonials.length - 1 : selected - 1)}
                className="rounded-full border border-slate-700 p-1.5 text-slate-400 transition-colors hover:border-indigo-500 hover:text-indigo-400 cursor-pointer sm:p-2"
                aria-label="Previous testimonial"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="sm:w-4 sm:h-4"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={() => setSelected(selected === testimonials.length - 1 ? 0 : selected + 1)}
                className="rounded-full border border-slate-700 p-1.5 text-slate-400 transition-colors hover:border-indigo-500 hover:text-indigo-400 cursor-pointer sm:p-2"
                aria-label="Next testimonial"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="sm:w-4 sm:h-4"
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
        className="w-full mt-8 lg:mt-0"
      >
        <Cards testimonials={testimonials} setSelected={setSelected} selected={selected} />
      </motion.div>
    </section>
  );
};

const SelectBtns = ({
  numTracks,
  setSelected,
  selected,
}: {
  numTracks: number;
  setSelected: Dispatch<SetStateAction<number>>;
  selected: number;
}) => {
  return (
    <div className="flex gap-1">
      {Array.from(Array(numTracks).keys()).map((n) => (
        <button key={n} onClick={() => setSelected(n)} className="relative h-1 w-full bg-slate-700 sm:h-1.5">
          {selected === n ? (
            <motion.span
              className="absolute bottom-0 left-0 top-0 bg-blue-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5 }}
              onAnimationComplete={() => {
                setSelected(selected === numTracks - 1 ? 0 : selected + 1);
              }}
            />
          ) : (
            <span
              className="absolute bottom-0 left-0 top-0 bg-slate-700"
              style={{ width: selected > n ? "100%" : "0%" }}
            />
          )}
        </button>
      ))}
    </div>
  );
};

const Cards = ({
  testimonials,
  selected,
  setSelected,
}: {
  testimonials: Testimonial[];
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="relative h-[400px] p-4 sm:h-[450px] md:h-[500px] lg:h-[550px]">
      {testimonials.map((t, i) => (
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
      ))}
    </div>
  );
};

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
  description: string;
  name: string;
  jobTitle?: string;
  company?: string;
  rating: number;
  position: number;
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}) => {
  const scale = position <= selected ? 1 : 1 + 0.015 * (position - selected);
  const offset = position <= selected ? 0 : 85 + (position - selected) * 5; // Adjusted for smaller screens
  const background = "rgb(15, 23, 42)"; // Consistent slate-950 for simplicity
  const color = "white";

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
      className="absolute left-0 top-0 flex min-h-full w-full cursor-pointer flex-col justify-between rounded-2xl p-6 shadow-xl sm:p-8 lg:p-12"
    >
      <div>
        <div className="mb-3 text-3xl opacity-20 sm:text-4xl">“</div>
        <div className="mb-3 flex sm:mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <FiStar key={i} className="h-4 w-4 text-transparent fill-amber-500 sm:h-5 sm:w-5" />
          ))}
        </div>
        <p className="my-6 text-base font-light italic sm:text-lg md:text-xl">"{description}"</p>
      </div>
      <div>
        <span className="block text-base font-semibold sm:text-lg">{name}</span>
        {jobTitle && company && (
          <span className="text-xs opacity-80 sm:text-sm">
            {jobTitle} at {company}
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default StackedCardTestimonials;

interface Testimonial {
  name: string;
  description: string;
  jobTitle?: string;
  company?: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    description:
      "partnering with thryve was the best decision for our business. their marketing expertise and website development services gave us a sleek, high-performing site that has increased our conversions significantly. highly recommend!",
    name: "Jason Carter",
    jobTitle: "CEO",
    company: "FitCore Athletics",
    rating: 5,
  },
  {
    description:
      "thryve completely transformed our brand identity! from logo design to marketing strategy, they helped us create a cohesive and powerful brand that truly stands out. we've seen incredible engagement and growth since working with them!",
    name: "Sarah Mitchell",
    jobTitle: "Marketing Director",
    company: "Glow SkinCare",
    rating: 5,
  },
  {
    description:
      "thryve connected us with the perfect influencers for our brand sponsorship campaign. the collaborations felt natural, and the results were outstanding! our reach and sales have grown beyond expectations!",
    name: "Emily Roberts",
    jobTitle: "Founder",
    company: "Urban Wear Co",
    rating: 4,
  },
];