import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Search from "./Search";
import { Link } from "react-router-dom";

export const Dogs = () => {
  const [dogs, setDogs] = useState([]);
  const [text, setText] = useState("");
  const [search, setSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.thedogapi.com/v1/breeds?limit=100&api_key=live_kgmdlIAmLqwoovvFLwnou0KI62vpzYC3MyTODQZgi1mTQ97mINVT6xnZsDMUF6EN`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setDogs(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoading(false);
      });
    setSearch(false);
  }, []);

  const searchedApi = () => {
    setIsLoading(true);
    fetch(`https://api.thedogapi.com/v1/breeds/search?q=${text}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setDogs(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err.message);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    searchedApi();
    setSearch(true);
    if (!text) {
      alert("empty field");
    }
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // {{endpoint}}v1/images/search?breed_ids=beng&include_breeds=true
  // https://api.thecatapi.com/v1/images/search?breed_ids={breed.id}
  // https://api.thecatapi.com/v1/breeds

  return (
    <div className="w-full h-full p-2">
      
      <Search
        text={text}
        setText={setText}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />
      <div className="w-full h-full mt-6 p-6 mb-10">
        <h1 className="text-3xl font-bold text-center mb-10">
          Know More About Your Favourite Dogs
        </h1>

        <div className="cards-container mt-4 w-full h-full md:grid lg:grid hidden md:grid-cols-2 lg:grid-cols-3  gap-4">
          {!search ? (
            dogs.map((dog) => (
              <Link to={`${dog.name}`} key={dog.id}>
                <div
                  className="card w-full h-full border border-blue-300 rounded shadow-lg cursor-pointer hover:border-blue-900 hover:bg-blue-300 hover:text-white transition-all  duration-200 "
                  key={dog.id}
                >
                  <img
                    src={dog.image.url}
                    alt={dog.name}
                    className="rounded w-full object-cover h-96"
                  />
                  <div className="w-full h-full mt-4 p-2">
                    <div className="name flex justify-center">
                      <h3 className="text-xl font-semibold p-2 ">
                        Name: {dog.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <>
              {dogs.map((dog) => (
                <Link to={`${dog.name}`} key={dog.id}>
                  <div
                    className="card w-full h-full border border-blue-300 rounded shadow-lg cursor-pointer hover:border-blue-900 hover:bg-blue-300 hover:text-white transition-all  duration-200 "
                    key={dog.id}
                  >
                    <div className="img w-full h-full">
                      <img
                        src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
                        alt={dog.name}
                      />
                      <div className="w-full h-full mt-4 text-center">
                        <div className="name flex justify-center">
                          <h3 className="text-xl font-semibold p-2">
                            Name : {dog.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </>
          )}
        </div>

        {/* multiple-carousel */}
        <div className="cards-container  lg:hidden mt-4 w-full h-full">
           
            {!search ?  (dogs.map((dog) => (
                <Link to={`${dog.name}`} key={dog.id}>
                  <div
                    className="card w-full h-full border border-blue-300  rounded mb-4  lg:mb-0 shadow-lg cursor-pointer hover:border-blue-900 hover:bg-blue-300 hover:text-white transition-all  duration-200 "
                    key={dog.id}
                  >
                    <img
                      src={dog.image.url}
                      alt={dog.name}
                      className="rounded w-full object-cover h-96"
                    />
                    <div className="w-full h-full mt-4 p-2">
                      <div className="name flex justify-center">
                        <h3 className="text-xl font-semibold p-2 ">
                          Name: {dog.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            )  : (
             
               <Carousel responsive={responsive} infinite={true}>
                {dogs.map((dog) => (
                  <Link to={`${dog.name}`} key={dog.id}>
                    <div
                      className="card w-full h-full border border-blue-300 rounded shadow-lg cursor-pointer hover:border-blue-900 hover:bg-blue-300 hover:text-white transition-all  duration-200 "
                      key={dog.id}
                    >
                      <div className="img w-full h-full">
                        <img
                          src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
                          alt={dog.name}
                        />
                        <div className="w-full h-full mt-4 text-center">
                          <div className="name flex justify-center">
                            <h3 className="text-xl font-semibold p-2">
                              Name : {dog.name}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
                </Carousel>
            )}
        </div>
      </div>
    </div>
  );
};

export default Dogs;
