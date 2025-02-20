import Image from "next/image";

const OurVision = () => {
    return (
      <section className="py-16 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start px-6">
          {/* Left Content */}
          <div className="md:w-1/2">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Vision</h2>
            {/* <p className="text-lg font-semibold text-gray-600 mb-6">
              To be the **leading force in IT and Digital Solutions**, helping businesses **scale, innovate, and thrive** through **technology-driven strategies**.
            </p> */}
            <ul className="space-y-4">
              {[
                "To drive digital transformation with innovative technologies.",
                "To deliver high-quality IT solutions for long-term success.",
                "To enhance brand growth with targeted digital marketing strategies.",
                "To build sustainable and scalable solutions for the future.",
              ].map((point, index) => (
                <li key={index} className="flex items-start text-lg text-gray-700">
                  <span className="text-blue-600 text-2xl mr-3">✔</span> {point}
                </li>
              ))}
            </ul>
          </div>
  
          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center">
                      <Image
                src="/about-img/about.jpeg"
                width={500}
                height={500}
                alt="Vision Illustration"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
          </div>
        </div>
      </section>
    );
  };
  
  export default OurVision;
  