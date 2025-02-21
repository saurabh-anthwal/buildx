import React from 'react'

const HeroSection = () => {
  return (
    <section
    className="relative h-[50vh] bg-cover bg-center"
    style={{
      backgroundImage:
        "url('/service-img/banner2.jpeg')",
    }}
  >
    <div className="flex items-center justify-center h-full bg-black bg-opacity-70">
      <div className="w-2/3 mx-auto text-white">
        <h1 className="text-5xl font-semibold">
          Modern IT and Digital Services for Business Growth
        </h1>
        <p className="mt-4 text-lg">
          {`We offer cutting-edge IT and digital services designed to propel your business forward. We create a bridge between the new modern AI technologies and customer needs. `}
        </p>
      </div>
    </div>
  </section>
  )
}

export default HeroSection