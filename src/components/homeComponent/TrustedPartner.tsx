"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";

const partners = [
  "/home-img/ai-power.jpeg",
  "/home-img/ai-power.jpeg",
  "/home-img/ai-power.jpeg",
  "/home-img/ai-power.jpeg",
  "/home-img/ai-power.jpeg",
  "/home-img/ai-power.jpeg",
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
          We collaborate with industry-leading partners to deliver best-in-class solutions. Our partnerships enable us to provide you with the latest technologies and expert support, ensuring your business stays ahead of the curve.
        </p>

        {/* Slider Section */}
        <div className="relative flex justify-center items-center w-full max-w-4xl mx-auto overflow-hidden">
          {/* Partner Images */}
          <div className="flex space-x-4 overflow-hidden w-full justify-center">
            {partners.slice(currentIndex, currentIndex + visibleImages).map((partner, index) => (
              <Image
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