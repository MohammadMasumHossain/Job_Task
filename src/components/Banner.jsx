// // src/components/Banner.jsx
// import React from "react";

// const Banner = () => {
//   return (
//     <div className="relative h-screen w-full overflow-hidden">

//       {/* 🎥 Background Video */}
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       >
//         <source
//           src="https://floka.casethemes.net/wp-content/uploads/2025/06/home-1-video.mp4"
//           type="video/mp4"
//         />
//       </video>

//       {/* 🔳 Overlay (dark effect) */}
//       <div className="absolute inset-0 bg-black/30"></div>

//       {/* 🧾 Main Text */}
//       <div className="relative z-10 flex flex-col justify-center h-full px-12 text-white">
//         <p className="text-lg tracking-widest uppercase">floka</p>
//         <h1 className="text-7xl font-bold">Studio</h1>
//       </div>

//       {/* 🧑 Profile Card */}
//       <div className="absolute bottom-24 right-10 z-10 bg-white rounded-xl p-4 flex gap-4 shadow-xl items-center">
//         <img
//           src="https://floka.casethemes.net/wp-content/uploads/2025/06/home-1-img-slide-300x300.jpg"
//           alt="profile"
//           className="w-14 h-14 rounded-lg object-cover"
//         />

//         <div>
//           <p className="text-xs uppercase text-gray-500">Head of idea</p>
//           <h3 className="font-semibold text-gray-800">
//             Almond D. Nelsi
//           </h3>

//           <button className="mt-2 flex items-center gap-2 bg-black text-white px-3 py-1 rounded-full text-sm">
//             +
//             <span>Let’s talk</span>
//           </button>
//         </div>
//       </div>

//       {/* 📝 Bottom Description */}
//       <div className="absolute bottom-6 right-12 z-10 text-white max-w-md">
//         <p className="font-semibold">
//           No cookie-cutter websites. No fluff.
//         </p>
//         <p className="text-sm text-gray-200">
//           Just real tools and smart strategies to grow your business and elevate your brand.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Banner;
// src/components/Banner.jsx
import React from "react";

const Banner = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">

      {/* 🎥 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://floka.casethemes.net/wp-content/uploads/2025/06/home-1-video.mp4"
          type="video/mp4"
        />
      </video>

      {/* 🔳 Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* 🧾 Main Text */}
      <div className="relative z-10 mt-16 flex flex-col justify-center h-full px-12 text-white">
        <p className="text-9xl font-extrabold tracking-widest uppercase">floka</p>
        <h1 className="text-7xl font-bold">Studio</h1>
      </div>

      {/* 🧑 Profile Card */}
      5<div className="absolute bottom-40 right-6 z-10 bg-white rounded-xl py-2 px-2  flex gap-4 shadow-xl items-center">
        <img
          src="https://floka.casethemes.net/wp-content/uploads/2025/06/home-1-img-slide-300x300.jpg"
          alt="Almond D. Nelsi"
          className="w-24 h-24 rounded-lg object-cover"
        />
        <div className="pr-12">
          <p className="text-xs uppercase text-gray-500">Head of idea</p>
          <h3 className="font-semibold text-gray-800">Almond D. Nelsi</h3>
          <button className="mt-2 flex items-center gap-2 bg-black text-white px-3 py-1 rounded-full text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
            >
              <path
                d="M10.2812 5.09375C10.3906 5.09375 10.5 5.20312 10.5 5.3125V6.1875C10.5 6.32422 10.3906 6.40625 10.2812 6.40625H5.90625V10.7812C5.90625 10.918 5.79688 11 5.6875 11H4.8125C4.67578 11 4.59375 10.918 4.59375 10.7812V6.40625H0.21875C0.0820312 6.40625 0 6.32422 0 6.1875V5.3125C0 5.20312 0.0820312 5.09375 0.21875 5.09375H4.59375V0.71875C4.59375 0.609375 4.67578 0.5 4.8125 0.5H5.6875C5.79688 0.5 5.90625 0.609375 5.90625 0.71875V5.09375H10.2812Z"
                fill="white"
              />
            </svg>
            <span>Let’s talk</span>
          </button>
        </div>
      </div>

      {/* 📝 Bottom Description */}
      <div className="absolute bottom-24 right-14 z-10 text-white max-w-md">
        <p className="font-sm">No cookie-cutter websites. No fluff.</p>
        <p className="text-xs text-gray-100">
          Just real tools and smart strategies to grow your<br></br> business and elevate your brand.
        </p>
       
      </div>
    </div>
  );
};

export default Banner;