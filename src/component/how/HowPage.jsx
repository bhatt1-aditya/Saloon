import ScrollImage from "./ScrollImage";
import image1 from "../../assets/how/how1.webp"
import image2 from "../../assets/how/image2.webp"
import image3 from "../../assets/how/image3.webp"
import image4 from "../../assets/how/image4.webp"
import image5 from "../../assets/how/image5.webp"
import image6 from "../../assets/how/image6.webp"
const HowPage = () => {
  const images = [
    image1,image2,image3,image4,image5,image6
  ];

  return (
    <div className="relative bg-[#e9e4dc]">
      {/* FIXED TITLE - stays in center while images scroll over it */}
      <div className="fixed  left-0 w-full h-screen bg-[#e9e4dc] flex flex-col items-center justify-center text-center z-50 pointer-events-none">
        <p className="text-sm tracking-wide text-gray-800 mb-2">
          THIS IS HOW
        </p>

        <h1 className="text-6xl font-bold text-[#B21F1F] tracking-widest">
          RENASANZ
        </h1>
        <span className="text-2xl mt-4 animate-bounce">↓</span>
      </div>

      {/* SCROLL IMAGES - scroll over the fixed text */}
      <div className="relative z-20">
        {/* Spacer for initial view */}
        <div className="h-screen bg-black">
              <div className="h-screen bg-[#e9e4dc] flex flex-col items-center justify-center text-center">
        <p className="text-sm tracking-wide text-gray-800 mb-2">
          THIS IS HOW
        </p>

        <h1 className="text-6xl font-bold text-[#B21F1F] tracking-widest">
          RENASANZ
        </h1>
        <span className="text-2xl mt-4 animate-bounce">↓</span>
      </div>
        </div>
        
        {images.map((img, index) => (
          <ScrollImage
            key={index}
            src={img}
            direction={index % 2 === 0 ? "left" : "right"}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default HowPage;