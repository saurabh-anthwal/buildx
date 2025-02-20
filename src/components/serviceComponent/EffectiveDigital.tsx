// import Image from "next/image";
import { FaGoogle, FaVideo, FaBullhorn, FaUsers, FaLightbulb, FaSearch, FaChartLine } from "react-icons/fa";

const DigitalSolutions = () => {
  return (
    <section className="my-10">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900">Effective Digital Solutions</h2>
        <p className="mt-4 text-lg text-gray-600">
          Boost your online presence and engage your target audience with our expert digital solutions.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition duration-300"
          >
            {/* { service?.img_link ? 
            <div className="flex justify-center mb-4 text-teal-500 text-4xl">
            <Image alt="Social Media Marketing" src={service?.img_link} height={100} width={100} className="h-12 w-16"/>
            </div>
            : */}
            <>
            <div className="flex justify-center mb-4 text-teal-500 text-4xl">
              {service.icon}
            </div>
            </>
            {/* } */}
            <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const services = [
  { title: "Social Media Marketing", description: "Reach your audience with targeted campaigns.", icon: <FaBullhorn/> },
  // { title: "Social Media Marketing", description: "Reach your audience with targeted campaigns.", img_link:"/service-img/media.png" },
  { title: "Google Ads", description: "Drive targeted traffic with strategic Google Ads.", icon: <FaGoogle /> },
  { title: "SEO", description: "Improve rankings & drive organic traffic.", icon: <FaSearch /> },
  { title: "Video Marketing", description: "Engage audiences with compelling videos.", icon: <FaVideo /> },
  { title: "Ad Management", description: "Optimize ad spend & maximize ROI.", icon: <FaChartLine/> },
  { title: "Lead Generation", description: "Capture qualified leads & grow business.", icon: <FaUsers /> },
  { title: "Ad Creatives", description: "Visually stunning & high-converting ads.", icon: <FaLightbulb /> },
];

export default DigitalSolutions;
