import React from "react";
import { FaPlay } from "react-icons/fa";

const HappyUsersSection = () => {
  const logos = [
    "https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon8.svg",
    "https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon9.svg",
    "https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon10.svg",
    "https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon11.svg",
    "https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon12.svg",
    "https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon13.svg",
    "https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon14.svg",
  ];

  return (
    <div className="bg-[#f5f5f5] py-20">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="flex justify-between mb-6">
          <h4 className="uppercase text-xs tracking-widest text-gray-500">
            Happy Users
          </h4>
          <p className="text-xs text-gray-400">
            ©2025 CASE-THEMES™ STUDIO
          </p>
        </div>

        {/* LOGO GRID (NO BIG WHITE BOX) */}
        <div className="grid grid-cols-4 gap-1">

          {logos.map((logo, i) => (
            <div
              key={i}
              className="bg-white rounded-t-xl rounded-b-xl  h-34 flex items-center justify-center shadow-sm"
            >
              <img src={logo} alt="logo" className="h-6 object-contain" />
            </div>
          ))}

          {/* Last Card */}
          <div className="bg-white rounded-t-xl rounded-b-xl h-34 flex flex-col items-center justify-center text-center shadow-sm">
            <span className="text-[10px] text-gray-400">
              NEXT CAN BE YOU.
            </span>
            <h3 className="text-xs font-semibold uppercase mt-1">
              LET’S TALK
            </h3>
          </div>

        </div>

        {/* VIDEO (NO WHITE BACKGROUND) */}
        <div className="mt-8 relative group overflow-hidden rounded-2xl">

          {/* Image */}
          <div
            className="h-100 w-full bg-cover bg-center transition duration-500 group-hover:scale-105"
            style={{
              backgroundImage:
                "url(https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img11.webp)",
            }}
          />

          {/* Button */}
          <div className="
            absolute left-6 bottom-6
            group-hover:left-1/2 group-hover:top-1/2 group-hover:bottom-auto
            group-hover:-translate-x-1/2 group-hover:-translate-y-1/2
            transition-all duration-500
          ">
            <a
              href="https://www.youtube.com/watch?v=SF4aHwxHtZ0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white rounded-full pl-2 pr-5 py-2 shadow-md"
            >
              {/* Black icon */}
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-black text-white">
                <FaPlay size={12} />
              </div>

              <span className="text-xs font-semibold uppercase tracking-wide text-black">
                Play Reel
              </span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

export default HappyUsersSection;