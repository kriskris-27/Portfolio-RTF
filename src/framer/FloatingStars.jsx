// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const FloatingObjects = () => {
  const objects = [
    { type: "star", size: "w-[4px] h-[4px] bg-white", emoji: "★" },
    { type: "snowball", size: "w-[6px] h-[6px] bg-white", emoji: "❆" },
    
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => {
        const randomObject = objects[Math.floor(Math.random() * objects.length)];
        // const randomX = Math.random() * 100; // Random horizontal position
        // const randomY = Math.random() * 100;

        return (
          <motion.div
            key={i}
            className={`absolute ${randomObject.size} shadow-md`}
            initial={{ opacity: 0, y: `${Math.random() * 50 + 50}vh`, x: `${Math.random() * 100}%` }}

            animate={{ opacity: [0, 1, 1, 0], y: ["50vh", "-10vh"] }}


            transition={{ duration: 8 + Math.random() * 3, repeat: Infinity, ease: "linear", delay: Math.random() * 3 }}

            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {randomObject.emoji ? randomObject.emoji : ""}
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingObjects;
