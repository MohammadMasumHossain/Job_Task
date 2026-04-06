import React from 'react';

const ContactSection = () => {
  return (
    <div className='px-4'>
        <section className="bg-[#0A0A0A] text-white py-20 px-6 md:px-12 lg:px-24 rounded-[40px] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 justify-between">
        
        {/* Left Side: Text Content */}
        <div className="lg:w-1/2 space-y-12">
          <div className="space-y-6">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">
              get in touch
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              Tell us about your project
              <span className="block ">—whether it's a website, SEO, or marketing.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-12 pt-10">
            {/* Talk to us */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center">
                   <img src="https://floka.casethemes.net/wp-content/uploads/2025/06/home-1-icon-chat.svg" alt="chat" className="w-4 h-4" />
                </div>
                <span className="uppercase text-xs font-bold tracking-widest ">talk to us</span>
              </div>
              <h3 className="text-xl font-medium leading-relaxed text-gray-400">
                Work and general inquiries<br />
                <span className="text-2xl font-bold mt-2 block">+123 456 789 00</span>
              </h3>
            </div>

            {/* Post address */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center">
                   <img src="https://floka.casethemes.net/wp-content/uploads/2025/06/home-1-icon-location.svg" alt="location" className="w-4 h-4" />
                </div>
                <span className="uppercase text-xs font-bold tracking-widest ">post address</span>
              </div>
              <p className="text-xl font-medium leading-relaxed max-w-62 text-gray-400">
                541 Melville Ave, Palo Alto, CA 94301, United States
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Form Card */}
        <div className="lg:w-1/2 bg-white rounded-4xl p-8 md:p-12 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-dq text-black mb-10">Have a project in mind?</h3>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="your name" 
                className="w-full bg-[#F5F5F5] text-black border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-black outline-none transition-all placeholder:text-gray-400"
              />
              <input 
                type="email" 
                placeholder="business email" 
                className="w-full bg-[#F5F5F5] text-black border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-black outline-none transition-all placeholder:text-gray-400"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 ml-1">budget</label>
                <div className="relative">
                  <select className="w-full bg-[#F5F5F5] text-black border-none rounded-xl px-6 py-4 appearance-none cursor-pointer focus:ring-2 focus:ring-black outline-none">
                    <option>$1000 - $5000</option>
                    <option>$5000 - $10000</option>
                    <option>$10000+</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400 ml-1">Service</label>
                <div className="relative">
                  <select className="w-full bg-[#F5F5F5] text-black border-none rounded-xl px-6 py-4 appearance-none cursor-pointer focus:ring-2 focus:ring-black outline-none">
                    <option>Consultancy</option>
                    <option>Web Design</option>
                    <option>SEO</option>
                    <option>Marketing</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>
            </div>

            <textarea 
              rows="4" 
              placeholder="message" 
              className="w-full bg-[#F5F5F5] text-black border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-black outline-none transition-all placeholder:text-gray-400 resize-none"
            ></textarea>

            <button 
              type="submit" 
              className="group relative flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold uppercase text-sm tracking-widest hover:bg-gray-800 transition-all overflow-hidden"
            >
              <span className="flex items-center justify-center bg-white/20 rounded-full p-1 group-hover:rotate-90 transition-transform duration-300">
                <svg width="12" height="12" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2812 5.09375C10.3906 5.09375 10.5 5.20312 10.5 5.3125V6.1875C10.5 6.32422 10.3906 6.40625 10.2812 6.40625H5.90625V10.7812C5.90625 10.918 5.79688 11 5.6875 11H4.8125C4.67578 11 4.59375 10.918 4.59375 10.7812V6.40625H0.21875C0.0820312 6.40625 0 6.32422 0 6.1875V5.3125C0 5.20312 0.0820312 5.09375 0.21875 5.09375H4.59375V0.71875C4.59375 0.609375 4.67578 0.5 4.8125 0.5H5.6875C5.79688 0.5 5.90625 0.609375 5.90625 0.71875V5.09375H10.2812Z" fill="currentColor"></path>
                </svg>
              </span>
              let’s talk
            </button>
          </form>
        </div>

      </div>
    </section>
    </div>
  );
};

export default ContactSection;