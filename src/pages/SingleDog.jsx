import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleDog = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { name } = useParams();

  useEffect(() => {
    setIsLoading(true);

    fetch(`https://dog.ceo/api/breed/${name}/images`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data.message.slice(0, 20));
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoading(false);
      });
  }, [name]);

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-pink-100 py-10 px-4 lg:px-24">
      
      {/* Title */}
      <h2 className="text-3xl font-extrabold text-blue-800 text-center capitalize mb-10">
        {name} Dogs
      </h2>

      {/* Loading */}
      {isLoading && (
        <p className="text-center text-lg font-medium">Loading images...</p>
      )}

      {/* Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={img}
              alt={name}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Back Button */}
      <div className="pt-10 flex justify-center">
        <Link to="/dogs">
          <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-lg font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300">
            <span className="relative px-6 py-2.5 bg-white text-blue-700 rounded-md group-hover:bg-opacity-0">
              ← Back Home
            </span>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default SingleDog;