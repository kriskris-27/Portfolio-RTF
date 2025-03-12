// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-5 left-1/2 transform -translate-x-1/2 flex items-center gap-3 overlay bg-opacity-80 backdrop-blur-lg px-6 py-3 rounded-full shadow-lg z-10"
    >
      {/* Logo */}
      {/* <div className="text-black font-bold text-lg px-4 py-2 bg-white rounded-full">K</div> */}

      {/* Menu Items */}
      <div className="flex items-center gap-2"> 
  {["Home", "Projects", "Contact"].map((item, index) => (
    <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Link
        to={item.toLowerCase()}
        smooth={true}
        duration={900} // Adjusts scroll speed (900ms)
        className="px-4 py-2 text-white bg-black rounded-lg transition-all duration-300 hover:bg-[#60bbe6] cursor-pointer"
      >
        {item}
      </Link>
    </motion.div>
  ))}
</div>


      {/* Visit Button */}
      {/* <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="#"
        className="px-5 py-2 bg-white text-black rounded-lg font-semibold shadow-md"
      >
        About
      </motion.a> */}
    </motion.nav>
  );
};

export default Navbar;
