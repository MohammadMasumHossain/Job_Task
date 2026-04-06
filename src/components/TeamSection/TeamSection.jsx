import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const team = [
  {
    name: "Nicolas K. Ellington",
    role: "Founder",
    img: "https://floka.casethemes.net/wp-content/uploads/2025/06/home1-team-img1-min-450x450.png",
  },
  {
    name: "Carlos E. Ashcroft",
    role: "CEO",
    img: "https://floka.casethemes.net/wp-content/uploads/2025/06/home1-team-img2-min-450x450.png",
  },
  {
    name: "Leonardo F. Ashton",
    role: "UX Designer",
    img: "https://floka.casethemes.net/wp-content/uploads/2025/06/home1-team-img3-min-450x450.png",
  },
  {
    name: "Ricardo P. Winslow",
    role: "UI Designer",
    img: "https://floka.casethemes.net/wp-content/uploads/2025/06/home1-team-img4-min-450x450.png",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-[#f5f5f5] py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl p-10 flex flex-col md:flex-row gap-10">
        {/* LEFT */}
        <div className="flex-1 min-w-70">
          <p className="text-xs uppercase text-gray-500 mb-2 tracking-wide">
            OUR AVENGERS
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mb-5 leading-tight">
            Meet with our team <br/> member
          </h2>

          <div className="flex gap-6 text-sm mb-5">
            <span className="border-b-2 border-black pb-1 font-medium">
              DESIGN TEAM
            </span>
            <span className="text-gray-400">DEVELOPMENT TEAM</span>
          </div>

          <p className="text-gray-600 mb-6 leading-relaxed">
            What began over coffee-fueled brainstorming sessions has grown into a thriving digital agency dedicated to helping brands stand out.
          </p>

          <button className="flex items-center gap-2  text-black px-5 py-3 rounded-full hover:opacity-90 transition">
            <span className="w-6 h-6 flex items-center text-white justify-center bg-neutral-800 rounded-full text-sm">
              +
            </span>
          <p className="">  JOIN WITH US</p>
          </button>
          <div className=" mt-8">
            <img src="https://floka.casethemes.net/wp-content/uploads/2025/06/home1-bg-img14.jpg" alt=""
            className="rounded-xl" />
          </div>
        </div>

        {/* RIGHT GRID */}
        <div className="flex-1 grid grid-cols-2 gap-5">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-[#F5F5F5] p-4 rounded-2xl text-center transition duration-300 hover:-translate-y-1"
            >
              {/* IMAGE */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full bg-[#f9d78f] h-48 object-cover transition duration-500 ease-out hover:scale-110 hover:rotate-1"
                />
              </div>

              <h3 className="mt-3 text-sm font-semibold">
                {member.name}
              </h3>
              <p className="text-xs text-gray-500">{member.role}</p>

              {/* SOCIAL */}
              <div className="flex justify-center gap-2 mt-3">
  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 cursor-pointer transition-all duration-300 hover:bg-black hover:text-white hover:-translate-y-1">
    <FaFacebookF size={12} />
  </span>
  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 cursor-pointer transition-all duration-300 hover:bg-black hover:text-white hover:-translate-y-1">
    <FaTwitter size={12} />
  </span>
  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 cursor-pointer transition-all duration-300 hover:bg-black hover:text-white hover:-translate-y-1">
    <FaInstagram size={12} />
  </span>
</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
