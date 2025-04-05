import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const Footer = () => {
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold text-white">Aphamed Prints</h2>
          <p className="mt-2 text-gray-400">
            Delivering high-quality printing solutions with precision and excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><NavLink to="/about" className="hover:text-blue-400 transition">About Us</NavLink></li>
            <li><NavLink to="/services" className="hover:text-blue-400 transition">Services</NavLink></li>
            <li><a href="https://drive.google.com/drive/folders/1CoAou0NdC5bKnvCPlQTUU1thQ5VqCX4X" className="hover:text-blue-400 transition">Portfolio</a></li>
            <li><NavLink to="/contact" className="hover:text-blue-400 transition">Contact</NavLink></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <p className="mt-2 text-gray-400">Email: Aphamed0@gmail.com</p>
          <p className="text-gray-400">Phone +234 701 397 2790</p>
          <p className="text-gray-400">WhatsApp: +234 909 164 3613</p>
          <address className="text-gray-400">09 , olaleye street shomolu lagos state , Nigeria</address>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com/share/1Bff6352XN/?mibextid=LQQJ4d" className="text-gray-400 hover:text-colorPrimary transition"><FaFacebook size={24} /></a>
            <a href="https://x.com/certifiedomoal1?s=21" className="text-gray-400 hover:text-colorPrimary      transition"><FaTwitter size={24} /></a>
            <a href="https://www.instagram.com/aphamedprints/profilecard" className="text-gray-400 hover:text-colorPrimary transition"><FaInstagram size={24} /></a>
            <a href="https://www.linkedin.com/in/aphamed-prints-b25a24328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="text-gray-400 hover:text-colorPrimary transition"><FaLinkedin size={24} /></a>
          </div>
        </div>
      
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Gtech. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
