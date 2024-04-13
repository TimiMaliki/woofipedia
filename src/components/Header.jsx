import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="w-full bg-white text-black justify-between text-center items-center p-8 sticky">
      <Link to="/">
        <h1 className="text-3xl font-extrabold text-center title">Maliki</h1>
      </Link>

      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li className="font-sans text-base">
          <Link to="/">
            <h2 className="p-2 text-2xl">Home</h2></Link>
        </li>
        <li className="font-sans text-base">
          <Link to="/sign">
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                sign up
              </span>
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
