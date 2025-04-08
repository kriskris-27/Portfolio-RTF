/* eslint-disable no-unused-vars */
import React from "react";
import { skills } from "../data/skills";
import SkillIcon from "../assets/skillIcon";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const SkillsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div id="skills">
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-4xl font-bold my-4 text-center block"
      >
        Skills
      </motion.h2>
      <section  className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 sm:p-6 text-white ">
        {skills.map((skill) => (
          <div
            key={skill.category}
            className="bg-zinc-900 p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-all"
          >
            <h3 className="text-xl font-bold mb-2">{skill.category}</h3>
            <p className="text-sm text-zinc-400 mb-4">{skill.description}</p>
            <div className="flex gap-3 flex-wrap">
              {skill.icons.map((icon) => (
                <SkillIcon key={icon} name={icon} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SkillsSection;
