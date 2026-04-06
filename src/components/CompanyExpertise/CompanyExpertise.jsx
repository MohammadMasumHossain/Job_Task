import { useState } from "react";

const data = [
  {
    title: "User Interface & Experience Design",
    desc: "From brand strategy to immersive digital experiences, we offer end-to-end creative solutions.",
    tags: ["branding", "magazine", "product"],
    img: "https://floka.casethemes.net/wp-content/uploads/2025/05/home1-accordion-img1-300x250.webp",
  },
  {
    title: "Web Development",
    desc: "From brand strategy to immersive digital experiences, we offer end-to-end creative solutions.",
    tags: ["branding", "module", "product", "ux"],
    img: "https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img1-300x250.webp",
  },
  {
    title: "Search Engine Optimization",
    desc: "From brand strategy to immersive digital experiences, we offer end-to-end creative solutions.",
    tags: ["branding", "product", "ux"],
    img: "https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img2-300x250.webp",
  },
  {
    title: "Low-Code Development",
    desc: "From brand strategy to immersive digital experiences, we offer end-to-end creative solutions.",
    tags: ["branding", "ux"],
    img: "https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img3-300x250.webp",
  },
];

export default function CompanyExpertise() {
  const [active, setActive] = useState(0);

  return (
    <div className="bg-black w-[98%] rounded-xl mx-auto text-white py-24 px-5 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className=" text-4xl md:text-7xl text-center font-semibold leading-tight mb-16">
          Company <br />
          <span className="text-gray-500">expertise</span>
        </h2>

        {/* ACCORDION */}
        <div>
          {data.map((item, index) => (
            <div key={index} className="border-b border-gray-700 py-6">

              {/* HEADER */}
              <div
                onClick={() => setActive(index)}
                className="flex items-center gap-8 cursor-pointer"
              >
                {/* ICON */}
                <div className="w-10 h-10 flex items-center justify-center border  rounded-full text-xl">
                  {active === index ? "−" : "+"}
                </div>

                {/* TITLE */}
                <h3 className="text-xl ml-30 font-medium">
                  {item.title}
                </h3>
              </div>

              {/* CONTENT */}
              {/* CONTENT */}
{active === index && (
  <div className="flex justify-between gap-16 mt-6 items-start">

    {/* TEXT */}
    <div className="max-w-xl ml-48">
      {/* 👆 IMPORTANT: same offset as icon + gap */}

      <p className="text-gray-400 mb-5 leading-relaxed">
        {item.desc}
      </p>

      <div className="flex flex-wrap gap-3">
        {item.tags.map((tag, i) => (
          <span
            key={i}
            className="border border-gray-600 px-3 py-1 rounded-full text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* IMAGE */}
    <img
      src={item.img}
      alt=""
      className="w-48 rounded-lg"
    />
  </div>
)}
            </div>
          ))}
        </div>

        {/* BUTTON */}
    <div className="mt-16 ml-48">
  <button className="group flex items-center gap-6 overflow-hidden">
    {/* Circle with plus, perfectly centered */}
    <span className="flex items-center justify-center w-12 h-12 bg-white text-black text-2xl font-bold rounded-full">
      +
    </span>

    {/* Text animation */}
    <span className="relative h-4 overflow-hidden">
      <span className="block text-sm transition-transform duration-300 group-hover:-translate-y-6">
        HIRE US TODAY
      </span>
    </span>
  </button>
</div>

      </div>

      {/* MARQUEE */}
    <div className="mt-24 overflow-hidden">
  <div className="flex gap-10 flex-nowrap animate-[scroll_18s_linear_infinite]">

    {[...Array(2)].map((_, loop) =>
      ["Great in UI/UX", "Best design communicator", "10/10 well recommended", "Super speedy website designer"].map((text, i) => (
        <div key={loop + i} className="flex items-center gap-2 min-w-max">
          <img
            src={`https://floka.casethemes.net/wp-content/uploads/2025/05/home1-textslip-img${i+1}.webp`}
            className="w-10 h-10 rounded-full"
          />
          <span className="text-base">"{text}"</span>
        </div>
      ))
    )}

  </div>
</div>

      {/* KEYFRAME FOR MARQUEE */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
}