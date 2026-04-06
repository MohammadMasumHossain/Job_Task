import React from "react";
import { FaPlay } from "react-icons/fa";

const VideoSection = () => {
  return (
    <div className="bg-white pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative group overflow-hidden rounded-2xl shadow-lg">
          
          {/* Background */}
          <div
            className="h-200 w-full bg-cover bg-center transition-all duration-500 group-hover:scale-105"
            style={{
              backgroundImage:
                "url(https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img11.webp)",
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Button */}
          <div
            className="
              absolute 
              left-10 bottom-10 
              group-hover:left-1/2 
              group-hover:top-1/2 
              group-hover:bottom-auto
              group-hover:-translate-x-1/2 
              group-hover:-translate-y-1/2
              transition-all duration-500
            "
          >
            <a
              href="https://www.youtube.com/watch?v=SF4aHwxHtZ0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white text-black pl-2 pr-6 pt-2 pb-2 rounded-full shadow-md"
            >
              {/* Icon */}
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm">
                <FaPlay></FaPlay>
              </div>

              {/* Text */}
              <span className="text-sm uppercase tracking-wide font-medium">
                Play Reel
              </span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VideoSection;