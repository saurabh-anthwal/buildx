import { FaBuilding, FaGlobe, FaAward, FaLeaf } from "react-icons/fa";

const OurStory = () => {
  const milestones = [
    {
      year: "2025",
      title: "A New Beginning",
      description:
        "Build-X was founded with a mission to revolutionize construction through innovation and sustainability.",
      icon: <FaBuilding className="text-blue-500 text-3xl" />,
    },
    {
      year: "2026",
      title: "Expanding Horizons",
      description:
        "We introduced smart building solutions, integrating IoT and AI to enhance efficiency and safety.",
      icon: <FaGlobe className="text-green-500 text-3xl" />,
    },
    {
      year: "2028",
      title: "Industry Recognition",
      description:
        "Honored with multiple awards for groundbreaking advancements in sustainable construction.",
      icon: <FaAward className="text-yellow-500 text-3xl" />,
    },
    {
      year: "2030",
      title: "Commitment to Sustainability",
      description:
        "Launched eco-friendly initiatives, including net-zero energy buildings and waste reduction programs.",
      icon: <FaLeaf className="text-emerald-500 text-3xl" />,
    },
  ];

  return (
    <section className="py-12 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Our Journey
        </h2>
        <p className="text-lg font-semibold mt-3 text-gray-600">
          Pioneering the future of sustainable construction.
        </p>
      </div>

      <div className="mt-12 flex flex-col md:flex-row md:justify-between gap-8">
        {milestones.map((item, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="p-4 bg-gray-100 rounded-full shadow-md">{item.icon}</div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                {item.year}: {item.title}
              </h3>
              <p className="text-gray-600 text-lg mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurStory;
