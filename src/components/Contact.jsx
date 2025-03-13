// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-40 text-white text-center relative bg-gradient-to-br from-black via-[#1a1a2e] to-[#16213e]">
    <div className="z-100 
    p-5
">
     

      {/* Title Animation */}
      <motion.h2
        className="text-4xl font-semibold mb-8 tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Contact Me
      </motion.h2>

      {/* Contact Info */}
      <motion.div
        className="max-w-lg mx-auto space-y-4 text-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <a
          href="mailto:krishnakumars0101@gmail.com"
          className="block text-gray-400 hover:text-white transition"
        >
          Slide into My Inbox →
        </a>
        <a
          href="https://github.com/kriskris-27"
          className="block text-gray-400 hover:text-white transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/krishnakumar-s-474b86257/"
          className="block text-gray-400 hover:text-white transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </motion.div>

      <motion.div
        className="absolute bottom-15 left-6 text-xl font-bold text-gray-300"
        initial={{ opacity: 0, x: -50, rotateY: 90 }}
        animate={{ opacity: 1, x: 0, rotateY: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <motion.span
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1.2 }}
  transition={{
    duration: 2, // Slower animation
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  }}
  className="text-transparent bg-clip-text bg-gradient-to-b from-[#FAF6F2] via-[#E8D7F1] to-[#C2E9FB]"
>
  Krishnakumar S
</motion.span>
      </motion.div>
      </div>

    </section>
  );
};

export default Contact;
