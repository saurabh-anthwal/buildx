import { FaComments, FaLightbulb, FaCogs, FaChartLine } from "react-icons/fa";

const processSteps = [
  {
    title: "Consultation",
    description: "We begin with a thorough consultation to understand your needs and objectives.",
    icon: <FaComments className="text-white text-3xl" />,
  },
  {
    title: "Strategy Development",
    description: "Our team develops a tailored strategy to meet your specific goals.",
    icon: <FaLightbulb className="text-white text-3xl" />,
  },
  {
    title: "Implementation",
    description: "We execute the strategy with precision, ensuring quality and efficiency.",
    icon: <FaCogs className="text-white text-3xl" />,
  },
  {
    title: "Review & Optimize",
    description: "We continuously monitor results and optimize our approach for maximum impact.",
    icon: <FaChartLine className="text-white text-3xl" />,
  },
];

const OurProcess = () => {
  return (
    <section className="container mx-auto my-10 font-body">
      <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Process: Delivering Value</h2>
      <p className="text-lg text-gray-600 font-medium mx-auto mb-10">
        We follow a structured approach to ensure that we deliver maximum value to our clients at every stage of the project.
      </p>

      {/* Process Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {processSteps.map((step, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-xl shadow-lg text-white flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-white/20 p-4 rounded-full flex items-center justify-center mb-4">
              {step.icon}
            </div>
            <h4 className="text-2xl font-semibold">{step.title}</h4>
            <p className="text-lg mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProcess;
