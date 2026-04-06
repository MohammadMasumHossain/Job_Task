import React from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import "./BlogInsightsGrid.css";

const BlogInsightsGrid = () => {
  const text = "updates";
  
  // Animation for the staggered "updates" text
  const charVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 }
    }),
  };

  const blogs = [
    { id: 1, category: "WEB3", date: "NOV 07, 2025", title: "Seamless user interfaces, crafted with intent.", dark: true },
    { id: 2, image: "https://floka.casethemes.net/wp-content/uploads/2025/06/home-1-blog-img1.jpg", tall: true },
    { id: 3, image: "https://floka.casethemes.net/wp-content/uploads/2025/06/home-1-blog-img2.jpg", category: "WEB3", date: "NOV 07, 2025", title: "Creative web platforms, designed for growth.", middle: true },
    { id: 4, category: "WEB3", date: "NOV 07, 2025", title: "Immersive virtual journeys, built with precision.", dark: true },
    { id: 5, image: "https://floka.casethemes.net/wp-content/uploads/2025/06/home-1-blog-img3.jpg", tall: true },
  ];

  return (
    <section className="blog-section">
      <header className="blog-header">
        <span className="insights-label">INSIGHTS</span>
        <h2 className="blog-main-title">
          Company blog & 
          <span className="animated-words">
            {text.split("").map((char, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={charVariants}
                style={{ position: "relative", display: "inline-block" }}
              >
                {char}
              </motion.div>
            ))}
          </span>
        </h2>
      </header>

      <div className="blog-grid ">
        {/* Left Column */}
     <div className="grid-col">
  <div className="blog-card dark-card">
    <div className="card-meta">
      <span>WEB3</span> <span>NOV 07, 2025</span>
    </div>
    <h3>Seamless user interfaces, crafted with intent.</h3>
  </div>

  <div className="blog-card image-card tall relative group">
    <img
      src="https://floka.casethemes.net/wp-content/uploads/2025/11/home-9-blog-img3-800x800.webp"
      alt="Team"
      className="w-full h-auto"
    />
    <div className="plus-btn absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <Plus size={20} />
    </div>
  </div>
</div>

        {/* Center Column */}
        {/* Center Column */}
<div className="grid-col">
  <div className="blog-card image-card tall ">
    <div className=" relative group">
      <img
        src="https://floka.casethemes.net/wp-content/uploads/2025/11/home-9-blog-img2.webp"
        alt="Meeting"
        className="w-full h-auto rounded-xl" 
      />
      <div className="plus-btn absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Plus size={20} />
      </div>
    </div>

    <div className="card-content white-card rounded-xl  mt-4">
      <div className="card-meta">
        <span>WEB3</span> <span>NOV 07, 2025</span>
      </div>
      <h3>Creative web platforms, designed for growth.</h3>
    </div>
  </div>
</div>

        {/* Right Column */}
      <div className="grid-col">
  <div className="blog-card dark-card">
    <div className="card-meta">
      <span>WEB3</span> <span>NOV 07, 2025</span>
    </div>
    <h3>Immersive virtual journeys, built with precision.</h3>
  </div>

  <div className="blog-card image-card tall relative group">
    <img
      src="https://floka.casethemes.net/wp-content/uploads/2025/11/home-9-blog-img1.webp"
      alt="Working"
      className="w-full h-auto"
    />
    <div className="plus-btn absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <Plus size={20} />
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default BlogInsightsGrid;