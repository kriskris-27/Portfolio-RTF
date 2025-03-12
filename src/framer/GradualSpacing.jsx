"use client";

// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const GradualSpacing = ({ text = "Creative is Joy" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="inset-0 flex items-start justify-center opacity-10 text-[20vw] text: md:text-[23vw] lg:text-[30vw]
     z-5
    ">
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.p
            ref={ref}
            key={i}
            initial={{ opacity: 0, x: -18 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            exit="hidden"
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center tracking-tight leading-none fontDyna text-[#202020] 
             text-[20vw] "
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.p>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default GradualSpacing;
