import Link from "next/link"
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">thryve</h3>
            <p className="mb-4 text-sm text-gray-300">
              Empowering brands to thrive in the digital landscape through innovative marketing strategies and creative
              solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-gray-300 hover:text-rose-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-gray-300 hover:text-rose-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-300 hover:text-rose-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-rose-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/" className="hover:text-rose-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-rose-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-rose-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-rose-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/services" className="hover:text-rose-500 transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-rose-500 transition-colors">
                  Brand Strategy
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-rose-500 transition-colors">
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-rose-500 transition-colors">
                  Content Creation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 flex-shrink-0 mt-1" />
                <span>123 Marketing Street, Digital City, 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span>hello@thryveagency.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} thryve Marketing Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer