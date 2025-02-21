// pages/services.tsx
import ComprhensiveIT from "@/components/serviceComponent/ComprhensiveIT";
import ContactDetail from "@/components/serviceComponent/ContactDetail";
import EffectiveDigital from "@/components/serviceComponent/EffectiveDigital";
import OurProcess from "@/components/serviceComponent/OurProcess";
import WhyChoose from "@/components/serviceComponent/WhyChoose";
import Image from 'next/image'

import React from "react";

const Services: React.FC = () => {


  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] md:h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('/service-img/banner2.jpeg')",
        }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-70">
          <div className="w-full px-6 md:px-12 lg:w-2/3 text-center md:text-left text-white py-10 md:py-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug">
              Modern IT and Digital Services for Business Growth
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl">
              {`We offer cutting-edge IT and digital services designed to propel your business forward. We create a bridge between the new modern AI technologies and customer needs. `}
            </p>
          </div>
        </div>
      </section>

      {/* Fourth Section */}
      <div className="container mx-auto space-y-20 md:px-0 px-2">
        <EffectiveDigital />
      </div>

      {/* <div className="container mx-auto space-y-20">
        <section className="flex flex-col items-start gap-12 md:flex-row my-10">
          <div className="md:w-1/3">
            <Image
              src="/service-img/service3.jpeg"
              width={500}
              height={500}
              alt="Services in Action"
              className="w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-semibold text-gray-800">See Our Services in Action</h2>
            <p className="mt-4 text-lg text-gray-600 font-[500] font-body">
              Witness our capabilities firsthand. Our animated showcase
              illustrates how we turn innovative ideas into tangible results,
              providing comprehensive IT and digital solutions tailored to your
              needs.
            </p>
            <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 font-body">
              <li className="flex items-start gap-6 p-4 ">
                <div><p className="bg-gray-200 px-3 py-2 text-lg font-semibold">1</p></div>
                <div>
                  <h3 className="text-2xl font-semibold">Innovative Approach</h3>
                  <p className="text-gray-600">
                    We leverage the latest technologies to deliver cutting-edge solutions.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-6 p-4 ">
                <div><p className="bg-gray-200 px-3 py-2 text-lg font-semibold">2</p></div>
                <div>
                  <h3 className="text-2xl font-semibold">Results-Driven</h3>
                  <p className="text-gray-600">
                    Our strategies are designed to achieve measurable business outcomes.
                  </p>
                </div>
              </li>
              <li className="col-span-2">
                <div className="flex items-start gap-6 p-4 ">
                  <div><p className="bg-gray-200 px-3 py-2 text-lg font-semibold">3</p></div>
                  <div>
                    <h3 className="text-2xl font-semibold">Customized Solutions</h3>
                    <p className="text-gray-600">
                      We tailor our services to meet your unique requirements.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div> */}

      {/* Third Section */}
      <ComprhensiveIT />

      {/* sevent section  */}
      <OurProcess />

      {/* five Section */}
      <WhyChoose />

      {/* six section */}
      <section className="container mx-auto px-6 md:px-0 font-body">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-center md:text-left">Client Success Stories</h2>
        <p className="text-base sm:text-lg text-gray-600 font-medium text-center md:text-left mb-10">{`Discover how we've helped businesses like yours achieve remarkable growth and success. Our client testimonials showcase the impact of our services and the value we deliver.`}</p>

        <div className="flex flex-col-reverse md:flex-row justify-between items-center md:items-start w-full">
          <div className="w-full md:w-[60%] space-y-6">
            <div className="py-5 mb-5">
              <h4 className="font-semibold text-2xl mb-4">John S. - CEO, Tech Startup</h4>
              <p className="text-lg w-3/4">{`"Their SEO strategies transformed our online presence, driving a 300% increase in organic traffic."`}</p>
            </div>
            <div className="py-5 mb-5">
              <h4 className="font-semibold text-2xl mb-4">Emily R. - Marketing Director, Retail Chain</h4>
              <p className="text-lg w-3/4">{`"The ad management services significantly improved our ROI and customer engagement."`}</p>
            </div>
            <div className="py-5 mb-5">
              <h4 className="font-semibold text-2xl mb-4">David L. - Founder, E-commerce Business</h4>
              <p className="text-lg w-3/4">{`"The website they developed is not only beautiful but also highly functional, boosting our sales."`}</p>
            </div>
          </div>
          <div className="w-[40%]">
            <Image
              src="/service-img/client-success.jpeg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
      </section>

      {/* eight section  */}
      <ContactDetail />
    </div>
  );
};

export default Services;
