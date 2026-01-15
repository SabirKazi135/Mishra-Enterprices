import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What types of packaging products do you offer?',
      answer:
        'We offer a comprehensive range of packaging solutions including stand-up pouches, lay-flat pouches, aluminium foil containers, raw materials, plastic containers, and custom packaging solutions tailored to your needs.',
    },
    {
      question: 'Do you provide custom packaging design services?',
      answer:
        'Yes, we specialize in custom packaging design. Our team works with you to create packaging that reflects your brand identity and meets your specific product requirements.',
    },
    {
      question: 'What is your minimum order quantity?',
      answer:
        'Minimum order quantities vary depending on the product type. Please contact us with your requirements, and we will provide detailed information about MOQ and pricing.',
    },
    {
      question: 'Do you offer printing and customization services?',
      answer:
        'Yes, we provide high-quality printing services for both plastic and paper packaging. We can customize packaging with your branding, logos, and design requirements.',
    },
    {
      question: 'What is your delivery timeline?',
      answer:
        'Delivery timelines depend on the order size, customization requirements, and product type. Typically, standard orders are delivered within 2-4 weeks. We will provide an accurate timeline when you place your order.',
    },
    {
      question: 'Do you ship internationally?',
      answer:
        'Currently, we primarily serve the Indian market. For international shipping inquiries, please contact us directly to discuss your requirements.',
    },
    {
      question: 'What quality assurance measures do you have?',
      answer:
        'We maintain strict quality control standards throughout our production process. Every product undergoes rigorous quality checks before delivery to ensure it meets our high standards.',
    },
    {
      question: 'Are your packaging materials eco-friendly?',
      answer:
        'We are committed to sustainability and offer eco-friendly packaging options. Many of our products are recyclable, and we continue to expand our range of sustainable packaging solutions.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="min-h-screen bg-white px-4 py-12 md:px-12 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-[#363636] md:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our products and services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <button
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-semibold text-[#363636]">
                    {faq.question}
                  </span>
                  <span
                    className={`text-2xl text-[#0568A4] transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  >
                    ▾
                  </span>
                </button>
                {openIndex === index && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-6 pb-4 text-gray-700"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-lg bg-[#FFF8F0] p-6 text-center">
            <h2 className="mb-2 text-xl font-bold text-[#363636]">
              Still have questions?
            </h2>
            <p className="mb-4 text-gray-700">
              Contact us and we'll be happy to help
            </p>
            <Link
              to="/contact"
              className="inline-block rounded bg-[#0568A4] px-6 py-3 text-white transition-colors hover:bg-[#045a8c]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default FAQ;
