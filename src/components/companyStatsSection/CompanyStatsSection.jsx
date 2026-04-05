// app/components/FlokaSection.jsx

export default function CompanyStatsSection() {
  return (
    <section className="bg-[#f5f5f5] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* TOP TEXT */}
        <div className="grid md:grid-cols-2 gap-10 mb-14">
          <div>
            <p className="text-sm text-gray-500 mb-4">
              We design every project with long-term success in mind.
            </p>
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            Our approach is straightforward—
            prioritizing functionality, speed, and clarity for solutions.
          </h2>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">

          {/* LEFT CARD */}
          <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-5xl font-bold">25+</h3>
              <p className="text-gray-500 mt-2">Years of experience</p>

              <hr className="my-5" />

              <p className="text-gray-600 text-sm">
                Explore how we transform ideas into extraordinary digital experiences.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2">
              <div className="flex -space-x-2">
                <img src="https://i.pravatar.cc/40?img=1" className="w-8 h-8 rounded-full border" />
                <img src="https://i.pravatar.cc/40?img=2" className="w-8 h-8 rounded-full border" />
                <img src="https://i.pravatar.cc/40?img=3" className="w-8 h-8 rounded-full border" />
              </div>
              <span className="text-sm text-gray-600">1200+ happy users review</span>
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-author-img1.webp"
              alt=""
              className="w-full h-full object-cover"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* TEXT OVER IMAGE */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-lg font-medium">
                “ At Floka, we merge strategy, creativity, and technology to
                shape brands that people love. ”
              </p>

              <p className="text-sm mt-2 opacity-80">
                Merizo H. Yelso / CEO
              </p>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="flex flex-col gap-6">

            {/* FOLLOW CARD */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-sm text-gray-500">Follow us</p>
              <p className="mt-2 text-gray-700">For check updates</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {["DRIBBBLE", "BEHANCE", "LINKEDIN", "X", "XING"].map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1 border rounded-full text-gray-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* PROGRESS CARD */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-sm text-gray-500 mb-4">Impressions</p>

              <div className="space-y-3 text-sm">
                <div>
                  <div className="flex justify-between">
                    <span>Solutions</span>
                    <span>100%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full mt-1">
                    <div className="h-2 bg-black rounded-full w-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between">
                    <span>UI/UX</span>
                    <span>90%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full mt-1">
                    <div className="h-2 bg-black rounded-full w-[90%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between">
                    <span>Explore</span>
                    <span>72%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full mt-1">
                    <div className="h-2 bg-black rounded-full w-[72%]"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}