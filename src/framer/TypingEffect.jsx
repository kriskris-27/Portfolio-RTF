"use client";

import React, { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";

const TypingEffect = ({ text = "Brewing ideas, coding solutions." }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <h2
      ref={ref}
      className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]"
    >
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.2, delay: index * 0.1 }}
        >
          {letter}
        </motion.span>
      ))}
    </h2>
  );
};

export default TypingEffect;
