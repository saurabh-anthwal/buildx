
import React from "react";
import Image from "next/image";

const services = [
  {
    title: "AI-Powered Digital Strategies",
    description:
      "Leverage cutting-edge AI and data-driven insights to supercharge your digital presence.",
    image: "/home-img/Data-Driven-Insights.jpeg",
  },
  {
    title: "Next-Gen Web Development",
    description:
      "We craft high-performance, scalable, and SEO-optimized websites tailored to your business goals.",
    image: "/home-img/Digital-Marketing-Excellence.jpeg",
  },
  {
    title: "Social Media & Ad Campaigns",
    description:
      "Maximize reach with targeted social media strategies and data-backed advertising solutions.",
    image: "/home-img/inovation.jpeg",
  },
];

const GrowBusiness = () => {
  return (
    <section className="container mx-auto my-16 py-10 px-6 text-center">
      <h2 className="text-5xl font-bold text-gray-900 mb-8">
        Empower Your Business with Smart Digital Solutions
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
        We specialize in IT solutions and digital media services, helping businesses scale and thrive in the digital landscape.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-xl p-6 hover:shadow-2xl transition-all transform hover:-translate-y-2"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={400}
              height={250}
              className="rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GrowBusiness;