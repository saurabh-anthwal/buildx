import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGoogle, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="container mx-auto py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Get in Touch</h1>
        <p className="text-lg text-gray-600 mt-3">
          We are here to help! Fill out the form below, and our team will get back to you shortly.
        </p>
      </section>

      {/* Contact Form */}
      <section className="py-8 grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Let&apos;s Discuss Your Needs</h2>
          <form className="grid gap-4">
            {[
              { id: 'fullName', label: 'Full Name', type: 'text' },
              { id: 'email', label: 'Email Address', type: 'email' },
              { id: 'mobile', label: 'Phone Number', type: 'tel' },
              { id: 'companyName', label: 'Company Name', type: 'text' }
            ].map(({ id, label, type }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-gray-700 font-medium">{label}*</label>
                <input
                  type={type}
                  id={id}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            ))}
            <div>
              <label htmlFor="requirement" className="block text-gray-700 font-medium">Your Requirement</label>
              <textarea
                id="requirement"
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Submit Inquiry
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="bg-white p-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Office</h2>

          {/* Address Section */}
          <div className="flex flex-col items-center text-gray-700 space-y-4">
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-blue-600 text-xl mt-1" />
              <p className="text-lg font-medium text-gray-700">
                Devchand House, 6th Floor, Shivsagar Estate, C Block, Worli, Mumbai, Maharashtra, 400018
              </p>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-600 text-xl" />
              <a href="mailto:sahil.shah@dentsu.com" className="text-blue-500 hover:underline text-lg font-medium">
                sahil.shah@dentsu.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-600 text-xl" />
              <p className="text-lg font-medium">+91 98209 87475</p>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-gray-900">Connect With Us</h3>
            <div className="flex justify-center gap-6 mt-4">
              <a href="https://www.gmail.com/" target="_blank" rel="noopener noreferrer" className="text-red-600 text-3xl hover:text-red-700">
                <FaGoogle />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-pink-600 text-3xl hover:text-pink-700">
                <FaInstagram />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-3xl hover:text-blue-500">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-700 text-3xl hover:text-blue-800">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="my-12">
        <h2 className="text-3xl font-semibold text-center mb-6">Find Us on the Map</h2>
        <div className="h-64 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509748!2d144.95373631531516!3d-37.81627997975161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11c5b1%3A0x5045675218ceed0!2sYour%20Business%20Name!5e0!3m2!1sen!2sau!4v1616161616161!5m2!1sen!2sau"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
