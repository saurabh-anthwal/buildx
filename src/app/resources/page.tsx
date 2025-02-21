"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function ResourcesPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const color = "#3498db"; // Blue color for better visibility

  async function getBlogs() {
    const SHEET_URL =
      "https://script.google.com/macros/s/AKfycbwY1BNE15tZEXKDvVJZKFXr8-27e-ZGkVcAPAzSJ5ARRP7to5ooMAthSXRMRWs5S5mqGQ/exec";

    try {
      const response = await fetch(SHEET_URL);
      const data = await response.json();

      if (data?.data) {
        setBlogs(data.data);
      } else {
        console.error("Unexpected API response format:", data);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Latest Blog Posts</h1>
      <p className="text-lg text-gray-600 text-center mb-8">
        Get expert opinions and deep insights into IT and Digital solutions.
      </p>

      {loading ? (
        // Centered Loader
        <div className="flex justify-center items-center h-60">
          <ClipLoader color={color} loading={loading} size={50} />
        </div>
      ) : blogs.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog: any, index: number) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105"
            >
              <Image
                src={blog.Image_url}
                alt={blog.Title}
                width={600}
                height={400}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{blog.Title}</h2>
                <p className="text-gray-600 mt-2">{blog.Description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No blogs available.</p>
      )}
    </div>
  );
}
