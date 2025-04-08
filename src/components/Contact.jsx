// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";
import { AuroraText } from "./magicui/aurora-text";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // replace with real backend/emailjs
    alert("Thanks for reaching out, I'll reply soon!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-40 text-white text-center relative bg-gradient-to-br from-black via-[#1a1a2e] to-[#16213e]"
    >
      <div className="z-10 p-5 relative">
        {/* Title */}
        <motion.h2
          className="text-4xl font-semibold mb-8 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Contact Me
        </motion.h2>
        <motion.div
          className="mt-10 space-y-3 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
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

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl mx-auto bg-white/5 backdrop-blur-lg rounded-2xl shadow-lg p-8 space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-black/40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-black/40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="What's on your mind?"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-black/40 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-xl transition duration-300"
          >
            Send Message
          </button>
        </motion.form>

        {/* Social Links */}
        

        {/* Signature */}
        <motion.div
          className="absolute bottom-10 left-6 text-xl font-bold text-gray-300"
          initial={{ opacity: 0, x: -50, rotateY: 90 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.2 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="text-transparent bg-clip-text bg-gradient-to-b from-[#FAF6F2] via-[#E8D7F1] to-[#C2E9FB]"
          >
            
          </motion.span>
          {/* <AuroraText className="text-2xl lg:text-3xl ">Krishnakumar S</AuroraText> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
