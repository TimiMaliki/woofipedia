import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import dogHero from "../assets/kangal.jpg"; // Replace or reuse your asset

const Signin = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", form);
    // Add your login logic here
    // e.g., Firebase auth, JWT request, etc.
    navigate("/"); // Navigate to homepage after login
  };

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-pink-100 via-white to-indigo-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl bg-white shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Image */}
        <div className="hidden md:block">
          <img
            src={dogHero}
            alt="Dog Login"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="p-10 md:p-16">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
            Welcome Back 👋
          </h2>
          <p className="text-gray-500 mb-6">
            Log in to continue exploring dog breeds on Woofipedia.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="john@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-500 text-white font-bold rounded-lg hover:opacity-90 transition"
            >
              Sign In
            </button>

            <p className="text-sm text-gray-600 mt-4 text-center">
              Don't have an account?{" "}
              <Link to="/SignUp" className="text-blue-600 font-medium">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signin;
