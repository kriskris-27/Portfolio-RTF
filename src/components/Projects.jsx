// ✅ Import Framer Motion
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const projects = [
  { title: "Project 1", description: "Description of Project 1" },
  { title: "Project 2", description: "Description of Project 2" },
  { title: "Project 3", description: "Description of Project 3" },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen " >
      {/* ✅ Title */}
      <motion.h2
        className="text-4xl text-center font-bold mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      {/* ✅ Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-700 rounded-lg shadow-lg border border-gray-600"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }} // ✅ Ensures animation triggers properly
          >
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-gray-300 mt-2">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
