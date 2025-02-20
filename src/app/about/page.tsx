import OurMission from "@/components/about/OurMission";
import OurStory from "@/components/about/OurStory";
import Vision from "@/components/about/Vision";
import React from "react";

const AboutUs = () => {
  return (
    <div className="font-body">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('/about-img/banner2.jpeg')",
        }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-70">
          {/* Increased opacity to 70% */}
          <div className="w-2/3 mx-auto text-white">
            <h1 className="text-5xl font-semibold">
              Innovating the Future of Construction
            </h1>
            <p className="mt-4 text-lg font-semibold">
              At Build-X, we are dedicated to transforming the construction industry through innovative technologies and sustainable practices, ensuring a better tomorrow for our communities and the environment.
            </p>
            <a href="/contact" className="mt-6 inline-block bg-yellow-500 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-400 transition">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <div className="container mx-auto p-6">
        {/* Our Story Section */}
        <OurStory />

        {/* Mission Section */}
        <OurMission />

        {/* Vision Section */}
        <Vision />
      </div>
    </div>
  );
};

export default AboutUs;