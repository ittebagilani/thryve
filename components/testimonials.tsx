"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechStart",
    quote:
      "Working with thryve has transformed our digital presence. Their strategic approach and creativity helped us reach new audiences and grow our business substantially.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 5,
  },
  {
    name: "Michael Chen",
    position: "Marketing Director, Innovate Inc",
    quote:
      "The team at thryve truly understands modern marketing. They developed a comprehensive strategy that not only increased our visibility but also our conversion rates.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    position: "Founder, EcoFriendly",
    quote:
      "I was impressed by thryve's commitment to understanding our brand values and translating them into effective marketing campaigns that resonated with our eco-conscious audience.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4,
  },
]

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="p-20 bg-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-slate-900 to-rose-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
          </p>
        </div>

        <div className="relative">
          <div className="flex overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`w-full flex-shrink-0 transition-all duration-500 ease-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0 absolute"
                }`}
              >
                <div className="bg-white rounded-lg shadow-xl p-8 md:p-10 max-w-4xl mx-auto">
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="md:mr-8 mb-6 md:mb-0 flex justify-center">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-slate-100"
                      />
                    </div>
                    <div>
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={20}
                            fill={i < testimonial.rating ? "#f43f5e" : "none"}
                            stroke={i < testimonial.rating ? "#f43f5e" : "#e2e8f0"}
                          />
                        ))}
                      </div>
                      <p className="text-lg md:text-xl italic text-slate-500 mb-6">"{testimonial.quote}"</p>
                      <div>
                        <h4 className="font-semibold text-xl">{testimonial.name}</h4>
                        <p className="text-slate-500">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-rose-500" : "bg-gray-300"}`}
                ></span>
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

