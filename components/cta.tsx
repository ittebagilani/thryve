import React from 'react';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-thryve-teal to-thryve-light-teal opacity-90 z-10"></div>
      
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white opacity-10"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Marketing?</h2>
        <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
          Let's collaborate to create impactful marketing strategies that drive results. We're just one conversation away from helping your business thrive.
        </p>
        <Link 
          href="/contact" 
          className="inline-block px-8 py-3 bg-white text-thryve-teal rounded-md font-semibold hover:bg-opacity-90 transition-all"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default CTASection;