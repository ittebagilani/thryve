"use client";

import React, { useEffect } from "react";
import {
  ArrowRight,
  TrendingUp,
  Globe,
  Palette,
  MessageSquare,
  Search,
  BarChart,
  LineChart,
  Users,
} from "lucide-react";
import PageLayout from "@/components/page-layout";
import Link from "next/link";

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <TrendingUp size={40} className="text-thryve-teal" />,
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies that connect with your target audience across all relevant online platforms to drive growth and engagement.",
      benefits: [
        "Increased brand visibility and recognition",
        "Higher quality traffic to your website",
        "Improved conversion rates",
        "Better ROI on marketing spend",
      ],
    },
    {
      icon: <Globe size={40} className="text-thryve-teal" />,
      title: "Brand Strategy",
      description:
        "Develop a compelling brand identity that differentiates you from competitors and resonates with your target audience to build lasting customer relationships.",
      benefits: [
        "Cohesive brand messaging across all touchpoints",
        "Stronger brand loyalty and recognition",
        "Clear market positioning",
        "Authentic brand storytelling",
      ],
    },
    {
      icon: <Palette size={40} className="text-thryve-teal" />,
      title: "Web Design & Development",
      description:
        "Create responsive, user-friendly websites that not only look amazing but are optimized for conversions and provide seamless user experiences.",
      benefits: [
        "Mobile-responsive, modern design",
        "Improved user experience and engagement",
        "Faster loading speeds",
        "SEO-friendly architecture",
      ],
    },
    {
      icon: <MessageSquare size={40} className="text-thryve-teal" />,
      title: "Content Creation",
      description:
        "Produce engaging, relevant content that tells your story, showcases your expertise, and connects with your audience to drive engagement and conversions.",
      benefits: [
        "Consistent high-quality content",
        "Enhanced brand authority",
        "Improved audience engagement",
        "Higher search engine rankings",
      ],
    },
    {
      icon: <Search size={40} className="text-thryve-teal" />,
      title: "SEO Optimization",
      description:
        "Improve your search engine rankings with data-driven SEO strategies that increase organic traffic and improve your online visibility.",
      benefits: [
        "Higher search engine rankings",
        "Increased organic traffic",
        "Better quality leads",
        "Long-term sustainable results",
      ],
    },
    {
      icon: <BarChart size={40} className="text-thryve-teal" />,
      title: "Social Media Marketing",
      description:
        "Build and maintain a strong social media presence that engages your audience, builds community, and drives business growth.",
      benefits: [
        "Increased brand awareness",
        "Stronger customer relationships",
        "Higher engagement rates",
        "Direct communication with your audience",
      ],
    },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-thryve-gray pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-7xl font-extrabold tracking-tight text-transparent sm:text-7xl md:text-[150px]">
              <span className="bg-gradient-to-t from-cyan-100 to-blue-400 bg-clip-text text-transparent">
                our services
              </span>
            </span>
            <div className="w-20 h-1 bg-gradient-to-r from-thryve-teal to-thryve-light-teal mx-auto mb-6"></div>
            <p className="text-lg max-w-4xl mx-auto text-gray-100">
              comprehensive marketing solutions to help your business
              succeed
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-900 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 text-blue-600">{service.icon}</div>
                <h2 className="text-2xl font-semibold mb-4 text-white">{service.title}</h2>
                <p className="text-white mb-6">{service.description}</p>

                <h3 className="font-semibold text-lg mb-3 text-thryve-teal">
                  Key Benefits:
                </h3>
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <ArrowRight
                        size={16}
                        className="text-thryve-light-teal mt-1 mr-2 flex-shrink-0"
                      />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-thryve-teal py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-white/90">
            Contact us today to discuss how our services can help you achieve
            your marketing goals.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-thryve-teal rounded-md font-semibold hover:bg-opacity-90 transition-all"
          >
            Get Started
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default ServicesPage;
