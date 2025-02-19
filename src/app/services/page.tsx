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
        className="relative h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.gamma.app/32hkwzjbtg7xlr3/generated-images/fnGW_RlyZ_-rmRYQQcaLQ.jpg')",
        }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-70">
          {/* Increased opacity to 70% */}
          <div className="w-2/3 mx-auto text-white">
            <h1 className="text-5xl font-semibold">
              Modern IT and Digital Services for Business Growth
            </h1>
            <p className="mt-4 text-lg">
              {`We offer cutting-edge IT and digital services designed to propel
              your business forward. From website development to <br />
              strategic marketing, we've got you covered.`}
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto space-y-20">
        {/* Second Section */}
        <section className="flex flex-col gap-6 md:flex-row my-10">
          <div className="md:w-1/3">
          <Image
      src="/home-img/Digital-Marketing-Excellence.jpeg"
      width={500}
      height={500}
      alt="Services in Action"
       className="w-full h-auto"
    />
          </div>
          <div className="md:w-1/2 p-8">
            <h2 className="text-4xl font-semibold text-gray-800">See Our Services in Action</h2>
            <p className="mt-4 text-lg text-gray-600 font-[500] font-body">
              Witness our capabilities firsthand. Our animated showcase
              illustrates how we turn innovative ideas into tangible results,
              providing comprehensive IT and digital solutions tailored to your
              needs.
            </p>
            <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 font-body">
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
      </div>

      {/* Third Section */}
        <ComprhensiveIT />

      <div className="container mx-auto space-y-20">
        {/* Fourth Section */}
        <EffectiveDigital />
      </div>

      {/* five Section */}
        <WhyChoose />

      {/* six section */}
      <section className="container mx-auto font-body">
        <h2 className="text-4xl font-semibold mb-6">Client Success Stories</h2>
        <p className="text-lg text-gray-600 font-[500] font-body mb-10">{`Discover how we've helped businesses like yours achieve remarkable growth and success. Our client testimonials showcase the impact of our services and the value we deliver.`}</p>

        <div className="flex flex-col md:flex-row justify-between items-start w-full">
          <div className="mr-5 w-[60%]">
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
      src="/home-img/Digital-Marketing-Excellence.jpeg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
          </div>
        </div>
      </section>

      {/* sevent section  */}
        <OurProcess />

      {/* eight section  */}
      <ContactDetail />
    </div>
  );
};

export default Services;
