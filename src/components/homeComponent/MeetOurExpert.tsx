import React from 'react'
import Image from "next/image";
const MeetOurExpert = () => {
    return (
        <section className="bg-gray-100 py-10">
            <div className="container mx-auto">
                <h2 className="text-5xl font-semibold text-black leading-tight mb-6">Meet Our Expert Team: Dedicated Developers Ready to Help</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <h3 className="text-xl font-semibold">Software Engineers</h3>
                        <p>Proficient in all the latest technologies, ready to start your next project.</p>
                                            <Image
                                        src="/home-img/Digital-Marketing-Excellence.jpeg"
                                        width={500}
                                        height={500}
                                        alt="Software Engineer"
                                        className="mt-4 rounded-lg"
                                      />
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <h3 className="text-xl font-semibold">Data Scientists</h3>
                        <p>Helping you make sense of your data to increase efficiency.</p>
                        <Image
                                        src="/home-img/Digital-Marketing-Excellence.jpeg"
                                        width={500}
                                        height={500}
                                        alt="Data Scientist"
                                        className="mt-4 rounded-lg"
                                      />
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                        <h3 className="text-xl font-semibold">Cloud Computing Experts</h3>
                        <p>Dedicated to crafting the perfect cloud architecture for your business.</p>
                        <Image
                                        src="/home-img/Digital-Marketing-Excellence.jpeg"
                                        width={500}
                                        height={500}
                                        alt="Cloud Computing Expert"
                                        className="mt-4 rounded-lg"
                                      />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MeetOurExpert