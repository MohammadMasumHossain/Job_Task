import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Nicolas K. Ellington",
    position: "IT Specialist",
    rating: 5,
    text: "As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog.",
    subtitle: "Great design solutions",
  },
  {
    id: 2,
    name: "Julian T. Beaumont",
    position: "IT Specialist",
    rating: 5,
    text: "As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog.",
    subtitle: "Great design solutions",
  },
  {
    id: 3,
    name: "Felipe D. Hawthorne",
    position: "IT Specialist",
    rating: 5,
    text: "As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog.",
    subtitle: "Great design solutions",
  }
];

// Animation configuration for the background color fill
const cardVariants = (delay) => ({
  initial: { 
    backgroundColor: "#FFFFFF", 
    color: "#0A0A0A" 
  },
  hover: { 
    backgroundColor: "#0A0A0A", 
    color: "#FFFFFF",
    transition: { duration: 0.9, delay: delay, ease: "easeInOut" }
  }
});

const UserFeedbacks = () => {
  return (
    <section className="bg-[#f5f5f5] py-24 px-6 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Sub-label */}
        <motion.h4 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="uppercase text-sm font-semibold tracking-[0.2em] text-[#0A0A0A] mb-4"
        >
          user feedbacks
        </motion.h4>

        {/* Decorative Divider */}
        <div className="w-full h-px bg-gray-300 mb-12" />

        {/* Hero Heading Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col items-end"
        >
          <h2 className="text-xl md:text-4xl  font-semibold leading-[1.1] text-[#0A0A0A] max-w-5xl">
            Accelerating growth, and unlocking <br></br> new potential. 
            <span className="inline-flex items-center mx-4 align-middle">
              <img src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-highlight1.jpg" alt="user1" className="w-14 h-14 rounded-full border-4 border-white -ml-4 first:ml-0 shadow-sm" />
              <img src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-highlight2.jpg" alt="user2" className="w-14 h-14 rounded-full border-4 border-white -ml-4 shadow-sm" />
              <img src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-highlight3.jpg" alt="user3" className="w-14 h-14 rounded-full border-4 border-white -ml-4 shadow-sm" />
            </span>
            Let’s build your <br></br>brand—together.
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {testimonials.map((item, index) => {
            const isMiddle = index === 1;

            return (
              <motion.div
                key={item.id}
                initial="initial"
                whileHover="hover"
                className={`flex flex-col gap-4 group cursor-pointer ${isMiddle ? 'flex-col-reverse' : 'flex-col'}`}
              >
                {/* SMALL CONTAINER (Name/Position)
                   In the middle card, this is at the BOTTOM.
                */}
                <motion.div
                  variants={cardVariants(isMiddle ? 0.15 : 0)} 
                  className="p-10 rounded-2xl shadow-sm border border-gray-100"
                >
                  <h6 className="font-semibold text-md">{item.name}</h6>
                  <p className="text-xs uppercase tracking-widest mt-2 opacity-60">
                    {item.position}
                  </p>
                </motion.div>

                {/* LARGE CONTAINER (Content/Rating)
                   In the middle card, this is at the TOP.
                */}
                <motion.div
                  variants={cardVariants(isMiddle ? 0 : 0.15)}
                  className="p-10 rounded-2xl shadow-sm border border-gray-100 grow flex flex-col justify-between min-h-80"
                >
                  <div>
                    <div className="flex gap-1 mb-6 text-[#ffba00]">
                      {[...Array(item.rating)].map((_, i) => (
                        <span key={i} className="text-sm">★</span>
                      ))}
                    </div>
                    <p className="text-lg italic leading-[1.6] font-normal">
                      "{item.text}"
                    </p>
                  </div>

                  <div className="mt-10">
                    <p className="text-[11px] uppercase font-bold tracking-[0.25em] opacity-50">
                      “ {item.subtitle} ”
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UserFeedbacks;