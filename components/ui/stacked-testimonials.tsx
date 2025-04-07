"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";

const StackedCardTestimonials = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="bg-white py-24 px-4 lg:px-8 grid items-center grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 overflow-hidden">
      <div className="p-4">
        <h3 className="text-5xl font-semibold">What our customers think</h3>
        <p className="text-slate-500 my-4">
          Don&apos;t just take our word for it. Here&apos;s what our clients
          have to say about working with us.
        </p>
        <SelectBtns
          numTracks={testimonials.length}
          setSelected={setSelected}
          selected={selected}
        />
      </div>
      <Cards
        testimonials={testimonials}
        setSelected={setSelected}
        selected={selected}
      />
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
    <div className="flex gap-1 mt-8">
      {Array.from(Array(numTracks).keys()).map((n) => {
        return (
          <button
            key={n}
            onClick={() => setSelected(n)}
            className="h-1.5 w-full bg-slate-300 relative"
          >
            {selected === n ? (
              <motion.span
                className="absolute top-0 left-0 bottom-0 bg-slate-950"
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
                  setSelected(selected === numTracks - 1 ? 0 : selected + 1);
                }}
              />
            ) : (
              <span
                className="absolute top-0 left-0 bottom-0 bg-slate-950"
                style={{
                  width: selected > n ? "100%" : "0%",
                }}
              />
            )}
          </button>
        );
      })}
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
    <div className="p-4 relative h-[450px] lg:h-[500px] shadow-xl">
      {testimonials.map((t, i) => {
        return (
          <Card
            {...t}
            key={i}
            position={i}
            selected={selected}
            setSelected={setSelected}
          />
        );
      })}
    </div>
  );
};

const Card = ({
  description,
  name,
  position,
  selected,
  setSelected,
}: Testimonial & {
  position: number;
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}) => {
  const scale = position <= selected ? 1 : 1 + 0.015 * (position - selected);
  const offset = position <= selected ? 0 : 95 + (position - selected) * 3;
  const background = position % 2 ? "black" : "white";
  const color = position % 2 ? "white" : "black";

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
      className="absolute top-0 left-0 w-full min-h-full p-8 lg:p-12 cursor-pointer flex flex-col justify-between"
    >
      <p className="text-lg lg:text-xl font-light italic my-8">
        "{description}"
      </p>
      <div>
        <span className="block font-semibold text-lg">{name}</span>
      </div>
    </motion.div>
  );
};

export default StackedCardTestimonials;

interface Testimonial {
  name: string;
  description: string;
}

const testimonials = [
  {
    description:
      "Partnering with Thryve was the best decision for our business. Their marketing expertise and website development services gave us a sleek, high-performing site that has increased our conversions significantly. Highly recommend!",
    name: "Jason Carter, FitCore Athletics",
  },
  {
    description:
      "Thryve completely transformed our brand identity! From logo design to marketing strategy, they helped us create a cohesive and powerful brand that truly stands out. We've seen incredible engagement and growth since working with them!",
    name: "Sarah Mitchell, Glow SkinCare",
  },
  {
    description:
      "Thryve connected us with the perfect influencers for our brand sponsorship campaign. The collaborations felt natural, and the results were outstanding! Our reach and sales have grown beyond expectations!",
    name: "Emily Roberts, Urban Wear Co",
  },
];
