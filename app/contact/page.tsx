"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle, XCircle } from "lucide-react"
import PageLayout from "@/components/page-layout"




const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    return newErrors
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }

    // Reset submit status when user starts typing again
    if (submitStatus !== "idle") {
      setSubmitStatus("idle")
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setSubmitStatus("error")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    // Simulate form submission
    setTimeout(() => {
      // Simulate successful submission (you can add error handling in real implementation)
      const success = Math.random() > 0.2 // 80% chance of success for demo purposes

      if (success) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
      }

      setIsSubmitting(false)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <Mail size={24} className="text-white/80" />,
      title: "Email",
      info: "thryve.co2025@gmail.com",
      link: "mailto:thryve.co2025@gmail.com",
    },
    {
      icon: <Phone size={24} className="text-white/80" />,
      title: "Phone",
      info: "647-887-7586",
      link: "tel:+6478877586",
    },
    {
      icon: <MapPin size={24} className="text-white/80" />,
      title: "Office",
      info: "Milton, Ontario",
      link: "https://maps.google.com",
    },
  ]

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-thryve-gray pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-t from-cyan-100 to-blue-400 text-transparent bg-clip-text md:text-8xl leading-tight">
              contact us
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-thryve-teal to-thryve-light-teal mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-white">
              Have a question or ready to start your next project? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
              {/* <p className="text-white mb-8">
                reach out to us through the contact form or use the information below to get in touch directly. we&apos;ll get back to you as soon as possible.
              </p> */}

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1 mr-4">{item.icon}</div>
                    <div>
                      <h3 className="font-medium text-white/50">{item.title}</h3>
                      <a href={item.link} className="text-white hover:text-thryve-teal">
                        {item.info}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-lg shadow-xl">
                <h2 className="text-3xl font-semibold mb-6 text-white">Send Us a Message</h2>

                {/* Success Message */}
                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-900/30 border border-green-500 rounded-md flex items-center gap-3 text-green-300">
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <p>Your message has been sent successfully! We&apos;ll get back to you soon.</p>
                  </div>
                )}

                {/* Error Message (for form-wide errors) */}
                {submitStatus === "error" && Object.keys(errors).length === 0 && (
                  <div className="mb-6 p-4 bg-red-900/30 border border-red-500 rounded-md flex items-center gap-3 text-red-300">
                    <XCircle className="h-5 w-5 flex-shrink-0" />
                    <p>There was a problem sending your message. Please try again later.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-white/70">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className={`bg-transparent border-0 border-b-2 border-slate-700 focus:border-b-2 focus:border-slate-700 focus:ring-0 w-full p-3 text-white placeholder:text-slate-400 transition-colors ${
                          errors.name ? "border-red-500 focus:border-red-500" : ""
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-white/70">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`bg-transparent border-0 border-b-2 border-slate-700 focus:border-b-2 focus:border-slate-700 focus:ring-0 w-full p-3 text-white placeholder:text-slate-400 transition-colors ${
                          errors.email ? "border-red-500 focus:border-red-500" : ""
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label htmlFor="phone" className="block mb-2 text-sm font-medium text-white/70">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-transparent border-0 border-b-2 border-slate-700 focus:border-b-2 focus:border-slate-700 focus:ring-0 w-full p-3 text-white placeholder:text-slate-400 transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    {/* Company Field */}
                    <div>
                      <label htmlFor="company" className="block mb-2 text-sm font-medium text-white/70">
                        Company Name
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-transparent border-0 border-b-2 border-slate-700 focus:border-b-2 focus:border-slate-700 focus:ring-0 w-full p-3 text-white placeholder:text-slate-400 transition-colors"
                        placeholder="Your Company"
                      />
                    </div>

                    {/* Subject Field */}
                    <div className="sm:col-span-2">
                      <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white/70">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="bg-slate-800 border-0 border-b-2 border-slate-700 focus:border-b-2 focus:border-slate-700 focus:ring-0 w-full p-3 text-white rounded-t-md"
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Project Request">Project Request</option>
                        <option value="Partnership Opportunity">Partnership Opportunity</option>
                        <option value="Service Question">Service Question</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Message Field */}
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block mb-2 text-sm font-medium text-white/70">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className={`bg-transparent border-0 border-b-2 border-slate-700 focus:border-b-2 focus:border-slate-700 focus:ring-0 w-full p-3 text-white placeholder:text-slate-400 transition-colors resize-none ${
                          errors.message ? "border-red-500 focus:border-red-500" : ""
                        }`}
                        placeholder="Tell us about your project or inquiry..."
                      />
                      {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`bg-gradient-to-r from-thryve-teal to-thryve-light-teal hover:from-thryve-light-teal hover:to-thryve-teal text-white font-medium py-3 px-6 rounded-md transition-all duration-300 w-full flex items-center justify-center gap-2 ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full bg-thryve-gray relative overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3060361555!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1617996020619!5m2!1sen!2sca"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Office Location"
        ></iframe>
      </section>
    </PageLayout>
  )
}

export default ContactPage
