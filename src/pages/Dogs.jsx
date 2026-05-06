import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Search from "./Search";
import { Link } from "react-router-dom";

export const Dogs = () => {
  const [dogs, setDogs] = useState([]);
  const [filteredDogs, setFilteredDogs] = useState([]);
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((data) => {
        const breedNames = Object.keys(data.message);
        const limitedBreeds = breedNames.slice(0, 70); 
        setDogs(breedNames);
        setFilteredDogs(limitedBreeds);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      setFilteredDogs(dogs.slice(0, 21));
      return;
    }
    const results = dogs.filter((breed) =>
      breed.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredDogs(results.slice(0, 20)); 
  };

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className="w-full p-2">
      <Search text={text} setText={setText} handleSubmit={handleSubmit} isLoading={isLoading} />
      
      <div className="mt-6 p-6">
        <h1 className="text-3xl font-bold text-center mb-10">Dog Breed Explorer</h1>

        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {filteredDogs.map((breed) => (
            <DogCard key={breed} breed={breed} />
          ))}
        </div>

        <div className="md:hidden">
          <Carousel responsive={responsive} infinite={true}>
            {filteredDogs.map((breed) => (
              <div key={breed} className="px-2">
                <DogCard breed={breed} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

const DogCard = ({ breed }) => {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    let isMounted = true;
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) setImgUrl(data.message);
      })
      .catch(() => {
        if (isMounted) setImgUrl("");
      });
    
    return () => { isMounted = false; };
  }, [breed]);

  return (
   <Link to={`/dogs/${breed}`}>
      <div className="border rounded shadow-lg overflow-hidden hover:shadow-2xl transition-shadow bg-white">
        <div className="h-64 overflow-hidden bg-gray-200">
          {imgUrl ? (
            <img src={imgUrl} alt={breed} className="w-full h-full object-cover" />
          ) : (
            <div className="flex items-center justify-center h-full">Loading...</div>
          )}
        </div>
        <div className="p-4 text-center">
          <h3 className="text-xl font-bold capitalize text-gray-800">{breed}</h3>
        </div>
      </div>
    </Link>
  );
};