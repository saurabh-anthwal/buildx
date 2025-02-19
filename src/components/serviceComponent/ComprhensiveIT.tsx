import { FaCode, FaTools, FaUserFriends } from "react-icons/fa";

const ITServices = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-700 text-white">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-extrabold mb-4">Comprehensive IT Services</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Our IT services are designed to optimize your technology infrastructure and drive efficiency.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white text-gray-900 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="absolute top-[-25px] left-1/2 transform -translate-x-1/2 bg-teal-600 p-4 rounded-full shadow-md">
                <service.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mt-10 mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    title: "Website Development",
    description:
      "We create responsive, user-friendly websites tailored to your brand and business goals.",
    icon: FaCode,
  },
  {
    title: "Maintenance",
    description:
      "Ensure your systems run smoothly with our proactive maintenance and support services.",
    icon: FaTools,
  },
  {
    title: "Staff Augmentation",
    description:
      "Scale your team with our expert IT professionals, customized to your needs.",
    icon: FaUserFriends,
  },
];

export default ITServices;
