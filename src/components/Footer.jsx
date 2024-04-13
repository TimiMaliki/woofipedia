import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
<footer className="w-full h-full bg-black justify-between text-center items-center p-14 lg:p-28">
    <div className="w-full h-full ">
        <div className="flex items-center justify-between">
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <Link to={'*'}>
                <li>
                    <a href="" className="hover:underline me-4 md:me-6">About</a>
                </li>
                </Link>
                <Link to={'*'}>
                <li>
                    <a href="" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                </Link>
                <Link to={'*'}>
                <li>
                    <a href="" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                </Link>
                <Link to={'*'}>
                <li>
                    <a href="" className="hover:underline">Contact</a>
                </li>
                </Link>
               
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Maliki™. All Rights Reserved.</span>
    </div>
</footer>

  )
}

export default Footer