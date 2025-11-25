"use client";

import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    reason: "",
    message: "",
  });

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="bg-white py-20 px-6 mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-6xl font-normal text-gray-900 mb-8 tracking-tight">
              Contact us.
            </h2>
            <p className="text-base text-gray-600 mb-6 leading-relaxed">
              Interested in one of our products or have a question? Send us a
              <br />
              message and we'll get back to you shortly.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              You can contact us by calling{" "}
              <a
                href="tel:+16107216271"
                className="underline text-gray-900 hover:text-gray-700"
              >
                +1&nbsp;610&nbsp;721&nbsp;6271
              </a>
              , sending a message by filling out the adjacent{" "}
              <span className="italic">form</span>,<br />
              or email us at{" "}
              <a
                href="mailto:Nanaabban@aureaoctave.com"
                className="underline text-gray-900 hover:text-gray-700"
              >
                Nanaabban@aureaoctave.com
              </a>
              .
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-10">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-xs text-gray-600 mb-2"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-xs text-gray-600 mb-2"
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs text-gray-600 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="organization"
                    className="block text-xs text-gray-600 mb-2"
                  >
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="reason"
                  className="block text-xs text-gray-600 mb-2"
                >
                  Reason *
                </label>
                <div className="relative">
                  <select
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent cursor-pointer"
                  >
                    <option value="">Select a reason</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="press">Press Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      className="text-gray-400"
                    >
                      <path
                        d="M1 1L6 6L11 1"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs text-gray-600 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
                />
              </div>

              <div>
                <button
                  onClick={handleSubmit}
                  className="bg-gray-900 text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  Submit
                </button>
              </div>

              <div className="pt-4">
                <p className="text-xs text-gray-500 leading-relaxed">
                  By submitting, you agree to receive updates, insights and news
                  from us. This site is
                  <br />
                  protected by reCAPTCHA and the Google{" "}
                  <a href="#" className="underline hover:text-gray-700">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="#" className="underline hover:text-gray-700">
                    Terms of Service
                  </a>{" "}
                  apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
