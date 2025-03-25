import React, { useState } from "react";

const faqs = [
        {
          question: "What types of printing services do you offer?",
          answer: "We offer a wide range of printing services, including business cards, brochures, flyers, banners, posters, booklets, custom packaging, large-format printing, and more.",
        },
        {
          question: "Do you offer both digital and offset printing?",
          answer: "Yes, we provide both digital and offset printing services to meet the needs of small and large-scale projects.",
        },
        {
          question: "What industries do you serve?",
          answer: "We serve a variety of industries, including retail, healthcare, education, real estate, hospitality, and more.",
        },
        {
          question: "Do you offer eco-friendly printing options?",
          answer: "Yes, we offer eco-friendly printing options, including recycled paper and soy-based inks, to reduce environmental impact.",
        },
        {
          question: "How do I place an order?",
          answer: "You can place an order online through our website, by email, or by visiting our office. Our team will guide you through the process.",
        },
        {
          question: "Can I request a quote online?",
          answer: "Yes, you can request a free quote by filling out our online form or contacting us directly.",
        },
        {
          question: "What file formats do you accept for printing?",
          answer: "We accept PDF, JPEG, PNG, TIFF, and AI files. For best results, please ensure your files are high-resolution (300 DPI).",
        },
        {
          question: "Do you provide design services?",
          answer: "Yes, we offer professional design services to help you create or refine your print materials.",
        },
        {
          question: "Can I see a proof before my order is printed?",
          answer: "Absolutely! We provide digital or physical proofs to ensure your design meets your expectations before printing.",
        },
        {
          question: "How is pricing determined?",
          answer: "Pricing depends on factors like quantity, paper type, printing method, finishing options, and turnaround time.",
        },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 mt-10">
      <h1 className=" text-2xl md:text-3xl font-semibold font-merriweather-sans md:font-bold text-colorPrimary text-center mb-8">Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`border rounded-lg mb-4 transition-all duration-300 ${
            activeIndex === index ? "border-blue-500" : "border-gray-200"
          }`}
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
          >
            <span className="font-semibold">{faq.question}</span>
            <span className="text-xl">
              {activeIndex === index ? "-" : "+"}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeIndex === index ? "max-h-40" : "max-h-0"
            }`}
          >
            <p className="p-4 text-gray-600">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;