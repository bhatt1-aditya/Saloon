import React from "react";
import image1 from "../../assets/stylists/stylists.avif";
import image2 from "../../assets/stylists/stylists2.avif";
import image3 from "../../assets/stylists/stylists3.avif";
import image4 from "../../assets/stylists/stylists4.avif";
const Stylists = () => {
  return (
    <div className="bg-[#e9e4dc]">
      <div className="flex flex-col gap-10 w-full  px-6 ">
        <div className="w-full">
          <h1 className="text-3xl lg:text-5xl font-light tracking-wide mb-6">STYLISTS</h1>
          <div className="border-b border-black mt-2"></div>
        </div>

        {/* FULL WIDTH GRID */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-10 gap-6 w-full">
          <div className=" lg:flex hidden"></div>
          <div className=" md:mt-20 mt-2">
            <div className="flex flex-col md:mb-20 mb-4">
              <h1 className="text-4xl font-normal mb-1">Yuri</h1>
              <p className="text-lg text-gray-700 mb-2">Portuguese & English</p>

              <div className="bg-white shadow-sm">
                <img
                  src={image1}
                  alt="Image is missing"
                  className="w-full rounded-md object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <h1 className="text-4xl font-normal mb-1">Grace</h1>
              <p className="text-lg text-gray-700 mb-2">English & Spanish</p>

              <div className="bg-white shadow-sm">
                <img
                  src={image2}
                  alt="Image is missing"
                  className="w-full rounded-md object-cover"
                />
              </div>
            </div>
          </div>
           <div className="">
            <div className="flex flex-col md:mb-20 mb-2">
              <h1 className="text-4xl font-normal mb-1">Paloma</h1>
              <p className="text-lg text-gray-700 mb-2">English & Spanish</p>

              <div className="bg-white shadow-sm">
                <img
                  src={image3}
                  alt="Image is missing"
                  className="w-full rounded-md object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <h1 className="text-4xl font-normal mb-1">Joshua</h1>
              <p className="text-lg text-gray-700 mb-2">English</p>

              <div className="bg-white shadow-sm">
                <img
                  src={image4}
                  alt="Image is missing"
                  className="w-full rounded-md object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stylists;
