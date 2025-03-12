// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center  text-black bg-gradient-to-b from-[#faf6f2] via-[#e8d7f1] to-[#c2e9fb] rounded-t-3xl m-8 " id="home">

<h1 className="text-7xl font-pinyon mt-4 text-[#202020]">
  Creative is joy
</h1>
      <motion.h1
        className="font-bold text-6xl text-[#202020] overlay"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="text-[#60bbe6]">Kris</span>
      </motion.h1>

      <motion.p
        className="m-4 text-lg text-gray-400 hover:cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        
      >
        Fullstack Developer | Tech & Digital Marketing Enthusiast
      </motion.p>

      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
  <Link
    to="projects"
    smooth={true}
    duration={900} // Adjusts scroll speed (800ms)
    className="m-8 px-6 py-3 bg-white/20 backdrop-blur-lg rounded-[18px]  text-[#60bbe6] font-semibold shadow-md hover:text-gray-400  hover:bg-[#60bbe6] transition-all cursor-pointer"
  >
    View My Work
  </Link>
</motion.div>

      
    </section>
  );
};

export default HeroSection;
