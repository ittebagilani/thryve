"use client";

import { TrendingUp, Globe, Palette, MessageSquare, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    icon: <TrendingUp size={40} />,
    title: "Digital Marketing",
    description: "Develop and execute data-driven campaigns that increase visibility and drive conversions.",
  },
  {
    icon: <Globe size={40} />,
    title: "Brand Strategy",
    description: "Create a compelling and cohesive brand identity that resonates with your target audience.",
  },
  {
    icon: <Palette size={40} />,
    title: "Web Design",
    description: "Design and develop responsive,user-friendly websites that convert visitors into customers.",
  },
  {
    icon: <MessageSquare size={40} />,
    title: "Content Creation",
    description: "Produce engaging content that tells your story and connects with your audience.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-6 bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-slate-900 to-rose-500 mx-auto mb-6"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative group rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
                <div className="relative bg-white rounded-xl h-full">
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-rose-500/10 to-transparent rounded-bl-full"></div>

                  <div className="p-8">
                    <div className="relative mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-slate-100 group-hover:bg-rose-50 transition-colors duration-300">
                      <motion.div
                        className="text-slate-900 group-hover:text-rose-500 transition-colors duration-300"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {service.icon}
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-rose-500 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 mb-6">{service.description}</p>
                    <Link
                      href="/services"
                      className="inline-flex items-center text-slate-900 font-medium group-hover:text-rose-500 transition-colors duration-300"
                    >
                      <span className="mr-1">Learn More</span>
                      <motion.div
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronRight size={16} />
                      </motion.div>
                    </Link>
                  </div>

                  {/* Bottom border accent */}
                  <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-slate-900 to-rose-500 transition-all duration-300 absolute bottom-0 left-0"></div>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;