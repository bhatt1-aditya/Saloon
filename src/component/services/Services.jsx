import { useRef, useState } from "react";
import service1 from "../../assets/services/service1.png";
import { GoArrowUpRight } from "react-icons/go";

const servicesData = [
  // ================= HAIR CUT =================
  {
    id: 1,
    title: "Quick Cut / Tips Cut",
    category: "Hair Cut",
    price: "€35",
    duration: "45 mins",
    desc: "• Trim up to 2 cm of hair • Must come with washed hair",
    image: service1,
  },
  {
    id: 2,
    title: "Short Cut + Wash & Style",
    category: "Hair Cut",
    price: "From €45",
    duration: "1 hour",
    desc: "• Short back and sides • Includes wash, blow dry & styling",
    image: service1,
  },
  {
    id: 3,
    title: "Long Cut + Wash & Dry",
    category: "Hair Cut",
    price: "From €55",
    duration: "1 hour",
    desc: "• Hair covers ears or longer • Includes wash & styling",
    image: service1,
  },
  {
    id: 4,
    title: "Kids Hair Cut",
    category: "Hair Cut",
    price: "€25",
    duration: "30 mins",
    desc: "• For children under 10 • Simple trim & style",
    image: service1,
  },
  {
    id: 5,
    title: "Men’s Classic Cut",
    category: "Hair Cut",
    price: "€30",
    duration: "40 mins",
    desc: "• Traditional men’s haircut • Clean finish",
    image: service1,
  },

  // ================= BALAYAGE =================
  {
    id: 6,
    title: "Balayage Short",
    category: "Balayage",
    price: "€160",
    duration: "3 hours",
    desc: "• Hair shorter than collar bone • Includes toner & styling",
    image: service1,
  },
  {
    id: 7,
    title: "Balayage Medium",
    category: "Balayage",
    price: "€175",
    duration: "3 hours",
    desc: "• Hair up to chest length • Includes wash & blow dry",
    image: service1,
  },
  {
    id: 8,
    title: "Balayage Long",
    category: "Balayage",
    price: "€185",
    duration: "3 hours",
    desc: "• Hair between collar bone & mid-chest",
    image: service1,
  },
  {
    id: 9,
    title: "Balayage Extra Long",
    category: "Balayage",
    price: "From €210",
    duration: "4 hours",
    desc: "• Very long hair • Consultation recommended",
    image: service1,
  },
  {
    id: 10,
    title: "Balayage Touch Up",
    category: "Balayage",
    price: "From €120",
    duration: "2.5 hours",
    desc: "• Refresh previous balayage • Includes toner",
    image: service1,
  },

  // ================= COLOR =================
  {
    id: 11,
    title: "Root Color",
    category: "Color",
    price: "€60",
    duration: "1.5 hours",
    desc: "• Covers root regrowth • Single color",
    image: service1,
  },
  {
    id: 12,
    title: "Full Hair Color",
    category: "Color",
    price: "From €90",
    duration: "2 hours",
    desc: "• Full length color • Includes wash & dry",
    image: service1,
  },
  {
    id: 13,
    title: "Highlights Partial",
    category: "Color",
    price: "From €95",
    duration: "2 hours",
    desc: "• Partial highlights • Natural finish",
    image: service1,
  },
  {
    id: 14,
    title: "Highlights Full",
    category: "Color",
    price: "From €130",
    duration: "3 hours",
    desc: "• Full head highlights • Includes toner",
    image: service1,
  },
  {
    id: 15,
    title: "Color Correction",
    category: "Color",
    price: "Consultation",
    duration: "Varies",
    desc: "• Fix uneven or damaged color • Consultation required",
    image: service1,
  },

  // ================= STYLING =================
  {
    id: 16,
    title: "Blow Dry Short",
    category: "Styling",
    price: "€30",
    duration: "30 mins",
    desc: "• Short hair styling • Smooth finish",
    image: service1,
  },
  {
    id: 17,
    title: "Blow Dry Long",
    category: "Styling",
    price: "€40",
    duration: "45 mins",
    desc: "• Long hair styling • Volume & finish",
    image: service1,
  },
  {
    id: 18,
    title: "Hair Styling (Event)",
    category: "Styling",
    price: "From €55",
    duration: "1 hour",
    desc: "• Party or event styling",
    image: service1,
  },
  {
    id: 19,
    title: "Bridal Hair Trial",
    category: "Styling",
    price: "€80",
    duration: "1.5 hours",
    desc: "• Bridal hairstyle consultation & trial",
    image: service1,
  },

  // ================= TREATMENT =================
  {
    id: 20,
    title: "Deep Conditioning",
    category: "Treatment",
    price: "€35",
    duration: "30 mins",
    desc: "• Moisturizing treatment • Improves shine",
    image: service1,
  },
  {
    id: 21,
    title: "Keratin Treatment",
    category: "Treatment",
    price: "From €150",
    duration: "2.5 hours",
    desc: "• Smooth & frizz-free hair",
    image: service1,
  },
  {
    id: 22,
    title: "Hair Spa",
    category: "Treatment",
    price: "€50",
    duration: "45 mins",
    desc: "• Relaxing scalp & hair therapy",
    image: service1,
  },
  {
    id: 23,
    title: "Olaplex Treatment",
    category: "Treatment",
    price: "€45",
    duration: "30 mins",
    desc: "• Repairs damaged hair bonds",
    image: service1,
  },

  // ================= ADD-ONS =================
  {
    id: 24,
    title: "Fringe Trim",
    category: "Add On",
    price: "€10",
    duration: "10 mins",
    desc: "• Bangs / fringe trim only",
    image: service1,
  },
  {
    id: 25,
    title: "Hair Wash Only",
    category: "Add On",
    price: "€15",
    duration: "15 mins",
    desc: "• Shampoo & conditioning",
    image: service1,
  },
  {
    id: 26,
    title: "Scalp Massage",
    category: "Add On",
    price: "€20",
    duration: "15 mins",
    desc: "• Relaxing scalp massage",
    image: service1,
  },
  {
    id: 27,
    title: "Toner Add-On",
    category: "Add On",
    price: "€25",
    duration: "20 mins",
    desc: "• Enhance or neutralize color",
    image: service1,
  },

  // ================= PREMIUM =================
  {
    id: 28,
    title: "Premium Hair Makeover",
    category: "Premium",
    price: "From €250",
    duration: "4 hours",
    desc: "• Cut, color, treatment & styling",
    image: service1,
  },
  {
    id: 29,
    title: "Luxury Hair Spa",
    category: "Premium",
    price: "€90",
    duration: "1.5 hours",
    desc: "• Premium products & massage",
    image: service1,
  },
  {
    id: 30,
    title: "VIP Styling Session",
    category: "Premium",
    price: "€120",
    duration: "2 hours",
    desc: "• Personalized styling & care",
    image: service1,
  },
  {
    id: 31,
    title: "Bridal Full Package",
    category: "Premium",
    price: "From €350",
    duration: "5 hours",
    desc: "• Bridal hair, trial & styling",
    image: service1,
  },
  {
    id: 32,
    title: "Photoshoot Styling",
    category: "Premium",
    price: "€150",
    duration: "2.5 hours",
    desc: "• Professional shoot-ready styling",
    image: service1,
  },
  {
    id: 33,
    title: "Hair Detox Treatment",
    category: "Treatment",
    price: "€60",
    duration: "45 mins",
    desc: "• Removes buildup & toxins",
    image: service1,
  },
  {
    id: 34,
    title: "Express Styling",
    category: "Styling",
    price: "€25",
    duration: "20 mins",
    desc: "• Quick styling for busy days",
    image: service1,
  },
  {
    id: 35,
    title: "Senior Citizen Cut",
    category: "Hair Cut",
    price: "€28",
    duration: "40 mins",
    desc: "• Comfortable & classic haircut",
    image: service1,
  },
  {
    id: 36,
    title: "Hair Consultation",
    category: "Consultation",
    price: "Free",
    duration: "20 mins",
    desc: "• Discuss hair goals & options",
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
    <div className=" mx-auto  bg-[#E9E4DC] p-6">
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
                    className="flex justify-between items-center py-2 cursor-pointer"
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
