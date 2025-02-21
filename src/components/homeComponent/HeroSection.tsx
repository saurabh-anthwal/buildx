import React from 'react';

const HeroSection = () => {
    return (
        <section 
            className="relative h-[92vh] py-20 flex items-center justify-center bg-cover bg-center text-center" 
            style={{ backgroundImage: 'url("/home-img/homeBanner.jpeg")' }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-70"></div>

            {/* Content */}
            <div className="container mx-auto relative px-4">
                <h1 className="text-6xl font-semibold text-white leading-tight">
                    Syncing Innovation <br /> with Influence
                </h1>
                <p className="mt-6 text-lg text-gray-200 font-semibold font-body max-w-3xl mx-auto">
                    We harness the power of AI to drive innovation, efficiency, and growth for our customers.
                    Enabling them to unlock new opportunities, streamline operations, and stay ahead
                    in a rapidly evolving digital landscape.
                </p>
            </div>
        </section>
    );
}

export default HeroSection;
