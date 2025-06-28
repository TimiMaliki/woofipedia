import React from 'react';
import Dog from "../assets/blackDog.jpeg";
import SearchBtn from '../components/SearchBtn';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-pink-100 via-white to-indigo-100 flex items-center justify-center px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl w-full py-12">
        {/* Text Section */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-800 text-center lg:text-left">
            Woofipedia: <br className="hidden sm:inline" />
            <span className="text-pink-600">Explore Dog Breeds API</span>
          </h1>

          <p className="text-lg text-gray-700 text-justify">
            Welcome to <strong>Woofipedia</strong>, your go-to source for discovering everything about your favorite canine companions! Whether you're a seasoned dog enthusiast or simply looking to learn more about different breeds, Woofipedia has you covered.
          </p>

          <p className="text-lg text-gray-700 text-justify">
            With our API, you can search for specific breeds and uncover details ranging from temperament and grooming needs to exercise requirements and historical backgrounds. Whether you're curious about the energetic Australian Shepherd, the regal Siberian Husky, or the playful Dachshund—Woofipedia brings it all to your paws.
          </p>

          <p className="text-lg text-gray-700 text-justify">
            Join us on this tail-wagging adventure through the world of dogs. Learn, explore, and appreciate the diverse and wonderful world of dog breeds!
          </p>

          <div className="pt-4 flex justify-center lg:justify-start">
            <Link to="dogs">
              <SearchBtn />
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="">
          <div className="w-full h-full rounded-3xl overflow-hidden shadow-lg border-4 border-pink-200">
            <img
              src={Dog}
              alt="A beautiful black dog"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
