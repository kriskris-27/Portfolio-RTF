/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col items-center justify-center px-4 md:px-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-4xl font-bold mb-8"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg md:text-xl text-gray-300 max-w-3xl text-center leading-relaxed"
      >
        Yo 👋 I’m <span className="text-white font-semibold">Kris</span> — a dev who vibes with clean code, smooth UX, and building things that actually solve real-world chaos.
        <br /><br />
        I’m all about growing with purpose, staying curious, and learning whatever it takes to get things done. React, TypeScript, Node, Express? Yeah, that’s my zone.
        <br /><br />
        Outside code? I geek out on design systems, love deep diving into backend stuff, and I’m lowkey obsessed with performance & accessibility.
        <br /><br />
        Always down to learn, collab, and build cool stuff that actually matters.
      </motion.p>
    </section>
  );
};

export default About;
