import React from 'react';

const ResourcesPage = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <section
        className="relative text-center py-16 bg-cover bg-center rounded-lg shadow-sm"
        style={{
          backgroundImage: "url('https://storage.googleapis.com/a1aa/image/edeee4e9-ca13-458b-abe1-519472a87575.jpeg')", // Replace with your desired image URL
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-5xl font-bold text-white mb-4">Resources & Blog</h1>
          <p className="text-lg text-gray-300">
            Stay ahead in the digital world with expert insights, trends, and IT solutions.
          </p>
        </div>
      </section>

      {/* Resources Section */}
      <section className="my-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Resources</h2>
        <p className="text-lg text-gray-600 text-center mb-8">
          Explore valuable resources to elevate your IT & Digital marketing strategies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Website Development Best Practices",
              link: "/resource1",
              desc: "A complete guide to modern web development strategies.",
            },
            {
              title: "SEO Strategies for 2024",
              link: "/resource2",
              desc: "Learn how to boost your website ranking with cutting-edge SEO.",
            },
            {
              title: "Digital Marketing Insights",
              link: "/resource3",
              desc: "Proven techniques to maximize engagement and ROI.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-lg text-gray-600 mb-4">{item.desc}</p>
              <a href={item.link} className="text-blue-600 font-semibold hover:underline">
                Read More →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="my-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Latest Blog Posts</h2>
        <p className="text-lg text-gray-600 text-center mb-8">
          Get expert opinions and deep insights into IT and Digital solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Top 5 Web Development Trends",
              link: "/blog1",
              desc: "Discover the latest innovations shaping the future of web development.",
            },
            {
              title: "Google Ads vs. Facebook Ads",
              link: "/blog2",
              desc: "Which platform suits your business best? A detailed comparison.",
            },
            {
              title: "Lead Generation Strategies",
              link: "/blog3",
              desc: "How to create high-converting funnels for digital success.",
            },
          ].map((post, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
              <p className="text-lg text-gray-600 mb-4">{post.desc}</p>
              <a href={post.link} className="text-blue-600 font-semibold hover:underline">
                Read More →
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
