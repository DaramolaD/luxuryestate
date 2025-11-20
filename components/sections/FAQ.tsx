"use client";

import { useState } from "react";
import SectionHeader from "../shared/SectionHeader";

/**
 * FAQ section with accordion-style expandable questions
 * Interactive component for common guest inquiries
 */
interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What kind of returns can I expect on my investment?",
    answer: "Our properties are carefully selected in prime markets with strong fundamentals. Typical ROI ranges from 6-12% annually, depending on location and property type. Each property comes with detailed financial projections and market analysis. We provide conservative estimates based on current market data and historical performance.",
  },
  {
    question: "How do you ensure the property is a good investment?",
    answer: "Every property undergoes rigorous due diligence including market analysis, location assessment, growth projections, and rental yield calculations. We only select properties in established or rapidly growing markets with strong economic fundamentals, infrastructure development, and proven appreciation potential. Our team includes experienced real estate analysts and market experts.",
  },
  {
    question: "What happens after I purchase a property?",
    answer: "We provide comprehensive property management services including tenant screening, maintenance, rent collection, and financial reporting. You'll receive monthly statements and annual tax documentation. Our full-service approach ensures your investment is professionally managed while you enjoy passive income and capital appreciation.",
  },
  {
    question: "Can I visit the property before investing?",
    answer: "Absolutely. We encourage all potential investors to visit properties in person. We offer guided property tours, virtual walkthroughs, and can arrange site visits with our local representatives. For international investors, we provide detailed video tours and comprehensive documentation of the property and surrounding area.",
  },
  {
    question: "What financing options are available?",
    answer: "We work with multiple international lenders and can connect you with financing options tailored to your situation. Many of our properties qualify for attractive mortgage rates, and we can assist with the application process. We also offer flexible payment plans for qualified investors.",
  },
  {
    question: "How do you handle international investors?",
    answer: "We specialize in serving international investors and handle all legal, tax, and regulatory requirements. Our team includes experts in cross-border transactions, tax optimization, and compliance. We ensure a smooth process regardless of your country of residence, handling all documentation and legal requirements on your behalf.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Your Investment Questions Answered"
          subtitle="Everything you need to know about investing in premium real estate with confidence and clarity"
        />
        <div className="max-w-3xl mx-auto">

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  style={{
                    fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                  }}
                >
                  <span className="font-medium text-lg text-gray-800">{faq.question}</span>
                  <span className="text-2xl text-[#8B4513]">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <div
                    className="px-6 py-4 bg-gray-50 text-gray-700"
                    style={{
                      fontFamily: 'var(--font-geist-sans), "Geist Placeholder", sans-serif',
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

