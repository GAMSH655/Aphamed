import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold text-white">Aphamed Printing</h2>
          <p className="mt-2 text-gray-400">
            Delivering high-quality printing solutions with precision and excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:text-blue-400 transition">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Services</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Pricing</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <p className="mt-2 text-gray-400">Email: support@aphamed.com</p>
          <p className="text-gray-400">Phone: +1 234 567 890</p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition"><FaFacebook size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition"><FaTwitter size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition"><FaInstagram size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition"><FaLinkedin size={24} /></a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Aphamed Printing. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
