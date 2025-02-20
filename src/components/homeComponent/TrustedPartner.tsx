"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";

const partners = [
  // "/home-img/ai-power.jpeg",
  "https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/lbb8yj7x7vsb12bjcxgk",
  "https://download.logo.wine/logo/Google/Google-Logo.wine.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuueDAydAR7PpEtxS7tQerk6yORTn3KeWH0Q&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr95DPhxYnDyF-TWJv8QBPt1PDzBWGG__nkw&s",
  "https://logos-world.net/wp-content/uploads/2020/10/Slack-Logo-2019-present.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6h1Yq_h9fcLRe3BB4yPyLh9mWxDLbuBOzjw&s",
];

const TrustedPartner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleImages = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
  };

  return (
    <section className="py-10 bg-gradient-to-r from-indigo-300 to-gray-600">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-semibold text-white leading-tight mb-6">
          Our Trusted Partners: Powering Innovation Together
        </h2>
        <p className="mb-6 text-lg text-white font-body">
        We work alongside industry-leading partners to deliver top-tier solutions. Through these collaborations, we deliver the latest technologies and expert support, ensuring your business remains at the forefront of innovation and competition.
        </p>

        {/* Slider Section */}
        <div className="relative flex justify-center items-center w-full max-w-4xl mx-auto overflow-hidden">
          {/* Partner Images */}
          <div className="flex space-x-4 overflow-hidden w-full justify-center">
            {partners.slice(currentIndex, currentIndex + visibleImages).map((partner, index) => (
              <img
                key={index} src={partner}
                width={500}
                height={500}
                alt={`Partner ${index + 1}`}
                className="h-24 w-auto object-contain transition-transform duration-500"
                style={{ mixBlendMode: 'multiply' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartner;