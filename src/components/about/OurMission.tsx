import Image from "next/image";
const OurMission = () => {
    return (
      <section className="py-16 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg font-medium text-gray-600 max-w-3xl mx-auto mb-10">
            At BuildX, we are committed to delivering top-tier IT & Digital solutions that transform businesses.  
            Our mission is to bridge the gap between technology and success, ensuring brands thrive in the digital world.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation & Excellence",
                img: "/about-img/innovation2.jpeg",
                desc: "We constantly push the boundaries of technology to create future-ready solutions.",
              },
              {
                title: "Digital Transformation",
                img: "/about-img/digital2.jpeg",
                desc: "Empowering businesses with smart, data-driven strategies for sustainable growth.",
              },
              {
                title: "Client-Centric Approach",
                img: "/about-img/client.jpeg",
                desc: "We put our clients at the center, ensuring seamless collaboration and tailored solutions.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center hover:shadow-2xl transition-all duration-300"
              >
             <Image
                      src={item.img} alt={item.title} className="w-24 h-24 object-cover rounded-full mb-4"
                      width={500}
                      height={500}
                    />
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="text-lg text-gray-600 text-center mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default OurMission;
  