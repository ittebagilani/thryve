import { MapPin, Phone, Mail } from "lucide-react"; // Using Facebook icon as a placeholder for TikTok
import { SiInstagram, SiTiktok } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {/* Address */}
          <div>
            <div className="flex justify-center items-center space-x-2">
              <MapPin size={20} className="text-white" />
              <h4 className="text-lg font-semibold">Address</h4>
            </div>
            <p className="mt-2 text-sm">Milton, Ontario</p>
          </div>

          {/* Phone */}
          <div>
            <div className="flex justify-center items-center space-x-2">
              <Phone size={20} className="text-white" />
              <h4 className="text-lg font-semibold">Phone</h4>
            </div>
            <p className="mt-2 text-sm">647-887-7586</p>
          </div>

          {/* Email */}
          <div>
            <div className="flex justify-center items-center space-x-2">
              <Mail size={20} className="text-white" />
              <h4 className="text-lg font-semibold">Email</h4>
            </div>
            <p className="mt-2 text-sm break-all">thryve.co2025@gmail.com</p>
          </div>

          {/* Connect */}
          <div>
            <div className="flex justify-center items-center space-x-2">
              <h4 className="text-lg font-semibold">Connect</h4>
            </div>
            <div className="flex justify-center space-x-4 mt-2">
              <a
                href="https://instagram.com"
                className="text-white hover:text-gray-600 transition-colors"
              >
                <SiInstagram size={20} />
              </a>
              <a
                href="https://tiktok.com"
                className="text-white hover:text-gray-600 transition-colors"
              >
                <SiTiktok size={20} /> 
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;