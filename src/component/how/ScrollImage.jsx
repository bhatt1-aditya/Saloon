import { useEffect, useRef, useState } from "react";

const ScrollImage = ({ src, direction, index }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const progress = Math.max(0, Math.min(1, 
        (windowHeight - rect.top) / (windowHeight + rect.height)
      ));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate position based on direction and scroll progress
  const getTransform = () => {
    if (direction === 'left') {
      // Start from left (-100%) and move to center (0%)
      const xPos = -100 + (scrollProgress * 100);
      return `translateX(${xPos}%)`;
    } else {
      // Start from right (100%) and move to center (0%)
      const xPos = 100 - (scrollProgress * 100);
      return `translateX(${xPos}%)`;
    }
  };

  return (
    <div 
      ref={containerRef}
      className="h-screen flex items-center justify-center px-8 relative z-30"
      style={{ opacity: scrollProgress }}
    >
      <div
        className="w-full h-[80vh] max-w-xl"
        style={{
          transform: getTransform(),
          transition: ' 0.1s ease-out'
        }}
      >
        <img
          src={src}
          alt={`Scroll image ${index + 1}`}
          className="h-full w-full rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
};

export default ScrollImage;