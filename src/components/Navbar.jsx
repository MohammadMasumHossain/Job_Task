// src/components/Navbar.jsx
import React, { useState } from "react";

// Home preview images (from original site)
const homeItems = [
  {
    title: "Home 1",
    img: "https://floka.casethemes.net/wp-content/uploads/2025/07/01_Home.jpg",
  },
  {
    title: "Home 2",
    img: "https://floka.casethemes.net/wp-content/uploads/2025/07/02_Home.jpg",
  },
  {
    title: "Home 3",
    img: "https://floka.casethemes.net/wp-content/uploads/2025/07/03_Home.jpg",
  },
  {
    title: "Home 4",
    img: "https://floka.casethemes.net/wp-content/uploads/2025/07/04_Home.jpg",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(null);
  const [mobile, setMobile] = useState(false);

  return (
    <nav className="w-full bg-white border-b font-sans relative z-50">
      
      {/* Top Bar */}
      <div className="flex items-center justify-between px-10 py-5">
        
        {/* Logo */}
        <h1 className="text-[26px] font-semibold tracking-tight">
          Floka
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-[15px] font-medium text-gray-800">
          
          {/* HOME */}
          <li
            className="relative"
            onMouseEnter={() => setOpen("home")}
            onMouseLeave={() => setOpen(null)}
          >
            <span className="cursor-pointer hover:text-black">
              Home
            </span>

            {/* Mega Menu */}
            {open === "home" && (
              <div className="absolute left-0 top-full mt-6 bg-white shadow-2xl p-6 grid grid-cols-4 gap-6 w-225">
                {homeItems.map((item, i) => (
                  <div key={i} className="group cursor-pointer">
                    
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src={item.img}
                        alt=""
                        className="w-full h-55 object-cover group-hover:scale-105 transition duration-300"
                      />
                    </div>

                    <p className="mt-2 text-sm font-semibold">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </li>

          {/* PAGES */}
          <li
            className="relative"
            onMouseEnter={() => setOpen("pages")}
            onMouseLeave={() => setOpen(null)}
          >
            <span className="cursor-pointer hover:text-black">
              Pages
            </span>

            {open === "pages" && (
              <ul className="absolute top-full mt-4 w-56 bg-white shadow-xl p-4 space-y-3 text-[14px]">
                <li className="hover:text-black cursor-pointer">About Us</li>
                <li className="hover:text-black cursor-pointer">Our Team</li>
                <li className="hover:text-black cursor-pointer">Services</li>
                <li className="hover:text-black cursor-pointer">Careers</li>
                <li className="hover:text-black cursor-pointer">FAQs</li>
              </ul>
            )}
          </li>

          {/* OTHER LINKS */}
          <li className="cursor-pointer hover:text-black">Portfolio</li>
          <li className="cursor-pointer hover:text-black">Blog</li>
        </ul>

        {/* Right Text */}
        <div className="hidden md:block text-[14px] text-gray-500">
          info@floka.com
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobile(!mobile)}
        >
          ☰
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      {mobile && (
        <div className="md:hidden bg-white px-6 pb-6 space-y-4 text-[16px] font-medium">
          <p>Home</p>
          <p>Pages</p>
          <p>Portfolio</p>
          <p>Blog</p>
        </div>
      )}
    </nav>
  );
}