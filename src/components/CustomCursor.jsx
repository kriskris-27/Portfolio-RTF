import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorSize, setCursorSize] = useState(10);
  const [cursorColor, setCursorColor] = useState("rgba(255, 255,255 , 0.8)");

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  useEffect(() => {
    const hoverTargets = document.querySelectorAll("a, button, .hoverable");
    hoverTargets.forEach((target) => {
      target.addEventListener("mouseenter", () => {
        setCursorSize(40);
        setCursorColor("rgba(0, 0,0 , 0.3)");
      });
      target.addEventListener("mouseleave", () => {
        setCursorSize(10);
        setCursorColor("rgba(255, 255,255 , 0.8)");
      });
    });

    return () => {
      hoverTargets.forEach((target) => {
        target.removeEventListener("mouseenter", () => {});
        target.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none mix-blend-difference z-50000"
      style={{
        width: cursorSize,
        height: cursorSize,
        backgroundColor: cursorColor,
        borderRadius: "50%",
      }}
      animate={{ x: cursorPos.x - cursorSize / 2, y: cursorPos.y - cursorSize / 2 }}
      transition={{ type: "spring", stiffness: 120, damping: 10 }}
    />
  );
};

export default CustomCursor;
