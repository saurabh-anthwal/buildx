import React from "react";

const WhyChoose = () => {
  const features = [
    {
      title: "Deep Expertise",
      description:
        "Benefit from our team's extensive knowledge and experience in IT and digital solutions.",
    },
    {
      title: "Proven Results",
      description:
        "Achieve your business goals with our track record of successful client outcomes.",
    },
    {
      title: "Client-Centric Approach",
      description: "We prioritize your unique needs and tailor our services accordingly.",
    },
    {
      title: "Empowering our customers with AI.",
      description: "We empower our customers with AI, helping them stay ahead of the competition.",
    },
  ];

  return (
    <section
      className="my-16 relative flex flex-col items-center justify-center bg-cover bg-center py-16"
      style={{ 
        backgroundImage: 
        "url(/service-img/choose.jpeg)",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content Wrapper */}
      <div className="relative w-full container mx-auto text-center text-white md:px-0 px-2">
        <h2 className="text-4xl font-bold">Why Choose Us?</h2>
        <p className="mt-4 font-semibold text-lg max-w-3xl mx-auto">
         We combine expertise of modern technologies with a results-driven approach to deliver exceptional value. Our commitment to innovation and customer satisfaction sets us apart.
        </p>

        {/* Feature Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/20 p-6 rounded-lg text-white shadow-lg backdrop-blur-md transition-transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className="text-lg mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
