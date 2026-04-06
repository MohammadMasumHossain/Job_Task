import React from "react";
import { motion } from "framer-motion";

const circleText =
  "WANT IT TO SOUND PLAYFUL, LUXURIOUS, OR MORE / ";

export default function CreativeSection() {
  return (
    <section className="bg-[#f5f5f5] py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-40 items-start">

        {/* LEFT SIDE */}
        <div className="flex flex-col mt-30  items-center gap-6">

          {/* Image */}
          <div className="w-50 h- overflow-hidden rounded-xl">
            <img
              src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img12-600x600.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-xs uppercase tracking-wide text-gray-600">
            Get rewards
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1  space-y-10">

          {/* Circle Text */}
  <div className="relative w-16 h-16 m-8">
  <div className="absolute inset-0 animate-spin-slow">
    {circleText.split("").map((char, i) => (
      <span
        key={i}
        className="absolute left-1/2 top-1/2 origin-center text-[8px] text-gray-500"
        style={{
          transform: `rotate(${i * 8}deg) translateY(-40px)`, // smaller radius
        }}
      >
        {char}
      </span>
    ))}
  </div>

  {/* Center SVG instead of trophy */}
  <div className="absolute inset-0 flex items-center justify-center w-full h-full text-gray-500">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
    >
      <g opacity="0.1" clipPath="url(#clip0_25_63)">
        <path
          d="M34.9451 2.41608H31.2563C31.2748 1.96404 31.2845 1.5101 31.2845 1.05469C31.2845 0.472219 30.8123 0 30.2298 0H5.77025C5.18778 0 4.71556 0.472219 4.71556 1.05469C4.71556 1.5101 4.72519 1.96411 4.74368 2.41608H1.05481C0.472341 2.41608 0.00012207 2.8883 0.00012207 3.47077V5.73771C0.00012207 11.9503 4.48901 17.1338 10.3936 18.2162C10.8994 18.7689 11.4308 19.2672 11.9848 19.7059C13.8049 21.1469 14.8487 23.2713 14.8487 25.5343V29.6719H10.8408C10.2583 29.6719 9.78607 30.1441 9.78607 30.7266V33.8906H8.73139C8.14892 33.8906 7.6767 34.3628 7.6767 34.9453C7.6767 35.5278 8.14892 36 8.73139 36H27.2688C27.8513 36 28.3235 35.5278 28.3235 34.9453C28.3235 34.3628 27.8513 33.8906 27.2688 33.8906H26.2141V30.7266C26.2141 30.1441 25.7419 29.6719 25.1594 29.6719H21.1514V25.5343C21.1514 23.2713 22.1952 21.1469 24.0153 19.7058C24.5693 19.2671 25.1006 18.7688 25.6064 18.2162C31.511 17.1338 35.9999 11.9503 35.9999 5.73771V3.47077C35.9998 2.8883 35.5277 2.41608 34.9451 2.41608ZM2.1095 5.73771V4.52545H4.8976C5.18018 7.20274 5.78853 9.76922 6.69809 12.0823C7.16145 13.2607 7.69597 14.3565 8.29165 15.3576C4.64715 13.6858 2.1095 10.0027 2.1095 5.73771ZM33.8905 5.73771C33.8905 10.0028 31.3528 13.6859 27.7083 15.3577C28.3041 14.3565 28.8386 13.2607 29.3019 12.0824C30.2114 9.76929 30.8198 7.20281 31.1024 4.52552H33.8904L33.8905 5.73771Z"
          fill="#0A0A0A"
        />
      </g>
      <defs>
        <clipPath id="clip0_25_63">
          <rect width="36" height="36" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </div>
</div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl  md:text-3xl font-semibold leading-tight text-black"
          >
            Driven by passion and grounded <br></br> in expertise, our team turns bold<br></br>
            ideas into reality, leading the way <br></br> in creative innovation.
          </motion.h2>

          {/* Awards */}
          <div className="space-y-3">
            {[
              ["Best Designer Awards", "Awwwards", "2025"],
              ["Peaky UI Designer", "Google", "2024"],
              ["Great in UX", "Apple", "2023"],
              ["Best Website Pick", "Microsoft", "2022"],
              ["Nelson UI & UX Designer", "Samsung", "2021"],
            ].map((item, i) => (
  <div
    key={i}
    className="relative grid grid-cols-3 items-center py-4 px-5 text-sm tracking-wide text-gray-700 
               border-b border-gray-200 overflow-hidden
               transition-all duration-300 
               hover:bg-white hover:text-black hover:shadow-lg hover:rounded-lg 
               cursor-pointer"
  >
    <motion.span
      className="capitalize font-medium text-left"
      whileHover={{ x: 10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {item[0]}
    </motion.span>

    <motion.span
      className="text-center text-gray-400 uppercase"
      whileHover={{ x: 10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {item[1]}
    </motion.span>

    <motion.span
      className="text-right text-gray-400"
      whileHover={{ x: 10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {item[2]}
    </motion.span>
  </div>
))}
          </div>

        </div>
      </div>

      {/* Slow spin animation */}
      <style>
        {`
          .animate-spin-slow {
            animation: spin 12s linear infinite;
          }
        `}
      </style>
    </section>
  );
}