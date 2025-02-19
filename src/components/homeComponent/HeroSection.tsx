import React from 'react';

const HeroSection = () => {
    return (
        <section className="relative py-20 flex items-center justify-between bg-cover bg-center" style={{ backgroundImage: 'url("/home-img/homeBanner.jpeg")' }}>
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className='container mx-auto'>
            <div className="text-center md:text-left w-1/2 relative z-1">
                <h1 className="text-6xl font-semibold text-white leading-tight">Build IT Solutions & Business Website Faster And Easy</h1>
                <p className="mt-4 text-lg text-gray-200 font-semibold font-body">We help businesses create effective websites and provide IT services like website development, maintenance, and digital marketing. Let us handle your online presence while you focus on growing your business.</p>
                {/* <button className="mt-6 bg-black text-white py-2 px-4 rounded">Get Started</button> */}
            </div>
            </div>
        </section>
    );
}

export default HeroSection;