import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQS = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Why should I donate to Suvidha Foundation?",
      answer:
        "Donating to Suvidha Foundation empowers rural women with essential healthcare, wellness programs, and education, creating a lasting impact on their lives.",
    },
    {
      question: "How will my donation be utilized?",
      answer:
        "Your donation will be used to fund health workshops, medical resources, menstrual hygiene programs, and maternal care initiatives for rural women, ensuring direct community impact.",
    },
    {
      question: "Is my donation tax-deductible?",
      answer:
        "Yes, Suvidha Foundation is a registered initiative, and your donation may be eligible for tax deductions as per government regulations.",
    },
    {
      question: "Are there different ways to donate?",
      answer:
        "Yes, you can donate online via our website, bank transfer, UPI, or in-kind contributions such as medical supplies and wellness kits.",
    },
    {
      question: "Can I get information on the impact of my donation?",
      answer:
        "Yes, we provide regular updates, reports, and success stories to show how your donation is making a difference in the lives of rural women.",
    },
  ];

  return (
    <div className="flex flex-col items-center p-6 md:p-12">
      {/* FAQ Image */}
      <img
        className="w-full max-w-md md:max-w-lg h-auto mx-auto"
        src="/faq.svg"
        alt="FAQs"
      />

      {/* FAQ Title */}
      <h1 className="text-2xl md:text-3xl text-[#DE3163] font-semibold mt-6 mb-8 text-center">
        Frequently Asked Questions (FAQ's) - Donation to Suvidha Foundation
      </h1>

      {/* FAQ Container */}
      <div className="w-full max-w-4xl">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border-b border-gray-300">
            {/* Accordion Header */}
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center p-4 bg-[#FFEDFA] hover:bg-[#E195AB]/30 rounded-md transition-all duration-300"
            >
              <span className="text-lg font-medium">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-[#DE3163]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#DE3163]" />
              )}
            </button>

            {/* Accordion Content */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40 p-4" : "max-h-0 p-0"
              }`}
            >
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQS;
