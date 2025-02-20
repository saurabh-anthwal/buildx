import React from 'react';
import { FaCode, FaTools, FaUserFriends, FaBullhorn, FaSearch, FaVideo, FaChartLine, FaImage   } from 'react-icons/fa';

const services = [
  { icon: <FaCode />, title: "Website Development", description: "Bespoke software solutions tailored to your business needs." },
  { icon: <FaTools />, title: "Website Maintenance", description: "Keep your website up-to-date and running smoothly." },
  { icon: <FaUserFriends />, title: "Staff Augmentation", description: "Providing skilled professionals to enhance your team." },
  { icon: <FaBullhorn />, title: "Social Media Marketing", description: "Boost your brand visibility with effective marketing." },
  { icon: <FaSearch />, title: "SEO Services", description: "Maximize your brand’s visibility across multiple online channels, and attract more customers." },
  { icon: <FaVideo />, title: "Video Creation & Marketing", description: "Creating engaging videos for effective marketing." },
  { icon: <FaChartLine />, title: "Google Ad Management", description: "Maximize visibility and lead generation with Google Ads." }, // Unique icon
  { icon: <FaImage  />, title: "Ad Creatives", description: "Designing eye-catching ad creatives to drive conversions." }, // Change this to a unique icon
];

const WhatWeDo = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-4xl font-extrabold text-center mb-12 tracking-wide uppercase">What We Do</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-lg flex flex-col items-center text-center transition-all transform hover:scale-105 hover:shadow-2xl border border-gray-200"
          >
            <div className="text-5xl text-blue-400 mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-500 text-lg">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;