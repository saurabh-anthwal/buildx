"use client";
import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGoogle, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const url = "https://script.google.com/macros/s/AKfycbwGjE7iNdkyAxnWhLXhlu1mzshSqEd4SyPrys4IxkflCVdEGIE1j8ZiWGYpPJ4XkR3W/exec"; 
  
    const form = e.currentTarget; // Get form element
    const formData = new URLSearchParams();
    formData.append("Name", form.fullName.value);
    formData.append("Email", form.email.value);
    formData.append("Mobile", form.mobile.value);
    formData.append("Comment", form.comment.value);
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData,
      });
  
      const textResponse = await response.text(); 
      console.log("Raw response:", textResponse);
  
      setSuccessMessage(textResponse);
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="container mx-auto py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Get in Touch</h1>
        <p className="text-lg text-gray-600 mt-3">
          We are here to help! Fill out the form below, and our team will get back to you shortly.
        </p>
      </section>

      {/* Success Message */}
      {successMessage && (
        <div className="bg-green-500 text-white text-center p-4 rounded mb-4">
          {successMessage}
        </div>
      )}

      {/* Contact Form */}
      <section className="py-8 grid md:grid-cols-2 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Let&apos;s Discuss Your Needs</h2>
          <form className="grid gap-4" onSubmit={handleSubmit}>
            {[
              { id: 'fullName', label: 'Full Name', type: 'text' },
              { id: 'email', label: 'Email Address', type: 'email' },
              { id: 'mobile', label: 'Phone Number', type: 'number' },
              { id: 'comment', label: 'Comment', type: 'textarea' }
            ].map(({ id, label, type }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-gray-700 font-medium">{label}*</label>
                {type === 'textarea' ? (
                  <textarea
                    id={id}
                    name={id}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-200"
                    required
                  />
                ) : (
                  <input
                    type={type}
                    id={id}
                    name={id}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 transition duration-200"
                    required
                  />
                )}
              </div>
            ))}
            <button
              type="submit"
              className={`w-full ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'} text-white font-semibold py-3 rounded-lg transition duration-300`}
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit Inquiry'}
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="bg-white flex flex-col justify-between shadow-lg rounded-lg p-6 text-center">
          {/* Address Section */}
          <div className="flex flex-col items-start text-gray-700 space-y-4">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Office</h2>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-blue-600 text-xl" />
              <a href="mailto:abc@gmail.com" className="text-blue-500 hover:underline text-lg font-medium">
                abc@gmail.com
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-blue-600 text-xl" />
              <p className="text-lg font-medium">+91 9876543210</p>
            </div>

            <div className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-blue-600 text-xl mt-1" />
              <p className="text-lg font-medium text-gray-700 text-left">
                Devchand House, 6th Floor, Shivsagar Estate, C Block, Worli, Mumbai, Maharashtra, 400018
              </p>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="mt-6">
            <div className="flex justify-evenly gap-6 pt-6 border-t">
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
    </div>
  );
};

export default ContactUs;