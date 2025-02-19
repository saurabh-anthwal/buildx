import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-10">
          {/* Company Info */}
          <div>
            <h1 className="text-3xl font-bold text-white">BuildX</h1>
            <p className="mt-3 text-gray-400 max-w-xs">
              Elevating businesses with cutting-edge IT and digital solutions.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-semibold text-white">Quick Links</h2>
              <ul className="mt-3 space-y-2">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li><Link href="/services" className="hover:text-white">Services</Link></li>
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">Services</h2>
              <ul className="mt-3 space-y-2">
                <li><a href="/services" className="hover:text-white">IT Consulting</a></li>
                <li><a href="/services" className="hover:text-white">Software Development</a></li>
                <li><a href="/services" className="hover:text-white">Digital Marketing</a></li>
                <li><a href="/services" className="hover:text-white">SEO</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-lg font-semibold text-white">Contact Us</h2>
            <p className="mt-3 text-gray-400">Phone: (123) 456-7890</p>
            <p className="text-gray-400">Email: info@yourcompany.com</p>
            <p className="text-gray-400">Address: 123 Main St, City, Country</p>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="flex flex-col items-center mt-8">
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-xl" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>

          <p className="text-sm text-gray-500 mt-6">© {new Date().getFullYear()} BuildX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
