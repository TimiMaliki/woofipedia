import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const SingleDog = () => {
  const [dog, setDog] = useState([]);
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
      .then((res) => res.json())
      .then((data) => setDog(data))
      .catch((err) => console.log(err.message));
  }, [name]);

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-pink-100 py-10 px-4 lg:px-24">
      {dog.map((dog) => (
        <div
          key={dog.id}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white shadow-2xl rounded-xl overflow-hidden border border-blue-100"
        >
          {/* Image Section */}
          <div className="w-full h-96 lg:h-full">
            <img
              src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
              alt={dog.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info Section */}
          <div className="p-8 flex flex-col justify-center space-y-5 text-gray-800">
            <h2 className="text-3xl font-extrabold text-blue-800">
              {dog.name}
            </h2>

            <div className="text-lg font-medium">
              <span className="text-blue-600">Bred for:</span>{" "}
              {dog.bred_for || "Not available"}
            </div>

            <div className="text-lg font-medium">
              <span className="text-blue-600">Life Span:</span> {dog.life_span}
            </div>

            <div className="text-lg font-medium">
              <span className="text-blue-600">Origin:</span>{" "}
              {dog.origin || "Not found"}
            </div>

            <div className="text-lg font-medium">
              <span className="text-blue-600">Temperament:</span>{" "}
              {dog.temperament || "Not listed"}
            </div>

            <div className="text-lg font-medium">
              <span className="text-blue-600">Weight:</span>{" "}
              Imperial: {dog.weight?.imperial} lbs | Metric:{" "}
              {dog.weight?.metric} kg
            </div>

            <div className="pt-6">
              <Link to="/dogs">
                <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-lg font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300">
                  <span className="relative w-40 px-5 py-2.5 transition-all ease-in duration-200 bg-white text-blue-700 rounded-md group-hover:bg-opacity-0">
                    ← Back Home
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SingleDog;
