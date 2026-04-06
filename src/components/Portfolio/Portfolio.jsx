import React from 'react';

const projects = [
  { 
    id: 1, 
    title: "No-code Website", 
    author: "Aldan Branding", 
    year: "2025", 
    tags: ["Branding", "UX"],
    image: "https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img5-655x450.webp", 
    span: "col-span-1",
    logo: "https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon7.svg"
  },
  { 
    id: 2, 
    title: "Web3 Crypto", 
    author: "Aldan Branding", 
    year: "2025", 
    tags: ["Branding", "UX", "Website"],
    image: "https://floka.casethemes.net/wp-content/uploads/2025/05/home3-accordion1-655x450.jpg", 
    span: "col-span-1",
    logo: "https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon6.svg"
  },
  { 
    id: 3, 
    title: "Tailoring Craft", 
    author: "Aldan Branding", 
    year: "2025", 
    tags: ["Branding", "UX"],
    image: "https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img3-1320x600.webp", 
    span: "md:col-span-2", // Full width center image
    logo: "https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon5.svg"
  },
  { 
    id: 4, 
    title: "Search Optimization", 
    author: "Aldan Branding", 
    year: "2025", 
    tags: ["Branding", "Product", "UX"],
    image: "https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img2-655x450.webp", 
    span: "col-span-1",
    logo: "https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon4.svg"
  },
  { 
    id: 5, 
    title: "Web Development", 
    author: "Aldan Branding", 
    year: "2025", 
    tags: ["Branding", "Module", "Product", "UX"],
    image: "https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img1-655x450.webp", 
    span: "col-span-1",
    logo: "https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon3.svg"
  }
];

const PortfolioGrid = () => {
  return (
    <section className="bg-[#F5F5F5] py-20 px-4 font-sans selection:bg-black selection:text-white">
      <div className="max-w-330 mx-auto">

       <div className="mb-12">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase    mb-2">Portfolio</p>
          <div className="border-b text-gray-200"></div>
          <h2 className="text-4xl md:text-3xl font-medium mt-8 flex justify-end text-[#0A0A0A] leading-tight max-w-6xl">
            Strategy to build powerful <br></br> digital solutions.
          </h2>
        </div>
       
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {projects.map((project) => (
            <div key={project.id} className={`${project.span} group flex flex-col`}>
              
              {/* IMAGE WRAPPER (Handles Hover States) */}
              <div className="relative overflow-hidden cursor-pointer">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-auto object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />

                {/* LOGO (Always visible top-left) */}
                <div className="absolute top-8 left-8 z-10 pointer-events-none">
                  <img src={project.logo} alt="brand" className="h-5 opacity-90 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* 1. ARROW: TOP RIGHT (Slides from out of frame on hover) */}
                <div className="absolute top-8 right-8 z-20 transform translate-x-12 -translate-y-12 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>

                {/* 2. TAGS: BOTTOM LEFT (Slides up from bottom on hover) */}
                <div className="absolute bottom-8 left-8 z-20 flex flex-wrap gap-2 transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75 ease-out">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-white text-[10px] font-black uppercase tracking-[0.25em] bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Dark Vignette Overlay on Hover */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* AUTHOR & YEAR (Static White Background) */}
              <div className="bg-white mt-4 rounded-xl px-8 py-6 flex justify-between items-center shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#0A0A0A]">
                  {project.author}
                </h4>
                <span className="text-[11px] font-bold text-gray-300">
                  {project.year}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Action Button */}
       <div className="mt-20 flex justify-center">
  <button className="group flex items-center gap-4 hover:opacity-80 transition-all duration-300">
    
    {/* THE ICON: Black Background, White Plus, Perfectly Rounded */}
    <div className="w-12 h-12 bg-[#0A0A0A] rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-90 shadow-lg">
      <svg 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="white" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
    </div>

    {/* THE TEXT: High-end Typography */}
    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0A0A0A]">
      More Works
    </span>
    
  </button>
</div>
      </div>
    </section>
  );
};

export default PortfolioGrid;