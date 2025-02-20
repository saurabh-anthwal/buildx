
import React from 'react';
import Image from 'next/image';

const HowWeDo = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-5xl font-bold text-gray-900 mb-12">Our Process: Turning Ideas into Reality</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-white shadow-xl rounded-lg p-8 transform transition duration-300 hover:scale-105">
                            <Image src={step.image} alt={step.title} width={200} height={150} className="mx-auto rounded-lg mb-6" />
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const steps = [
    {
        title: "Discovery",
        description: "We analyze your business needs and set a strategic foundation.",
        image: "/home-img/discovery.jpeg",
    },
    {
        title: "Planning",
        description: "We craft a data-driven strategy to meet your business goals.",
        image: "/home-img/planning2.jpeg",
    },
    {
        title: "Execution",
        description: "We bring an innovative solution to life with seamless implementation.",
        image: "/home-img/execution.jpeg",
    },
    {
        title: "Optimization & Growth",
        description: "We ensure continued success with ongoing support and enhancements.",
        image: "/home-img/growth.jpeg",
    },
];

export default HowWeDo;
