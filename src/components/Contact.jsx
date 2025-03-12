// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Contact = () => {
    return (
      <section id="contact" className="py-20 bg-gray-900 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <a href="mailto:your.email@example.com" className="text-blue-400 text-lg underline hover:text-blue-500">
          your.email@example.com
        </a>
        <br></br>
        <motion.button
  whileHover={{ scale: 1.1, rotate: 3, backgroundColor: "#3B82F6" }}
  whileTap={{ scale: 0.9, rotate: -3 }}
  className="px-6 py-3 mt-2 bg-blue-500 rounded-lg text-white font-semibold"
>
  Let's Connect
</motion.button>


      </section>
    );
  };
  
  export default Contact;
  