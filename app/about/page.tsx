'use client';

import React, { useEffect } from 'react';
import PageLayout from '@/components/page-layout';
import { Users, Lightbulb, Target, TrendingUp } from 'lucide-react';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const team = [
    {
      name: "Alex Morgan",
      position: "Founder & CEO",
      image: "https://randomuser.me/api/portraits/men/76.jpg",
      bio: "With over 15 years of experience in marketing, Alex founded thryve to help businesses navigate the ever-changing digital landscape."
    },
    {
      name: "Jessica Chen",
      position: "Creative Director",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Jessica brings over a decade of design expertise, creating compelling visual identities that elevate brands."
    },
    {
      name: "Marcus Johnson",
      position: "Marketing Strategist",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Marcus specializes in developing data-driven marketing strategies that deliver measurable results."
    },
    {
      name: "Sophia Rodriguez",
      position: "Content Manager",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      bio: "Sophia crafts engaging stories that connect brands with their audiences across multiple platforms."
    }
  ];

  const values = [
    {
      icon: <Lightbulb size={40} className="text-thryve-light-teal" />,
      title: "Innovation",
      description: "We constantly explore new ideas and technologies to keep our clients ahead of the curve."
    },
    {
      icon: <Target size={40} className="text-thryve-light-teal" />,
      title: "Results-Driven",
      description: "We focus on delivering measurable outcomes that contribute to our clients' business goals."
    },
    {
      icon: <Users size={40} className="text-thryve-light-teal" />,
      title: "Collaboration",
      description: "We believe in working closely with our clients to create solutions that truly represent their vision."
    },
    {
      icon: <TrendingUp size={40} className="text-thryve-light-teal" />,
      title: "Growth",
      description: "We're committed to continuous improvement, both for our clients and ourselves."
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-thryve-gray pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About thryve</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-thryve-teal to-thryve-light-teal mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              We&apos;re a team of digital enthusiasts dedicated to helping businesses grow through strategic marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-thryve-teal to-thryve-light-teal mb-6"></div>
              <p className="text-gray-700 mb-4">
                Founded in 2015, thryve began with a simple mission: to help businesses navigate and succeed in the ever-evolving digital landscape. We saw too many companies struggling with outdated marketing approaches that didn&apos;t deliver results.
              </p>
              <p className="text-gray-700 mb-4">
                What started as a small team of three has grown into a full-service marketing agency, but our core values remain the same. We believe in transparent communication, data-driven strategies, and building lasting relationships with our clients.
              </p>
              <p className="text-gray-700">
                Today, we&apos;re proud to have helped hundreds of businesses across various industries grow their digital presence and achieve their marketing goals. Our approach combines creativity with analytics to develop strategies that not only look good but also deliver measurable results.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Team collaboration" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-thryve-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-thryve-teal to-thryve-light-teal mx-auto mb-6"></div>
            <p className="text-lg max-w-2xl mx-auto text-gray-700">
              These core principles guide everything we do at thryve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-thryve-teal to-thryve-light-teal mx-auto mb-6"></div>
            <p className="text-lg max-w-2xl mx-auto text-gray-700">
              We&apos;re a diverse group of creative thinkers, strategists, and digital experts passionate about marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-thryve-light-teal mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutPage;