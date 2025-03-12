// eslint-disable-next-line no-unused-vars
import { useScroll, motion } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-2 bg-blue-500 origin-left"
      transition={{ duration: 0.5, ease: "easeOut" }} // Added transition for slower effect
    />
  );
};

export default ScrollProgress;
