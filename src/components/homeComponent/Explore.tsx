import React from 'react'
import Image from "next/image";
const Explore = () => {
    return (
        <section className="container mx-auto my-10 py-6">
            <h2 className="text-5xl font-semibold text-black leading-tight mb-6">Explore Our Comprehensive IT Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                    <h3 className="text-xl font-semibold">IT Consulting</h3>
                    <p>Strategic guidance to align your IT with your business goals.</p>
                    <Image
                src="/home-img/Digital-Marketing-Excellence.jpeg"
                width={500}
                height={500}
                alt="IT Consulting"
                className="mt-4 rounded-lg"
              />
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                    <h3 className="text-xl font-semibold">Managed Services</h3>
                    <p>Proactive monitoring and maintenance to keep your systems running smoothly.</p>
                    <Image
                src="/home-img/Digital-Marketing-Excellence.jpeg"
                width={500}
                height={500}
                alt="Managed Services"
                className="mt-4 rounded-lg"
              />
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                    <h3 className="text-xl font-semibold">Cloud Solutions</h3>
                    <p>Secure and scalable cloud services tailored to your needs.</p>
                    <Image
                src="/home-img/Digital-Marketing-Excellence.jpeg"
                width={500}
                height={500}
                alt="Cloud Solutions"
                className="mt-4 rounded-lg"
              />
                </div>
            </div>
        </section>
    )
}

export default Explore