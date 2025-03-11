// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center bg-gray-900 text-white">
      <motion.h1
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="text-blue-500">Your Name</span>
      </motion.h1>

      <motion.p
        className="mt-4 text-lg text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Frontend Developer | UI/UX Enthusiast
      </motion.p>

      <motion.a
        href="#projects"
        className="mt-6 px-6 py-3 bg-blue-500 rounded-lg text-white font-semibold shadow-md hover:bg-blue-600 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        View My Work
      </motion.a>
    </section>
  );
};

export default HeroSection;
