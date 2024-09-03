'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

type ContactFormProps = {
  className?: string;
};

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.2,
          duration: 0.5,
        },
      }}
      viewport={{ once: true }}
      className={`${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="items-sticky mb-32 lg:flex">
          {/* Contact - Left - Image */}
          <div id="Form" className="flex-1 lg:w-6/12">
            <Image
              src="/images/contactModel.png"
              width={1000}
              height={1000}
              alt="Image"
              className="h-full max-w-full bg-white object-cover object-center"
            />
          </div>
          <div className="flex-1 lg:w-6/12">
            <form className="h-full bg-white p-8 sm:p-14">
              {/* Contact - Right - Title */}
              <h2 className="mb-4 text-3xl text-gray-800">Get in Touch</h2>
              <p className="mb-6 text-gray-500">
                Do you have any questions or feedback to share with me? Please use the form below to get in touch.
              </p>
              <div className="flex space-x-5">
                {/* Contact - Right - Form - FirstName */}
                <div className="mb-6 lg:w-6/12">
                  <label
                    htmlFor="firstname"
                    className="mb-2 block text-base text-gray-600"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    className="rounded-0 mt-1 block w-full appearance-none border
                    border-slate-300 bg-white p-2 px-3 !text-base shadow-sm outline-1
                    outline-gray-300 placeholder:text-slate-400 focus:border-orange-600
                    focus:outline-none focus:ring-1 focus:ring-orange-600 sm:text-sm"
                    id="firstname"
                  />
                </div>
                {/* Contact - Right - Form - LastName */}
                <div className="mb-6 lg:w-6/12">
                  <label
                    htmlFor="lastname"
                    className="mb-2 block text-base text-gray-600"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="rounded-0 mt-1 block w-full appearance-none border
                    border-slate-300 bg-white p-2 px-3 !text-base shadow-sm outline-1
                    outline-gray-300 placeholder:text-slate-400 focus:border-orange-600
                    focus:outline-none focus:ring-1 focus:ring-orange-600 sm:text-sm"
                    id="lastname"
                  />
                </div>
              </div>
              {/* Contact - Right - Form - Email */}
              <div className="mb-6 block">
                <label
                  htmlFor="email"
                  className="mb-2 block text-base text-gray-600"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  className="rounded-0 mt-1 block w-full appearance-none border
                  border-slate-300 bg-white p-2 px-3 !text-base shadow-sm outline-1
                  outline-gray-300 placeholder:text-slate-400 focus:border-orange-600
                  focus:outline-none focus:ring-1 focus:ring-orange-600 sm:text-sm"
                  id="email"
                />
              </div>
              {/* Contact - Right - Form - Phone Number */}
              <div className="mb-6 block">
                <label
                  htmlFor="phone"
                  className="mb-2 block text-base text-gray-600"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="rounded-0 mt-1 block w-full appearance-none border
                  border-slate-300 bg-white p-2 px-3 !text-base shadow-sm outline-1
                  outline-gray-300 placeholder:text-slate-400 focus:border-orange-600
                  focus:outline-none focus:ring-1 focus:ring-orange-600 sm:text-sm"
                  id="phone"
                />
              </div>
              {/* Contact - Right - Form - Message */}
              <div className="mb-6 block">
                <label
                  htmlFor="message"
                  className="mb-2 block text-base text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  cols={30}
                  rows={7}
                  className="rounded-0 mt-1 block w-full appearance-none border
                  border-slate-300 bg-white p-2 px-3 !text-base shadow-sm outline-1
                  outline-gray-300 placeholder:text-slate-400 focus:border-orange-600
                  focus:outline-none focus:ring-1 focus:ring-orange-600 sm:text-sm"
                />
              </div>
              {/* Contact - Right - Btn - Submit */}
              <div className="mb-6 block">
                <input
                  type="submit"
                  className="cursor-pointer rounded-md bg-orange-600
                  px-5 py-4 text-[11.5px] font-bold uppercase
                  tracking-[2px] text-white transition-all duration-300 ease-in-out
                  hover:bg-white hover:text-orange-600 hover:shadow-2xl"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactForm;
