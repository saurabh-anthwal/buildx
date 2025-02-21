import React from 'react';
import Image from 'next/image';

const ClientStory = () => {
  return (
    <section className="container mx-auto font-body">
    <h2 className="text-4xl font-semibold mb-6">Client Success Stories</h2>
    <p className="text-lg text-gray-600 font-[500] font-body mb-10">{`Discover how we've helped businesses like yours achieve remarkable growth and success. Our client testimonials showcase the impact of our services and the value we deliver.`}</p>

    <div className="flex flex-col md:flex-row justify-between items-start w-full">
      <div className="mr-5 w-[60%]">
        <div className="py-5 mb-5">
          <h4 className="font-semibold text-2xl mb-4">John S. - CEO, Tech Startup</h4>
          <p className="text-lg w-3/4">{`"Their SEO strategies transformed our online presence, driving a 300% increase in organic traffic."`}</p>
        </div>
        <div className="py-5 mb-5">
          <h4 className="font-semibold text-2xl mb-4">Emily R. - Marketing Director, Retail Chain</h4>
          <p className="text-lg w-3/4">{`"The ad management services significantly improved our ROI and customer engagement."`}</p>
        </div>
        <div className="py-5 mb-5">
          <h4 className="font-semibold text-2xl mb-4">David L. - Founder, E-commerce Business</h4>
          <p className="text-lg w-3/4">{`"The website they developed is not only beautiful but also highly functional, boosting our sales."`}</p>
        </div>
      </div>
      <div className="w-[40%]">
        <Image
          src="/service-img/client-success.jpeg"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
    </div>
  </section>
  )
}

export default ClientStory