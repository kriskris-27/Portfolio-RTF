// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import GradualSpacing from "../framer/GradualSpacing";
import { AuroraText } from "./magicui/aurora-text";
import SpinningText from "@/framer/Spinningtext";

const HeroSection = () => {
  return (
    <section className="min-h-[620px] sm:min-h-[720px] sm:m-8 md:min-h-[100vh] md:pt-0 pt-10 flex flex-col items-center justify-between text-center  text-black bg-gradient-to-b from-[#faf6f2] via-[#e8d7f1] to-[#c2e9fb] rounded-t-3xl m-5 " id="home">
<div>
<div className="z-[-10] flex-col items-center justify-center"><GradualSpacing>Creative is joy</GradualSpacing></div>
{/* <div className="absolute flex justify-center items-center  text-neutral-600 top-[-1] right-15">
      <SpinningText children="Full stack • Bike • Gym • Code •" duration={20} />
    </div> */}

<motion.h1
  className="font-bold text-[#202020] text-5xl md:text-7xl lg:text-7xl md:overlay z-10 pt-5 sm:p-2 md:p-0 lg:p-0"
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  Hi, I'm{" "}
  <AuroraText className="text-5xl lg:text-[5rem]">
    Kris
  </AuroraText>
</motion.h1>

     

      <motion.p
        className="m-4 mt-8 mb-8 text-lg text-gray-400 hover:cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        
      >
        Aspiring Full-Stack Dev | Building Web Apps | MERN & beyond | Learning By Doing


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
