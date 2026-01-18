import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import faq from '../assets/images/faq.png';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What types of packaging solutions do you offer?',
      answer:
        'We provide a wide range of custom packaging options including food packaging, product boxes, corrugated cartons, labels, and eco-friendly packaging. Our designs are tailored to meet your brand’s specific needs and industry standards.',
    },
    {
      question: 'Can I get custom designs for my brand?',
      answer:
        'Absolutely! Our in-house design team works closely with you to create unique, branded packaging that enhances product appeal and brand recognition.',
    },
    {
      question: 'Do you offer eco-friendly or sustainable packaging options?',
      answer:
        'Yes, we prioritize sustainability. We offer biodegradable, recyclable, and reusable packaging materials to help your brand reduce its environmental footprint.',
    },
    {
      question: 'What is your minimum order quantity (MOQ)?',
      answer:
        'Our minimum order quantity varies depending on the product type and customization level. Please contact our team to get a detailed quote based on your requirements.',
    },
    {
      question: 'How long does production and delivery take?',
      answer:
        'Production time typically ranges from 7 to 15 business days, depending on design complexity and order size. We ensure timely delivery while maintaining top-notch quality.',
    },
    {
      question: 'Do you ship across India?',
      answer:
        'Yes, Mishra Enterprises offers nationwide delivery with trusted logistics partners to ensure your packaging arrives safely and on time.',
    },
    {
      question: 'Can I see a sample before placing a bulk order?',
      answer:
        'Yes, we can provide samples or prototypes upon request so you can verify design, material, and finish before final production.',
    },
    {
      question: 'How can I contact Mishra Enterprises?',
      answer:
        'You can reach us at info@mishraenterprises.in or call us at +91-8884607600. Our team will be happy to assist you.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section
        className="hidden h-[600px] w-full grid-cols-2 place-items-center items-center bg-cover bg-center px-40 md:block md:grid"
        style={{ backgroundImage: `url(${faq})` }}
      >
        <div className="flex h-[200px] w-[473px] items-center justify-center rounded-[10px] bg-[#141241] px-5 py-16 shadow-md">
          <h2 className="mx-auto flex h-10 items-center justify-center text-[40px] font-bold text-white">
            FAQ
          </h2>
        </div>
        <div>
          <p className="mb-[14px] text-xl font-light leading-[30px] text-white">
            We simplify your packaging journey with clarity, expertise, and
            commitment. From understanding your needs to providing tailored
            solutions, our team ensures every question is answered and every
            detail is handled with care — helping you make confident, informed
            decisions for your brand.
          </p>
        </div>
      </section>

      <section className="md:hidden">
        <div className="flex items-center justify-center bg-white px-5 py-10">
          <h2 className="mx-auto flex w-full items-center justify-center text-[26px] font-semibold text-[#363636]">
            FAQ
          </h2>
        </div>
        <div
          className="bg-cover bg-center p-5"
          style={{ backgroundImage: `url(${faq})` }}
        >
          <p className="mb-[14px] text-base font-light leading-[24px] text-white">
            We simplify your packaging journey with clarity, expertise, and
            commitment. From understanding your needs to providing tailored
            solutions, our team ensures every question is answered and every
            detail is handled with care — helping you make confident, informed
            decisions for your brand.
          </p>
        </div>
      </section>

      <section className="min-h-screen bg-[#FFF8F0] px-4 py-12 md:px-12 md:py-20">
        <div className="mx-auto max-w-4xl">
          {/* HEADER */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-[#363636] md:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-[#555]">
              Find answers to common questions about our products and services
            </p>
          </div>

          {/* FAQ LIST */}
          <div className="space-y-6">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index} className="border-b border-[#e5ddd5] pb-4">
                  {/* QUESTION */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-start justify-between gap-4 text-left"
                  >
                    <div className="flex gap-2">
                      <span className="font-semibold text-[#363636]">
                        {index + 1}.
                      </span>
                      <span className="font-semibold text-[#363636]">
                        {faq.question}
                      </span>
                    </div>

                    {/* DROPDOWN ICON */}
                    <span
                      className={`text-xl text-[#0568A4] transition-transform duration-500 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    >
                      ▾
                    </span>
                  </button>

                  {/* ANSWER (SMOOTH DROPDOWN) */}
                  <div
                    className={`ease overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="mt-3 pl-6 text-base leading-7 text-[#555]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-lg p-6 text-center">
            <h2 className="mb-2 text-xl font-bold text-[#363636]">
              Still have questions?
            </h2>
            <p className="mb-4 text-[#555]">
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
