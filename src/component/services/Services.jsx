import { useRef, useState } from "react";
import service1 from "../../assets/services/service1.png";
import { GoArrowUpRight } from "react-icons/go";

const servicesData = [
  {
    id: 1,
    title: "Quick Cut/Tips Cut",
    category: "Hair Cut",
    price: "€35",
    duration: "45mins",
    desc: "• Trim up to 2 cm of hair.• Must come with washed hair.",
    image: service1,
  },
  {
    id: 2,
    title: "Short Cut + Wash & Style",
    category: "Hair Cut",
    price: "From €45",
    duration: "1 hour",
    desc: "• Shape hair for new styles. • Must have short back and sides. • Includes hair wash, blow dry, and styling.",
    image: service1,
  },
  {
    id: 3,
    title: "Long Cut + Wash & Dry",
    category: "Hair Cut",
    price: "From €55",
    duration: "1 hour",
    desc: "• Shape hair for new styles. • For hair that covers the ears or longer. • Includes hair wash, blow dry, and styling.",
    image: service1,
  },
  {
    id: 4,
    title: "Balayage Short",
    category: "Balayage",
    price: "€160",
    duration: "3 hours",
    desc: "• Balayage for hair that is shorter than the collar bone. • Includes simple toner, hair wash, blow dry, and styling. • For first-time, consultation highly recommended.",
    image: service1,
  },
  {
    id: 5,
    title: "Balayage Long",
    category: "Balayage",
    price: "€185",
    duration: "3 hours",
    desc: "• Balayage for hair that is between the collar bone and the mid-chest. • Includes simple toner, hair wash, blow dry, and styling. • For first-time, consultation highly recommended.",
    image: service1,
  },
  {
    id: 6,
    title: "Balayage Extra",
    category: "Balayage",
    price: "From €210",
    duration: "4 hours",
    desc: "• Balayage for hair that is longer than the mid-chest.. • Includes simple toner, hair wash, blow dry, and styling.• Price is for reference. Changes from case to case. For first-time, consultation highly recommended.",
    image: service1,
  },
  {
    id: 7,
    title: "Balayage Extra",
    category: "Balayage",
    price: "From €210",
    duration: "4 hours",
    desc: "• Balayage for hair that is longer than the mid-chest.. • Includes simple toner, hair wash, blow dry, and styling.• Price is for reference. Changes from case to case. For first-time, consultation highly recommended.",
    image: service1,
  },
];

const Services = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  const [previewIndex, setPreviewIndex] = useState(null);
  const [previewTop, setPreviewTop] = useState(0);
  const gridRef = useRef(null);
  const contentRefs = useRef([]);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
    setPreviewIndex(idx);
  };

  const handleMouseEnter = (idx, e) => {
    const gridEl = gridRef.current;
    const headerEl = e.currentTarget;
    if (!gridEl || !headerEl) {
      setPreviewIndex(idx);
      return;
    }

    const gridRect = gridEl.getBoundingClientRect();
    const headerRect = headerEl.getBoundingClientRect();

    const topRelative =
      headerRect.top - gridRect.top + headerRect.height / 2 - 52;
    const maxTop = gridEl.clientHeight - 104;
    const clampedTop = Math.max(0, Math.min(topRelative, Math.max(0, maxTop)));

    setPreviewTop(clampedTop);
    setPreviewIndex(idx);
  };

  const handleMouseLeave = () => {
    setPreviewIndex(null);
  };

  return (
    <div className="max-w-7xl mx-auto mt-10 bg-[#E9E4DC] p-6">
      <h1 className="text-3xl lg:text-5xl font-light tracking-wide mb-6">
        SERVICE &amp; PRICE
      </h1>
      <hr className="border-t border-black/80 mb-6" />
      <div
        ref={gridRef}
        className="relative grid grid-cols-3 grid-rows-1 min-h-[50rem] gap-6"
      >
        {/* LEFT COLUMN (preview will be absolutely positioned inside here) */}
        <div className="col-span-1 hidden lg:block">
          <div className="relative h-full">
            {previewIndex !== null && (
              <div
                className="absolute right-0 w-56 rounded overflow-hidden shadow-md"
                style={{
                  top: previewTop,
                }}
              >
                <img
                  src={servicesData[previewIndex].image}
                  alt={servicesData[previewIndex].title}
                  className="w-full h-52 object-cover"
                />
              </div>
            )}
          </div>
        </div>

        {/* SERVICES LIST */}
        <div className="col-span-3 lg:col-span-2">
          <div className="space-y-4">
            {servicesData.map((s, idx) => {
              const isOpen = openIndex === idx;
              const scrollHeight = contentRefs.current[idx]?.scrollHeight ?? 0;
              const maxHeight = isOpen ? `${scrollHeight}px` : "0px";

              return (
                <div key={s.id} className="border-b border-black/30">
                  <div
                    className="flex justify-between items-center py-4 cursor-pointer"
                    role="button"
                    aria-expanded={isOpen}
                    aria-controls={`accordion-content-${idx}`}
                    onClick={() => toggle(idx)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") toggle(idx);
                    }}
                    tabIndex={0}
                    onMouseEnter={(e) => handleMouseEnter(idx, e)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div>
                      <h2 className="font-normal text-[16px] lg:text-2xl">
                        {s.title}
                      </h2>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="pr-[1.3rem] lg:pr-[13rem]">
                        <h4 className="font-normal text-lg">{s.category}</h4>
                      </div>

                      <div className="flex gap-5 items-center justify-center">
                        <div className="pb-1 text-xl font-bold">
                          {isOpen ? "-" : "+"}
                        </div>
                        <div className="h-5 w-5 rounded-full bg-[#91221E]"></div>
                      </div>
                    </div>
                  </div>

                  {/* Accordion content */}
                  <div
                    id={`accordion-content-${idx}`}
                    ref={(el) => (contentRefs.current[idx] = el)}
                    className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
                    style={{ maxHeight }}
                  >
                    <div className="py-4 flex flex-col gap-4 md:flex-row md:justify-between md:items-start">
                      <p className="text-base font-medium md:max-w-xl leading-relaxed">
                        {s.desc}
                      </p>

                      <div className="flex md:flex-col justify-between md:justify-end gap-2 text-left lg:text-right font-medium text-[15px]">
                        <div>
                          <p>{s.price}</p>
                          <p>{s.duration}</p>
                        </div>
                        <button className="underline mt-1 md:mt-0 flex items-center">
                          Book Here <GoArrowUpRight className="font-bold" />
                        </button>
                      </div>
                    </div>

                    <hr />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
