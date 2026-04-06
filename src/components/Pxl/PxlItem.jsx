import React, { useEffect, useRef, useState } from "react";
import "./Pxl.css";

const PxlItem = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [scrollDir, setScrollDir] = useState("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const direction = window.scrollY > lastScrollY ? "down" : "up";
      setScrollDir(direction);
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
        else setInView(false);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`pxl-item--inner ${inView ? "animate-diagonal" : ""} ${
        scrollDir === "down" ? "from-top-left" : "from-bottom-right"
      }`}
    >
      <div className="pxl-item--image s_img" data-parallax-value="">
        <img
          src="https://floka.casethemes.net/wp-content/uploads/2025/06/home1-lines-scaled.png"
          alt=""
          width={2060}
          height={10}
          decoding="async"
          loading="eager"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default PxlItem;