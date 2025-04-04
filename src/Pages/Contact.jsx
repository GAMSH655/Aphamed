import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaAddressCard } from "react-icons/fa";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email.");
    } else {
      setError("");
      alert("Form submitted successfully!");
    }
  };

  return (
    <div id="contact" className="p-8">
      <div className="flex flex-col md:flex-row gap-8 mb-10">
        {/* Form Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-colorPrimary">Just Say Hello</h2>
          {error && (
            <div className="bg-red-200 text-red-800 p-3 mb-4 rounded">
              <strong>Warning!</strong> {error}
            </div>
          )}
          <form onSubmit={validateEmail} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 shadow-lg rounded border border-gray-200 focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 shadow-lg rounded border border-gray-200 focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Your Subject"
              className="w-full p-3 shadow-lg rounded border border-gray-200 focus:outline-none focus:border-blue-500"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 shadow-lg rounded border border-gray-200 focus:outline-none focus:border-blue-500 h-32"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-colorPrimary">Contact Info</h2>
          <p className="text-gray-400 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-normal capitalize flex items-center text-colorPrimary">
                <FaEnvelope className="mr-2" /> Email
              </h3>
              <p className="text-gray-400">Phone: +234 909 164 3613</p>
              <p className="text-gray-400">Email: Aphamed0@gmail.com</p>
            </div>
            <div>
              <h3 className="text-lg font-normal capitalize flex items-center text-colorPrimary">
                <FaPhone className="mr-2" /> Phone
              </h3>
              <p className="text-gray-400">+1 876-369-9009</p>
              <p className="text-gray-400">+1 213-519-1786</p>
            </div>
            <div>
              <h3 className="text-lg font-normal capitalize flex items-center text-colorPrimary">
                <FaAddressCard className="mr-2" /> Address
              </h3>
              <p className="text-gray-400">
                2661 High Meadow Lane Bear Creek, Olancha, KY 93544
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;