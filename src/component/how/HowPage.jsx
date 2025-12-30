




import React, { useEffect, useRef } from "react";
import AOS from "aos";
import { motion, useScroll, useTransform } from "framer-motion";

const image1 = "https://cdn.prod.website-files.com/65528f1f9be889a42e83178b/655296eddafb803b9e05a163_IMG_8036-p-1080.webp";
const image2 = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80";
const image3 = "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80";
const image4 = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80";
const image5 = "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80";
const image6 = "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80";
const product = [
  {
    title: "Luxury Hair Styling",
    category: "HAIR STYLING",
    description:
      "Expert haircuts and styling tailored to enhance your personality and suit every occasion.",
    position: "flex md:items-start items-center flex-col ",
    animation: "fade-right",
    delay: 0.2,
    image: image1,
  },
  {
    title: "Signature Hair Spa",
    category: "HAIR CARE",
    description:
      "Deep-conditioning hair spa treatments that repair, nourish, and restore natural shine.",
    position: "flex md:items-end items-center flex-col ",
    animation: "fade-up",
    delay: 0.4,
    image:image1
  },
  {
    title: "Rejuvenating Facials",
    category: "SKIN CARE",
    description:
      "Advanced facial therapies designed to refresh, hydrate, and brighten your skin naturally.",
    position: "flex md:items-start items-center flex-col ",
    animation: "fade-left",
    delay: 0.6,
    image: image1
  },
     {
    title: "Professional Makeup",
    category: "MAKEUP",
    description:
      "Flawless makeup services for weddings, parties, and special events using premium products.",
    position: "flex md:items-end items-center flex-col ",
    animation: "fade-right",
    delay: 0.8,
    image: image1
  },
  {
    title: "Relaxing Body Spa",
    category: "SPA & WELLNESS",
    description:
      "Soothing body spa treatments that relieve stress, rejuvenate the body, and calm the mind.",
    position: "flex md:items-start items-center flex-col ",
    animation: "fade-up",
    delay: 1.0,
    image: image1
  },
];

const HowPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Create transforms for each card outside the map callback
  const card1Progress = useTransform(
    scrollYProgress,
        [0.0, 0.25],  [0, 1]
  );
  const card1RotateY = useTransform(
    card1Progress,
    [0, 0.5, 1],
    [180, 90, 0]
  );
  const card1Opacity = useTransform(
    card1Progress,
    [0, 0.4, 0.6, 1],
    [0, 0, 1, 1]
  );
  const card1Scale = useTransform(
    card1Progress,
    [0, 0.5, 1],
    [0.8, 1, 1]
  );

  const card2Progress = useTransform(
    scrollYProgress,
[0.2, 0.45], [0, 1]
  );
  const card2RotateY = useTransform(
    card2Progress,
    [0, 0.5, 1],
    [180, 90, 0]
  );
  const card2Opacity = useTransform(
    card2Progress,
    [0, 0.4, 0.6, 1],
    [0, 0, 1, 1]
  );
  const card2Scale = useTransform(
    card2Progress,
    [0, 0.5, 1],
    [0.8, 1, 1]
  );

  const card3Progress = useTransform(
    scrollYProgress,
 [0.2, 0.45], [0, 1]
  );
  const card3RotateY = useTransform(
    card3Progress,
    [0, 0.5, 1],
    [180, 90, 0]
  );
  const card3Opacity = useTransform(
    card3Progress,
    [0, 0.4, 0.6, 1],
    [0, 0, 1, 1]
  );
  const card3Scale = useTransform(
    card3Progress,
    [0, 0.5, 1],
    [0.8, 1, 1]
  );

  const card4Progress = useTransform(
  scrollYProgress,
   [0.4, 0.65], [0, 1]
);
const card4RotateY = useTransform(
  card4Progress,
  [0, 0.5, 1],
  [180, 90, 0]
);
const card4Opacity = useTransform(
  card4Progress,
  [0, 0.4, 0.6, 1],
  [0, 0, 1, 1]
);
const card4Scale = useTransform(
  card4Progress,
  [0, 0.5, 1],
  [0.8, 1, 1]
);

const card5Progress = useTransform(
  scrollYProgress,
     [0.6, 0.85],  [0, 1]
);
const card5RotateY = useTransform(
  card5Progress,
  [0, 0.5, 1],
  [180, 90, 0]
);
const card5Opacity = useTransform(
  card5Progress,
  [0, 0.4, 0.6, 1],
  [0, 0, 1, 1]
);
const card5Scale = useTransform(
  card5Progress,
  [0, 0.5, 1],
  [0.8, 1, 1]
);

  // Array of transforms for each card
  const cardTransforms = [
    { rotateY: card1RotateY, opacity: card1Opacity, scale: card1Scale },
    { rotateY: card2RotateY, opacity: card2Opacity, scale: card2Scale },
    { rotateY: card3RotateY, opacity: card3Opacity, scale: card3Scale },
    { rotateY: card4RotateY, opacity: card4Opacity, scale: card4Scale },
    { rotateY: card5RotateY, opacity: card5Opacity, scale: card5Scale },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    AOS.refreshHard();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full min-h-[250vh] bg-cover bg-center text-white overflow-hidden"
      style={{
        backgroundImage: `url('https://cdn.prod.website-files.com/65528f1f9be889a42e83178b/655296edec56b0b09fac5e8b_IMG_8101-p-1080.webp')`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      {/* Animated background overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 z-0"></div> */}
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 z-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/10 rounded-full backdrop-blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center md:pt-32 pt-20 ">
        <motion.h1
          className="text-4xl md:text-6xl font-bold uppercase tracking-widest  leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-sm ">This is How</span>
          <br />
             <span className=" text-red-500">RENASANZ</span>
          
        </motion.h1>

        
        
       
      </div>

      <div className="relative z-10 flex flex-col justify-center gap-12 my-16 md:px-6 lg:px-10 px-4 pb-10">
        {product.map((item, index) => {
          const transforms = cardTransforms[index];

          return (
            <motion.div 
              key={index} 
              className={`${item.position} perspective-1000`}
              style={{
                perspective: "1000px"
              }}
            >
              <motion.div
                className="md:w-96 md:h-96 relative"
                style={{
                  rotateY: transforms.rotateY,
                  opacity: transforms.opacity,
                  scale: transforms.scale,
                  transformStyle: "preserve-3d"
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut"
                }}
              >
                {/* Back of card (initially visible) */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-white/20 flex items-center justify-center"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)"
                  }}
                >
                  <div className="text-center text-white">
                    <div className="text-4xl font-bold mb-4">{item.category}</div>
                    <div className="text-lg opacity-80">Scroll to reveal</div>
                  </div>
                </motion.div>

                {/* Front of card (content) */}
                <motion.div
                  className="absolute inset-0 bg-white/95 backdrop-blur-md text-black p-6 rounded-3xl shadow-2xl border border-white/20 relative overflow-hidden group"
                  style={{
                    backfaceVisibility: "hidden"
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    y: -5,
                    transition: { 
                      duration: 0.3, 
                      ease: "easeOut"
                    }
                  }}
                >
                  {/* Gradient overlay on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  
                  <motion.div 
                    className="relative h-56 rounded-2xl mb-6 overflow-hidden group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ 
                      opacity: 1, 
                      scale: 1,
                      transition: {
                        duration: 0.6,
                        delay: 0.2
                      }
                    }}
                    viewport={{ once: true }}
                  >
                    <motion.img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.1 }}
                      whileInView={{ 
                        scale: 1,
                        transition: {
                          duration: 0.8,
                          delay: 0.3
                        }
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        transition: { duration: 0.5 }
                      }}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.div>
                  
                  <motion.h2 
                    className="text-xl font-bold mb-2 text-gray-800 relative z-10"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ 
                      opacity: 1, 
                      x: 0,
                      transition: {
                        duration: 0.6,
                        delay: 0.4
                      }
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      color: "#3B82F6",
                      x: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {item.title}
                  </motion.h2>
                  
                  <motion.p 
                    className="text-sm font-bold text-blue-500 mb-3 tracking-wider relative z-10"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      transition: {
                        duration: 0.6,
                        delay: 0.5
                      }
                    }}
                    viewport={{ once: true }}
                  >
                    {item.category}
                  </motion.p>
                  
                  <motion.p 
                    className="text-sm text-gray-600 leading-relaxed relative z-10"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      transition: {
                        duration: 0.6,
                        delay: 0.6
                      }
                    }}
                    viewport={{ once: true }}
                  >
                    {item.description}
                  </motion.p>
                  
                  {/* Hover effect button */}
                  <motion.button
                    className="mt-4 px-4 lg:px-10 md:px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 relative z-10 shadow-lg"
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    whileInView={{ 
                      opacity: 0, 
                      y: 0, 
                      scale: 1,
                      transition: {
                        duration: 0.6,
                        delay: 0.7
                      }
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default HowPage;