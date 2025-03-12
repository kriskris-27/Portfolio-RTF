import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const HoverGraph = () => {
  const [position, setPosition] = useState(null);

  const handleMouseMove = (e) => {
    const container = e.currentTarget; // Get the div element being hovered
    const rect = container.getBoundingClientRect(); // Get its position & width
  
    const x = e.clientX - rect.left; // Cursor position relative to the div
    const relativeX = x / rect.width; // Normalize between 0 and 1
  
    // Gaussian function to create a smooth peak at the center of the div
    const maxHeight = 80;
    const height = Math.exp(-Math.pow(relativeX - 0.5, 2) * 10) * maxHeight;
  
    setPosition({ x, height }); // Update state
  };

  const handleMouseLeave = () => {
    setPosition(null);
  };

  return (
    <div className="flex justify-center items-center ">
      {/* Line */}
      <div
        className="relative w-full h-[2px] bg-black cursor-pointer m-1 p-2"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative w-full h-[2px] bg-white cursor-pointer m-1">{/* Middle Line */}</div>
        <AnimatePresence>
          {position && (
            <motion.div
              className="absolute top-0 flex gap-[2px] "
              style={{ left: `${position.x}px`, transform: "translateX(-50%)" }}

              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Graph bars (growing upwards) */}
              {[...Array(20)].map((_, i) => {
                const barHeight =
                  position.height * Math.exp(-Math.pow((i - 10) / 5, 2));

                return (
                  <motion.div
                    key={i}
                    className="w-[2px] bg-gray-200 origin-bottom"
                    style={{
                        left: `${position.x}px`, 
                        transform: "translateX(-50%)" // Ensures it's centered
                      }}
                    initial={{ height: 0, transform: "translateY(0px)" }}
                    animate={{ height: `${barHeight}px`, transform: `translateY(-${barHeight}px)` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HoverGraph;
