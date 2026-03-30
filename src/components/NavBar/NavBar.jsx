import React from "react";
import { ShoppingCart, TextAlignJustify } from "lucide-react";

const NavBar = ({ carts }) => {
  return (
    <div className="navbar shadow-sm px-4 sm:px-6 md:px-8 lg:px-12">
      
      <div className="navbar-start">
        
        <div className="dropdown">
          <div tabIndex={0} role="button" className="mr-3 hover:cursor-pointer lg:hidden">
            <TextAlignJustify className="w-6 h-6 text-blue-950" />
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-1 p-4 shadow bg-base-100 rounded-box w-60"
          >
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>

            <div className="divider my-2"></div>

            <li><a>Login</a></li>
            <li>
              <a className="btn bg-[#4F39F6] text-white rounded-full mt-2 md:hidden">
                Get Started
              </a>
            </li>
          </ul>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-600">
          <a href="/">DigiTools</a>
        </h1>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-6 xl:gap-10 px-1 text-lg whitespace-nowrap">
          <li><a className="hover:underline hover:bg-transparent">Products</a></li>
          <li><a className="hover:underline hover:bg-transparent">Features</a></li>
          <li><a className="hover:underline hover:bg-transparent">Pricing</a></li>
          <li><a className="hover:underline hover:bg-transparent">Testimonials</a></li>
          <li><a className="hover:underline hover:bg-transparent">FAQ</a></li>
        </ul>
      </div>

      <div className="navbar-end gap-3 sm:gap-4 md:gap-5">
        
        <div className="indicator">
          <span className="indicator-item badge badge-error badge-sm -mt-0.5 text-white">
            {carts.length}
          </span>
          <button className="bg-transparent">
            <ShoppingCart className="text-blue-950 w-6 h-6" />
          </button>
        </div>

        <a className="hidden sm:block text-blue-950 font-semibold hover:underline cursor-pointer">
          Login
        </a>

        <a className="hidden sm:inline-flex btn bg-[#4F39F6] rounded-full text-white btn-sm md:btn-md">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default NavBar;