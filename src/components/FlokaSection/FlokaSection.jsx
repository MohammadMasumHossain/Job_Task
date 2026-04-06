import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function FlokaSection() {
  const [experience, setExperience] = useState(0);
  const [reviews, setReviews] = useState(0);

  useEffect(() => {
    const expTarget = 25;
    const revTarget = 1200;
    let expCount = 0;
    let revCount = 0;

    const expInterval = setInterval(() => {
      expCount += 1;
      if (expCount > expTarget) expCount = expTarget;
      setExperience(expCount);
      if (expCount === expTarget) clearInterval(expInterval);
    }, 50);

    const revInterval = setInterval(() => {
      revCount += 20;
      if (revCount > revTarget) revCount = revTarget;
      setReviews(revCount);
      if (revCount === revTarget) clearInterval(revInterval);
    }, 20);

    return () => {
      clearInterval(expInterval);
      clearInterval(revInterval);
    };
  }, []);

  return (
    <section className="bg-gray-100 text-black font-inter py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex flex-col lg:flex-row gap-8 lg:gap-20 mb-16 items-start">
          {/* Logo Area */}
          <div className="flex-1 max-w-60">
            <div className="relative w-24 h-24 flex items-center justify-center mb-5">
              <svg viewBox="0 0 100 100" className="absolute w-full h-full animate-spin-slow">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="transparent"
                />
                <text fontSize="7" fontWeight="bold" fill="#bbb" letterSpacing="2">
                  <textPath xlinkHref="#circlePath">
                    DESIGN • CREATE • STRATEGY • IMPACT •
                  </textPath>
                </text>
              </svg>
              <svg width="24" height="24" viewBox="0 0 38 40" fill="currentColor">
                <path d="M0 0C12.6 0 25.3 0 37.9 0V11.7H16.1C14 11.7 11.9 11.6 10.8 13.4C9.6 15.4 10.1 17.5 10.2 20.1C10.2 21.9 9 23.4 7.3 23.5H0V0Z" />
                <path d="M14.8 19.2C15 17.6 16.5 16.4 18.1 16.5H31.3V28.3H14.9V39.9H0V28.2H11.3C13 28.1 14.5 26.8 14.7 25.1C14.8 23.2 14.6 21.2 14.8 19.2Z" />
              </svg>
            </div>
            <p className="text-gray-400 text-sm">
              We design every project with long-term success in mind.
            </p>
          </div>

          {/* Headline */}
          <div className="lg:ml-12">
            <h2 className="text-2xl lg:text-4xl font-medium leading-snug">
              Our approach is straightforward— <br />
              prioritizing functionality, speed, and <br />
              clarity for solutions.
            </h2>
          </div>
        </header>

        {/* Grid */}
        <div className="grid lg:grid-cols-[1fr_2fr_1fr] gap-2">
          {/* Card 1: Experience */}
          <div className="bg-white h-100 w-70 rounded-3xl p-6 border border-gray-200 flex flex-col justify-between">
            <div>
              <h3 className="text-5xl font-bold leading-none">
                <motion.span>{experience}</motion.span>
                <span className="text-gray-300">+</span>
              </h3>
              <p className="text-gray-400 font-semibold text-sm mt-1">Years of experience</p>
              <div className="h-px bg-gray-200 my-4"></div>
              <p className="text-gray-600 mt-10 leading-relaxed">
                Explore how we transform ideas into extraordinary digital experiences.
              </p>
            </div>
            <div className="flex flex-col gap-3 mt-6">
              <div className="flex justify-start -space-x-2">
                <img className="w-9 h-9 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?u=1" alt="u1"/>
                <img className="w-9 h-9 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?u=2" alt="u2"/>
                <img className="w-9 h-9 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?u=3" alt="u3"/>
              </div>
              <span className="text-xs">
                <motion.span>{reviews}</motion.span>+ happy users review
              </span>
            </div>
          </div>

          {/* Card 2: Image */}
          <div className="relative h-90 w-180 bg-black rounded-3xl overflow-hidden min-h-100">
            <img
              className="w-full h-230 object-cover overflow-visible opacity-80"
              src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-author-img1.webp"
              alt="CEO"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-linear-to-t from-black/70 to-transparent text-white">
              <p className="text-base italic mb-6 leading-snug">
                “At Floka, we merge strategy, creativity, and technology to shape brands that people love.”
              </p>
              <p className="text-[10px] font-bold tracking-widest opacity-60">
                MERIZO H. YELSO / CEO
              </p>
            </div>
          </div>

          {/* Card 3: Stack */}
          <div className="flex flex-col gap-6">
            {/* Follow Us */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200">
              <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400 block mb-2">Follow us</span>
              <h4 className="text-lg mt-1 mb-2">For check updates</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {['DRIBBBLE', 'BEHANCE', 'LINKEDIN', 'X', 'XING'].map(tag => (
                  <span key={tag} className="text-[9px] font-bold px-3 py-1 border border-gray-200 rounded-full text-gray-600">{tag}</span>
                ))}
              </div>
            </div>

            {/* Impressions */}
            <div className="bg-white rounded-3xl p-6 border border-gray-200 flex-1">
              <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400 block mb-2">Impressions</span>
              <div className="flex flex-col gap-4 mt-2">
                <div className="flex justify-between items-center bg-black text-white h-11 rounded-full px-5 text-xs font-bold">
                  <span>SOLUTIONS</span>
                  <span>100%</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between text-[10px] font-bold">
                    <span>UI/UX</span><span>90%</span>
                  </div>
                  <div className="h-1 bg-gray-200 rounded-full">
                    <div className="h-full bg-gray-400 rounded-full w-[90%]"></div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between text-[10px] font-bold">
                    <span>EXPLORE</span><span>72%</span>
                  </div>
                  <div className="h-1 bg-gray-200 rounded-full">
                    <div className="h-full bg-gray-400 rounded-full w-[72%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Tailwind Animation */}
      <style>
        {`
          @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          .animate-spin-slow { animation: spin-slow 15s linear infinite; }
        `}
      </style>
    </section>
  );
}