"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const partners = [
  "/trusted-partners/google.png",
  "/trusted-partners/github.png",
  "/trusted-partners/linkedin.png",
  "/trusted-partners/meta.jpg",
  "/trusted-partners/slack.png",
  "/trusted-partners/vercel.png",
];

const TrustedPartner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleImages = 4; // Reduced for better mobile fit

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
  };

  const getVisibleImages = () => {
    return [...partners, ...partners].slice(currentIndex, currentIndex + visibleImages);
  };

  return (
    <section className="py-10 bg-gradient-to-r from-indigo-300 to-gray-600">
      <div className="container mx-auto text-center md:px-0 px-2">
        <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight mb-6">
          Our Trusted Partners: Powering Innovation Together
        </h2>
        <p className="mb-6 text-base md:text-lg text-white font-body px-4">
          We work alongside industry-leading partners to deliver top-tier solutions. 
          Through these collaborations, we bring the latest technologies and expert support, 
          ensuring your business stays ahead in innovation and competition.
        </p>

        {/* Slider Section */}
        <div className="relative flex justify-center items-center w-full max-w-5xl mx-auto overflow-hidden">
          {/* Partner Images */}
          <div
            className="flex space-x-6 md:space-x-10 px-4 transition-transform duration-700 ease-in-out flex-nowrap"
          >
            {getVisibleImages().map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-24 h-12 md:w-32 md:h-16 lg:w-48 lg:h-24 flex items-center justify-center px-4"
              >
                <Image
                  src={partner}
                  width={192}
                  height={96}
                  alt={`Partner ${index + 1}`}
                  className="object-contain w-full h-full transition-transform duration-500"
                  style={{ mixBlendMode: "multiply" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartner;
