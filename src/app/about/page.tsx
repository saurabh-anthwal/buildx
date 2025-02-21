import OurMission from "@/components/about/OurMission";
// import OurStory from "@/components/about/OurStory";
import Vision from "@/components/about/Vision";
import React from "react";

const AboutUs = () => {
  return (
    <div className="font-body">
      {/* Hero Section */}
      <section
        className="relative h-[90vh] md:h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/about-img/banner2.jpeg')",
        }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-70">
          {/* Increased opacity to 70% */}
          <div className="w-2/3 mx-auto text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug">
            Syncing Innovation
            with Influence
            </h1>
            <p className="mt-4 text-base sm:text-lg font-medium leading-relaxed">
            We empower businesses with AI-driven solutions to enhance efficiency, optimize operations, and drive growth. By combining innovation with strategic influence, we help brands stay ahead in the digital world. Our expertise ensures smarter decision-making, improved engagement, and sustainable success.
            </p>
            <a href="/contact" className="mt-6 inline-block bg-yellow-500 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-400 transition">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <div className="container mx-auto p-6">
        {/* Our Story Section */}
        {/* <OurStory /> */}

        {/* Mission Section */}
        <OurMission />

        {/* Vision Section */}
        <Vision />
      </div>
    </div>
  );
};

export default AboutUs;