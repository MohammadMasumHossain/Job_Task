import { useEffect, useState } from "react";

export default function FunFacts() {
  const [count, setCount] = useState(0);

  // Counter animation
  useEffect(() => {
    let start = 0;
    const end = 2000;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, []);

  return (
     <section className="bg-[#f5f5f5] py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">

        {/* LEFT IMAGE */}
        <div className="w-full max-w-105 h-130">
          <img
            src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img6-500x600.webp"
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* TEXT */}
          <div>
            <p className="uppercase text-xs  mb-2">
              FUN FACTS
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
              Consistently delivering impactful results through a perfect blend of design and functionality.
            </h2>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-2 gap-4">

            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-4">

              {/* SMALL CARD */}
             <div className="bg-white p-4 rounded-xl shadow-sm h-20 flex justify-between items-center">
                <p className="text-sm text-gray-600 leading-tight">
                  Successful Projects  <br /> Completed
                </p>

                <h3 className="text-2xl font-bold flex items-center gap-1">
                  2K<span className="animate-pulse">+</span>
                </h3>
              </div>

              {/* BIG BLACK CARD WITH IMAGE */}
              <div className="bg-black text-white p-5 rounded-xl h-65 flex flex-col justify-between overflow-hidden group">

  {/* IMAGE STACK */}
  <div className="relative  h-20">

    <img
      src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img8-100x120.webp"
      className="absolute left-10 top-2 w-15 h-18 object-cover rounded-md rotate-12 
      transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[-18deg]"
    />

    <img
      src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img9-100x120.webp"
      className="absolute left-20 top-0 w-17 h-19 object-cover rounded-md z-10
      transition-transform duration-500 group-hover:-translate-y-3"
    />

    <img
      src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img10-100x120.webp"
      className="absolute left-30 top-2 w-15 h-17.5 object-cover rounded-md rotate-12
      transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-18"
    />
  </div>

  {/* TEXT */}
  <p className="text-sm text-gray-300 leading-relaxed">
    More than <span className="text-white font-semibold">2k+ projects</span> completed—each crafted to deliver real-world results for ambitious brands.
  </p>
</div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col gap-4">

              {/* BIG CARD */}
              <div className="bg-white p-5 rounded-xl shadow-sm h-65 flex flex-col justify-between">

                <div>
                  <div className="text-orange-400 mb-2">
                    ★★★★★
                  </div>

                  <h3 className="text-3xl font-bold">4.9/5</h3>
                </div>

                <p className="text-sm text-gray-500">
                  We offer end-to-end creative solutions that make brands unforgettable.
                </p>

                {/* BUTTON */}
                <button className="flex items-center gap-2 group">
                  
                  {/* PLUS ICON */}
                  <span className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full transition-transform duration-300 group-hover:rotate-90">
                    +
                  </span>

                  {/* TEXT ANIMATION */}
                  <span className="relative overflow-hidden h-5">
                    <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                      Hire us now
                    </span>
                    <span className="block absolute left-0 top-full transition-transform duration-300 group-hover:-translate-y-full">
                      Hire us now
                    </span>
                  </span>
                </button>
              </div>

              {/* SMALL CARD */}
             <div className="relative h-20 rounded-xl overflow-hidden flex justify-between items-center px-4">

  {/* BACKGROUND IMAGE */}
  <img
    src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img7.webp"
    alt=""
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* DARK OVERLAY (important for readability) */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* CONTENT */}
  <p className="relative text-sm text-white leading-tight">
    Worldwide base <br /> around the world
  </p>

  <h3 className="relative text-2xl font-bold text-white flex items-center gap-1">
    5 <span className="animate-pulse">+</span>
  </h3>
</div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}