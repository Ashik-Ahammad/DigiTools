import React from "react";
import { FaTwitter, FaGithub, FaLinkedin, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#101727] border-t border-gray-200 pt-16 pb-10">
      
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-center md:text-left">
          
          {/* Logo & Description */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start">
            <h2 className="text-3xl font-bold tracking-tighter text-white mb-6">
              DigiTools
            </h2>

            <p className="text-zinc-400 text-lg max-w-md">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Product */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start">
            <h3 className="text-white font-semibold mb-6 text-lg">Product</h3>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="/" className="hover:text-white transition">Features</a></li>
              <li><a href="/" className="hover:text-white transition">Pricing</a></li>
              <li><a href="/" className="hover:text-white transition">Templates</a></li>
              <li><a href="/" className="hover:text-white transition">Integrations</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start">
            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="/" className="hover:text-white transition">About</a></li>
              <li><a href="/" className="hover:text-white transition">Blog</a></li>
              <li><a href="/" className="hover:text-white transition">Careers</a></li>
              <li><a href="/" className="hover:text-white transition">Press</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start">
            <h3 className="text-white font-semibold mb-6 text-lg">Resources</h3>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="/" className="hover:text-white transition">Documentation</a></li>
              <li><a href="/" className="hover:text-white transition">Help Center</a></li>
              <li><a href="/" className="hover:text-white transition">Community</a></li>
              <li><a href="/" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Social Links*/}
          <div className="md:col-span-2 flex flex-col items-center md:items-start">
            <h3 className="text-white font-semibold mb-6 text-lg">Social</h3>

            <div className="flex gap-5 text-xl text-zinc-400 justify-center md:justify-start">
              <a href="https://www.instagram.com/" className="hover:text-blue-500 transition bg-white rounded-full p-1.5">
                <FaInstagram />
              </a>
              <a href="https://facebook.com/" className="hover:text-blue-500 transition bg-white rounded-full p-1.5">
                <FaFacebook />
              </a>
              <a href="https://x.com/home" className="hover:text-blue-500 transition bg-white rounded-full p-1.5">
                <FaX/>
              </a>

            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 text-sm text-zinc-500 text-center md:text-left">
          
          <div>© 2026 DigiTools. All rights reserved.</div>

          <div className="flex gap-6 justify-center md:justify-start">
            <a href="/" className="hover:text-red-400 transition">Privacy Policy</a>
            <a href="/" className="hover:text-red-400 transition">Terms of Service</a>
            <a href="/" className="hover:text-red-400 transition">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;