import { useState } from "react";
import "./faq.css";

const faqs = [
  {
    q: "What is artificial intelligence (AI)?",
    a: "Explore how we transform ideas into extraordinary digital experiences.",
    img: "https://floka.casethemes.net/wp-content/uploads/2025/05/home1-accordion-img1-480x308.webp",
  },
  {
    q: "How does AI improve business efficiency?",
    a: "AI helps automate tasks and improve decision making.",
    img: "https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img6-480x308.webp",
  },
  {
    q: "How long does AI implementation take?",
    a: "Depends on complexity, usually weeks to months.",
    img: "https://floka.casethemes.net/wp-content/uploads/2025/06/home1-bg-img14-480x308.jpg",
  },
   {
    q: "What industries can benefit from AI?",
    a: "Healthcare, finance, retail, logistics and more.",
    img: "https://floka.casethemes.net/wp-content/uploads/2025/06/home1-bg-img14-480x308.jpg",
  },
  {
    q: "What are the costs of AI solutions?",
    a: "Costs vary depending on scale and complexity.",
    img: "https://floka.casethemes.net/wp-content/uploads/2025/06/home1-bg-img14-480x308.jpg",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(1);

  const toggleFAQ = (i) => {
    setActive(active === i ? null : i);
  };

  const splitText = (text) =>
    text.split("").map((char, i) => (
      <span
        key={i}
        className="char"
        style={{ animationDelay: `${i * 0.03}s` }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <section className="bg-[#f5f5f5] py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Top Heading */}
        <p className="text-sm uppercase text-gray-500 mb-4">
          faq & get answer
        </p>

        <div className="border mb-6"></div>

        <div className="">
            <h2 className=" font-semibold text-3xl flex ml-80 justify-center">
          {splitText("Have more questions? ")}  
        </h2>
          <h2 className=" font-semibold text-3xl flex ml-52 justify-center">
        {splitText("we've answers")}
        </h2>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-2  mt-12 items-start">
          
          {/* LEFT */}
          <div className="flex flex-col ml-60 h-full">
          <div className="mt-auto">
              <p className="text-gray-500 mb-6">
              Don’t found anything yet. Feel free <br />
              to ask anything.{" "}
              <span className="underline font-bold text-black cursor-pointer">
                Let’s Talk
              </span>
            </p>

            {/* Bottom Image */}
            <div className=" ">
              <img
                src="https://floka.casethemes.net/wp-content/uploads/2025/06/home1-bg-img15-800x800.jpg"
                className="rounded-2xl w-40 md:w-48"
                alt=""
              />
            </div>
          </div>
          </div>

          {/* RIGHT ACCORDION */}
          <div className="space-y-2">
            {faqs.map((item, i) => (
              <div key={i} className="faq-item">
                <button
                  onClick={() => toggleFAQ(i)}
                  className="faq-title"
                >
                  {item.q}
                  <span className="plus">
                    {active === i ? "−" : "+"}
                  </span>
                </button>

                {active === i && (
                  <div className="faq-content flex gap-4 items-start">
                    
                    {/* IMAGE */}
                    <img
                      src={item.img}
                      className="w-32 h-24 object-cover rounded-lg"
                      alt=""
                    />

                    {/* TEXT */}
                    <div>
                      <p className="text-gray-600">{item.a}</p>

                      <button className="contact-btn">
                        <span className="circle">+</span>
                        get in touch
                      </button>
                    </div>

                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}