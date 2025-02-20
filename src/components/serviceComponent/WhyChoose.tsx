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
      className="my-10 relative flex h-[70vh] min-h-[60vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "url(/service-img/choose.jpeg)",
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-gray-900/80"></div>

      <div className="p-6 w-full h-full flex items-center">
        <div className="container mx-auto text-center md:text-left">
          <h2 className="text-5xl font-extrabold text-white">Why Choose Us?</h2>
          <p className="mt-4 text-lg text-white font-medium max-w-2xl mx-auto md:mx-0">
          We combine expertise of modern technologies with a results-driven approach to deliver exceptional value. Our commitment to innovation and customer satisfaction sets us apart.
          </p>

          {/* Feature Cards */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/20 backdrop-blur-lg p-6 rounded-xl text-white shadow-xl border border-white/10 transition-all duration-300 transform hover:scale-105 hover:bg-white/30"
              >
                <h3 className="text-2xl font-semibold">{feature.title}</h3>
                <p className="text-lg mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
