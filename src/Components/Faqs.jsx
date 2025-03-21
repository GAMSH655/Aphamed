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
        {
          question: "Do you offer discounts for bulk orders?",
          answer: "Yes, we offer competitive discounts for large-volume orders. Contact us for more details.",
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept credit/debit cards, bank transfers, and other payment methods. Please check our payment terms for more information.",
        },
        {
          question: "How long does it take to complete an order?",
          answer: "Turnaround times vary depending on the project size and complexity. Standard orders typically take 3-5 business days, while rush services are available for quicker delivery.",
        },
        {
          question: "Do you offer rush or express printing services?",
          answer: "Yes, we offer rush services for urgent orders. Additional fees may apply.",
        },
        {
          question: "Do you provide shipping services?",
          answer: "Yes, we offer local and international shipping. Shipping costs and delivery times depend on your location.",
        },
        {
          question: "What paper types and finishes do you offer?",
          answer: "We offer a variety of paper types (e.g., matte, glossy, textured) and finishes (e.g., laminating, UV coating, embossing).",
        },
        {
          question: "Can I print custom sizes or shapes?",
          answer: "Yes, we specialize in custom printing, including unique sizes, die-cut shapes, and specialty finishes.",
        },
        {
          question: "How do you ensure print quality?",
          answer: "We use state-of-the-art equipment and perform quality checks at every stage of the printing process.",
        },
        {
          question: "What if I’m not satisfied with my order?",
          answer: "Customer satisfaction is our priority. If you’re not happy with your order, contact us, and we’ll work to resolve the issue.",
        },
        {
          question: "How can I contact your customer support team?",
          answer: "You can reach us via phone, email, or live chat during business hours. Visit our Contact Us page for details.",
        },
        {
          question: "What is the difference between RGB and CMYK?",
          answer: "RGB is used for digital screens, while CMYK is used for printing. For best results, ensure your files are in CMYK format.",
        },
        {
          question: "What is bleed, and why is it important?",
          answer: "Bleed is the extra area around your design that ensures no white edges appear after trimming. We recommend a 3mm bleed for all print files.",
        },
        {
          question: "What resolution should my images be for printing?",
          answer: "Images should be at least 300 DPI (dots per inch) for high-quality printing.",
        },
        {
          question: "Do you offer mailing services for printed materials?",
          answer: "Yes, we provide direct mail services to help you distribute your printed materials efficiently.",
        },
        {
          question: "Can you help with branding and marketing materials?",
          answer: "Absolutely! We offer branding packages, including business cards, letterheads, and promotional materials, to help you build a cohesive brand identity.",
        },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 mt-10">
      <h1 className=" text-2xl md:text-3xl font-semibold md:font-bold text-center mb-8">Frequently Asked Questions</h1>
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