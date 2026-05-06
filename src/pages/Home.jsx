import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBtn from "../components/SearchBtn";

const Home = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch random dog images for hero preview
    fetch("https://dog.ceo/api/breeds/image/random/6")
      .then((res) => res.json())
      .then((data) => setImages(data.message))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-indigo-100 via-white to-pink-100 px-4 py-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold text-black leading-tight">
            Discover Dogs <br />
            <span className="text-blue-600">Visually & Instantly</span>
          </h1>

          <p className="text-lg text-black max-w-xl mx-auto lg:mx-0">
            Explore hundreds of dog breeds through real images. 
            Search, browse, and dive into collections powered by a live API.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <Link to="/dogs">
              <SearchBtn />
            </Link>

            <button
              onClick={() => window.scrollTo({ top: 700, behavior: "smooth" })}
              className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
            >
              Browse Preview ↓
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE GRID */}
        <div className="grid grid-cols-2 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden shadow-md ${
                index === 0 ? "col-span-2 h-60" : "h-40"
              }`}
            >
              <img
                src={img}
                alt="dog"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* FEATURE SECTION */}
      <section className="mt-20 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-black mb-10">
          Why Woofipedia?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-white shadow-md">
            <h3 className="text-xl font-semibold mb-2">Smart Search</h3>
            <p className="text-black">
              Quickly find any breed with instant filtering.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white shadow-md">
            <h3 className="text-xl font-semibold mb-2">Real Images</h3>
            <p className="text-black">
              See real dog images fetched live from the API.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white shadow-md">
            <h3 className="text-xl font-semibold mb-2">Fast & Responsive</h3>
            <p className="text-black">
              Built for speed and smooth browsing on all devices.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;