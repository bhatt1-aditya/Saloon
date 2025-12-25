import React from "react";
import image1 from "../assets/home/home.webp"
const AboutSection = () => {
  return (
    <section className="bg-[#e9e4dc] py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center ">
          {/* About Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-light border-b border-black pb-2 mb-4">
              ABOUT
            </h2>
            <div className="md:w-[80%] w-full ml-auto">
              <p className="text-[17px] leading-relaxed text-gray-900 mb-6 w-full">
              We are Renasanz Salon, a popular hair salon in the heart of
              Friedrichshain, Berlin.
            </p>
            <p className="text-[17px] leading-relaxed text-gray-900 mb-4 w-full border-b pb-4">
              Our carefully crafted team delivers you with unique high–end
              results. Hair cuts for men and women, balayages, highlights, hair
              coloring and bleach services among others.
            </p>
           <div className="flex justify-end items-end"> <a
              href="#about-more"
              className="text-black border-black hover:text-gray-600 transition"
            >
              More About Us
            </a></div>
            </div>
          </div>

          {/* Hours Section */}
          <div>
            <h2 className="text-3xl font-light border-b border-black pb-2 mb-4">
              HOURS
            </h2>
           <div className="md:w-[80%] w-full ml-auto">
             <table className="w-full text-[16px] font-light border-collapse">
              <tbody className="">
                <tr className="border-b border-black">
                  <td className="py-2">MONDAY</td>
                  <td className="text-right">CLOSED</td>
                </tr>
                <tr className="border-b border-black">
                  <td className="py-2">EVERY 2ND TUESDAY</td>
                  <td className="text-right">09:00–18:30</td>
                </tr>
                <tr className="border-b border-black">
                  <td className="py-2">WEDNESDAY</td>
                  <td className="text-right">10:00–18:30</td>
                </tr>
                <tr className="border-b border-black">
                  <td className="py-2">THURSDAY</td>
                  <td className="text-right">09:00–18:30</td>
                </tr>
                <tr className="border-b border-black">
                  <td className="py-2">FRIDAY</td>
                  <td className="text-right">10:00–18:30</td>
                </tr>
                <tr className="border-b border-black">
                  <td className="py-2">EVERY 2ND SATURDAY</td>
                  <td className="text-right">10:00–17:30</td>
                </tr>
                <tr>
                  <td className="py-2">SUNDAY</td>
                  <td className="text-right">CLOSED</td>
                </tr>
              </tbody>
            </table>
           </div>
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="relative flex flex-col items-center">
          <img
            src="https://cdn.prod.website-files.com/65528f1f9be889a42e8317f9/655f77168b0ae90041bc4332_Frame%20452.webp"
            alt="Hair model"
            className="object-cover md:h-[500px] h-[300px] w-[400px]"
          />
          <span className="absolute top-2 right-[10%] bg-[#e9e4dc]/80 text-black text-sm px-2 py-[2px]">
            New Blog Post
          </span>
          <p className="text-sm font-medium mt-2">
            WHY BALAYAGE IS THE PERFECT CHOICE FOR YOUR FIRST HAIR COLOR
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
