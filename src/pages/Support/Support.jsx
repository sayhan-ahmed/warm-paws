import React, { useState } from "react";
import { FaMinus, FaPlus, FaRegHeart } from "react-icons/fa";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { Link } from "react-router";
import { FiUser } from "react-icons/fi";

const Support = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const supportCategories = [
    {
      title: "Adoption Process",
      icon: <FaRegHeart />,
      desc: "Guides on how to adopt a new family member.",
    },
    {
      title: "Account & Settings",
      icon: <FiUser />,
      desc: "Manage your profile, password, and preferences.",
    },
    {
      title: "Safety & Trust",
      icon: <AiOutlineSafetyCertificate />,
      desc: "Learn how we verify pets and keep the community safe.",
    },
  ];

  const faqs = [
    {
      question: "How do I list a pet for adoption?",
      answer:
        "To list a pet, you must be logged in. Navigate to your profile or the 'Add Item' section, fill out the pet's details (breed, age, vaccination status), upload clear photos, and submit. Our team reviews all listings within 24 hours.",
    },
    {
      question: "Is there a fee to adopt?",
      answer:
        "Warmpaws is a platform to connect owners. While we don't charge a platform fee, some current owners or shelters may request a rehoming fee to ensure the pet goes to a financially stable home. This is discussed directly between you and the owner.",
    },
    {
      question: "What if I forget my password?",
      answer:
        "Click on 'Login' and select 'Forgot Password'. We will send a reset link to your registered email address.",
    },
    {
      question: "How do you ensure the pets are healthy?",
      answer:
        "We require vaccination records for all listings. However, we strongly recommend visiting the pet in person and consulting with a vet before finalizing any adoption.",
    },
  ];

  return (
    <div className="bg-[#FAF6F3] min-h-screen pt-24 pb-12">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            How can we <span className="text-[#f47726]">help you?</span>
          </h1>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {supportCategories.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center group"
            >
              <div className="bg-[#fff0e6] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-[#f47726] group-hover:scale-110 transition-transform duration-300">
                <div className="text-3xl">{item.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-sm p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-100 last:border-0 pb-4 last:pb-0"
              >
                <button
                  className="w-full flex justify-between items-center text-left py-4 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-medium text-gray-700">
                    {faq.question}
                  </span>
                  <span className="ml-6 shrink-0 text-[#f47726]">
                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-500 pb-4 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Still Need Help CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Can't find what you're looking for?
          </p>
          <Link to="/contact">
            <button className="btn bg-[#f47726] hover:bg-gray-800 text-white border-none px-8 rounded-full shadow-lg shadow-orange-200">
              Contact Support
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Support;
