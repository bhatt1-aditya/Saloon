import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-[#7f1d1b] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto py-8 md:py-14 lg:py-20">
        <div className="relative">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h1 className="text-lg sm:text-xl md:text-2xl font-normal tracking-wide">
                A CURE FOR HAIR STYLES
              </h1>
            </div>

            <div className="flex-shrink-0 ml-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 text-sm md:text-base">
                <div className="space-y-3 flex flex-col">
                  <a href="#" className="inline-flex items-center gap-2">
                    About ↗
                  </a>
                  <a href="#" className="inline-flex items-center gap-2">
                    Book Here ↗
                  </a>
                  <a href="#" className="inline-flex items-center gap-2">
                    Get Inspired ↗
                  </a>
                  <a href="#" className="inline-flex items-center gap-2">
                    FAQs &amp; Terms ↗
                  </a>
                </div>
                <div className="space-y-3 flex flex-col">
                  <a href="#" className="inline-flex items-center gap-2">
                    Instagram ↗
                  </a>
                  <a href="#" className="inline-flex items-center gap-2">
                    Facebook ↗
                  </a>
                  <a href="#" className="inline-flex items-center gap-2">
                    TikTok ↗
                  </a>
                  <a href="#" className="inline-flex items-center gap-2">
                    Leave a Review Here
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none">
            <h2 className="font-serif select-none text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[15rem] leading-[0.78] mt-4 sm:mt-6 md:mt-12 lg:mt-16 text-white translate-y-5">
              RENASANZ
            </h2>
          </div>
        </div>
      </div>

      <div className="absolute left-0 right-0 bottom-0">
        <div className="border-t border-[#6b1412]">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 py-3">
            <div className="relative overflow-hidden whitespace-nowrap">
              <div className="marquee will-change-transform flex items-center gap-8">
                <span className="inline-block text-xs sm:text-sm md:text-base">
                  Stand Alone Treatment
                </span>
                <span className="inline-block text-xs sm:text-sm md:text-base">
                  Color Design
                </span>
                <span className="inline-block text-xs sm:text-sm md:text-base">
                  Color Root Touch–Up
                </span>
                <span className="inline-block text-xs sm:text-sm md:text-base">
                  Styling
                </span>
                <span className="inline-block text-xs sm:text-sm md:text-base">
                  Hair Color
                </span>
                <span className="inline-block text-xs sm:text-sm md:text-base">
                  Toner Refresh
                </span>
                <span className="inline-block text-xs sm:text-sm md:text-base">
                  Root Bleach Touch-up
                </span>
                <span className="inline-block text-xs sm:text-sm md:text-base">
                  Bleach Re–Do
                </span>
                <span className="inline-block text-xs sm:text-sm md:text-base">
                  General Consultation
                </span>
                <span className="inline-block text-xs sm:text-sm md:text-base">
                  Bleach test
                </span>

                <span className="inline-block text-xs sm:text-sm md:text-base">
                  Stand Alone Treatment
                </span>
                <span className="inline-block text-xs sm:text-sm md:text-base">
                  Color Design
                </span>
                <span className="inline-block text-xs sm:text-sm md:text-base">
                  Color Root Touch–Up
                </span>
                <span className="inline-block text-xs sm:text-sm md:text-base">
                  Styling
                </span>
                <span className="inline-block text-xs sm:text-sm md:text-base">
                  Hair Color
                </span>
                <span className="inline-block text-xs sm:text-sm md:text-base">
                  Toner Refresh
                </span>
                <span className="inline-block text-xs sm:text-sm md:text-base">
                  Root Bleach Touch-up
                </span>
                <span className="inline-block text-xs sm:text-sm md:text-base">
                  Bleach Re–Do
                </span>
                <span className="inline-block text-xs sm:text-sm md:text-base">
                  General Consultation
                </span>
                <span className="inline-block text-xs sm:text-sm md:text-base">
                  Bleach test
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .font-serif { font-family: 'Playfair Display', Georgia, 'Times New Roman', serif; }

        .marquee {
          display: inline-flex;
          gap: 2.5rem;
          animation: marqueeAnim 36s linear infinite;
          align-items: center;
          transform: translateX(0);
        }

        @keyframes marqueeAnim {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 640px) {
          .marquee { animation-duration: 22s; gap: 1.25rem; }
          footer h2 { transform: translateY(3px); }
        }

        @media (min-width: 640px) and (max-width: 1023px) {
          .marquee { animation-duration: 28s; gap: 1.5rem; }
        }

        @media (min-width: 1024px) {
          .marquee { animation-duration: 42s; gap: 2rem; }
        }

        footer h2 { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
      `}</style>
    </footer>
  );
};

export default Footer;
