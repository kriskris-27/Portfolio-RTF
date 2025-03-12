// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "contact"];
      let currentSection = "";

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
          }
        }
      });

      // Detect if user has reached the bottom and set "contact" as active
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        currentSection = "contact";
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-5 left-1/2 transform -translate-x-1/2 flex items-center gap-3 overlay bg-opacity-80 backdrop-blur-lg px-6 py-3 rounded-full shadow-lg z-10"
    >
      {/* Menu Items */}
      <div className="flex items-center gap-2">
        {["Home", "Projects", "Contact"].map((item, index) => {
          const sectionId = item.toLowerCase();
          return (
            <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link
                to={sectionId}
                smooth={true}
                duration={900} // Adjusts scroll speed (900ms)
                className={`px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer ${
                  activeSection === sectionId ? "bg-[#60bbe6] text-black" : "text-white bg-black hover:bg-[#60bbe6]"
                }`}
              >
                {item}
              </Link>
            </motion.div>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default Navbar;
