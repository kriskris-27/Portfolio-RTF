// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import GradualSpacing from "../framer/GradualSpacing";


const HeroSection = () => {
  return (
    <section className="min-h-[550px] sm:min-h-[650px] sm:m-8 md:min-h-[100vh] md:pt-0 pt-10 flex flex-col items-center justify-between text-center  text-black bg-gradient-to-b from-[#faf6f2] via-[#e8d7f1] to-[#c2e9fb] rounded-t-3xl m-5 " id="home">
<div>
<div className="z-[-10] flex-col items-center justify-center"><GradualSpacing>Creative is joy</GradualSpacing></div>

      <motion.h1
        className="font-bold text-[#202020] text-6xl md:text-7xl lg:text-9xl md:overlay z-10  pt-5 sm:p-2 md:p-0 lg:p-0"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="text-[#60bbe6] ">Kris</span>
      </motion.h1>
     

      <motion.p
        className="m-4 mt-8 mb-8 text-lg text-gray-400 hover:cursor-pointer"
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
    className="m-10  px-6 py-3 bg-white/20 backdrop-blur-lg rounded-[18px]  text-[#60bbe6] font-semibold shadow-md hover:text-gray-400  hover:bg-[#60bbe6] transition-all cursor-pointer "
  >
    View My Work
  </Link>
</motion.div>

</div>
    </section>
  );
};

export default HeroSection;
