"use client"
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image"; 

const ContactUs = () => {
  const [isConsultationOpen, setConsultationOpen] = useState(false);

  return (
    <section className="container mx-auto py-16 flex flex-col md:flex-row items-center gap-12 font-body">
      {/* Left Section */}
      <div className="w-full md:w-3/5">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Let’s Connect and Grow Together</h2>
        <p className="text-lg text-gray-600 font-medium mb-8">
          {`Whether you're looking for expert IT solutions, digital transformation strategies, 
          or tailored business services, we’re here to help. Let’s discuss your goals and craft 
          a personalized plan for success.`}
        </p>

        <div className="space-y-6">
          {/* Book a Consultation */}
          <div className="w-full">
            <button
              onClick={() => setConsultationOpen(!isConsultationOpen)}
              className="w-full flex items-center justify-between bg-gray-100 rounded-lg px-5 py-3 hover:bg-gray-200 transition duration-300 cursor-pointer"
            >
              <span className="flex items-center text-xl font-semibold text-gray-900">
                <FaChevronDown className={`mr-2 transition-transform duration-300 ${isConsultationOpen ? 'rotate-180' : ''}`} />
                Schedule a Free Consultation
              </span>
            </button>
            {isConsultationOpen && (
            <div className="mt-3 text-gray-700 text-lg bg-gray-50 rounded-md p-4 border border-gray-200">
               <p className="mb-2">
                Talk to our experts for a free 30-minute consultation and explore how we can enhance your business with innovative solutions.
              </p>
              <Link href="/contact" className="text-blue-400">Let&apos;s Talk</Link>
            </div>
            )}
          </div>

        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-2/5 flex justify-center">
          <Image
                        src="/service-img/women.jpeg"
                        width={500}
                        height={500}
                        alt="Contact Us"
                         className="w-full max-w-[400px] rounded-lg shadow-lg"
                      />
      </div>
    </section>
  );
};

export default ContactUs;

