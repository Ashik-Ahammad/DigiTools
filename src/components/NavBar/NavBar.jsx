import React from 'react';
import { ShoppingCart } from 'lucide-react';

const NavBar = () => {
  return (
    <div className="navbar shadow-sm lg:px-15 md:px-10 sm:px-10">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-xl">
         <h1 className='lg:text-4xl md:text-3xl sm:text-3xl font-extrabold text-blue-600'>DigiTools</h1>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-10 px-1 text-lg ">
          <li>
            <a className="hover:underline hover:bg-transparent hover:text-gray-600 text-lg">Products</a>
          </li>
          <li>
            <a className="hover:underline hover:bg-transparent hover:text-gray-600 text-lg">Features</a>
          </li>
          <li>
            <a className="hover:underline hover:bg-transparent hover:text-gray-600 text-lg">Pricing</a>
          </li>
          <li>
            <a className="hover:underline hover:bg-transparent hover:text-gray-600 text-lg">Testimonials</a>
          </li>
          <li>
            <a className="hover:underline hover:bg-transparent hover:text-gray-600 text-lg">FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <button className=" bg-transparent">
          <ShoppingCart className="text-blue-950 m-2.5"></ShoppingCart>
        </button>

        <a className="rounded-full text-blue-950 font-semibold hover:cursor-pointer">Login</a>
        <a className="btn bg-primary rounded-full text-white">Get Started</a>
      </div>
    </div>
  );
};

export default NavBar;