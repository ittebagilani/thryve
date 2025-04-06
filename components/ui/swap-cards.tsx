"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { IconType } from "react-icons";
import { FiDollarSign, FiEye, FiPlay, FiSearch } from "react-icons/fi";

type FeatureType = {
  id: number;
  callout: string;
  title: string;
  description: string;
  contentPosition: "l" | "r";
  Icon: IconType;
  imageSrc?: string;
};

interface SwapCardsProps {
  features?: FeatureType[];
}

const defaultFeatures: FeatureType[] = [
  {
    id: 1,
    callout: "get noticed",
    title: "digital marketing",
    description:
      "Develop and execute data-driven campaigns that increase visibility and drive conversions",
    contentPosition: "r",
    Icon: FiEye,
    imageSrc: "/marketing.jpeg",
  },
  {
    id: 2,
    callout: "find people",
    title: "brand strategy",
    description:
      "Create a compelling and cohesive brand identity that resonates with your target audience.",
    contentPosition: "l",
    Icon: FiSearch,
    imageSrc: "/branding.jpeg",
  },
  {
    id: 3,
    callout: "go online",
    title: "web design",
    description:
      "Design and develop responsive, user-friendly websites that convert visitors into customers.",
    contentPosition: "r",
    Icon: FiPlay,
    imageSrc: "/webdesign.jpeg",
  },
  {
    id: 4,
    callout: "absolute cinema",
    title: "content creation",
    description:
      "Produce engaging content that tells your story and connects with your audience.",
    contentPosition: "l",
    Icon: FiDollarSign,
    imageSrc: "/content.jpeg",
  },
];

const SwapCards = ({ features = defaultFeatures }: SwapCardsProps) => {
  const [featureInView, setFeatureInView] = useState<FeatureType>(features[0]);

  return (
    <section className="relative mx-auto max-w-7xl">
      <SlidingFeatureDisplay featureInView={featureInView} />
      <div className="-mt-[100vh] hidden md:block" />
      {features.map((s) => (
        <Content
          key={s.id}
          featureInView={s}
          setFeatureInView={setFeatureInView}
          {...s}
        />
      ))}
    </section>
  );
};

const SlidingFeatureDisplay = ({
  featureInView,
}: {
  featureInView: FeatureType;
}) => {
  return (
    <div
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-end" : "flex-start",
      }}
      className="pointer-events-none sticky top-0 z-10 hidden h-screen w-full items-center justify-center md:flex"
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
        className="h-fit w-3/5" // Removed p-8 since no card padding is needed
      >
        <ExampleFeature featureInView={featureInView} />
      </motion.div>
    </div>
  );
};

const Content = ({
  setFeatureInView,
  featureInView,
  ...props
}: {
  setFeatureInView: Dispatch<SetStateAction<FeatureType>>;
  featureInView: FeatureType;
} & FeatureType) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-150px",
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1], {
    clamp: true,
  });

  useEffect(() => {
    if (isInView) {
      setFeatureInView(featureInView);
    }
  }, [isInView, featureInView, setFeatureInView]);

  return (
    <section
      ref={ref}
      className="relative z-0 flex h-fit md:h-screen"
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-start" : "flex-end",
      }}
    >
      <div className="grid h-full w-full place-content-center px-4 py-12 md:w-2/5 md:px-8 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ opacity: { opacity } as any }}
          className="md:opacity-[var(--opacity)]"
        >
          <span className="rounded-full bg-indigo-600 px-2 py-1.5 text-xs font-medium text-white">
            {featureInView.callout}
          </span>
          <p className="my-3 text-5xl font-bold">{featureInView.title}</p>
          <p className="text-slate-600">{featureInView.description}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="mt-8 block md:hidden"
        >
          <ExampleFeature featureInView={featureInView} />
        </motion.div>
      </div>
    </section>
  );
};

const ExampleFeature = ({ featureInView }: { featureInView: FeatureType }) => {
  return featureInView.imageSrc ? (
    <img
      src={featureInView.imageSrc}
      alt={featureInView.title}
      className="h-96 w-full object-cover" // Fixed height to match original card size
    />
  ) : (
    <span className="text-9xl text-slate-700">
      <featureInView.Icon />
    </span>
  );
};

export default SwapCards;