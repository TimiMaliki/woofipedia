import React from 'react';
import Dog from "../assets/blackDog.jpeg";
import SearchBtn from '../components/SearchBtn';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100 flex items-center justify-center px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl w-full py-12">
        {/* Text Section */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-800 text-center lg:text-left">
            Woofipedia: <br className="hidden sm:inline" />
            <span className="text-indigo-600">The Visual Dog Gallery</span>
          </h1>

          <p className="text-lg text-gray-700 text-center lg:text-left">
            Welcome to <strong>Woofipedia</strong>, the ultimate visual destination for dog lovers! We've simplified your search to bring you the most stunning, high-resolution imagery of every dog breed imaginable.
          </p>

          <p className="text-lg text-gray-700 text-center lg:text-left">
            Powered by the Dog CEO API, our platform allows you to browse through hundreds of breeds and instantly generate random galleries. Whether you want to see a dozens of <strong>Hounds</strong>, <strong>Poodles</strong>, or <strong>Retrievers</strong>, Woofipedia serves up the cutest pups at the click of a button.
          </p>

          <p className="text-lg text-gray-700 text-center lg:text-left">
            Start your tail-wagging adventure today. Simply hit search, pick a breed, and get lost in a world of endless dog photos!
          </p>

          <div className="pt-4 flex justify-center lg:justify-start">
            <Link to="/dogs">
              <SearchBtn />
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative group">
          {/* Decorative Background Element */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src={Dog}
              alt="A beautiful black dog"
              className="object-cover w-full h-[500px] lg:h-full hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;