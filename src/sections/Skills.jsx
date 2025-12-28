import React from "react";
import { motion } from "framer-motion";

const skills = [
  "Java",
  "C",
  "C++",
  "Python",
  "JavaScript",
  "React",
  "HTML",
  "CSS",
  "Node.js",
  "Figma",
  "Git",
  "GitHub",
  "UI/UX",
  "Problem Solving",
  "Communication",
  "Time Management"
];

const Skills = () => {
  return (
    <section
  id="skills"
  className="min-h-[70vh] -mt-10 flex flex-col items-center justify-center overflow-hidden relative"
>

      {/* heading */}
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-12">
        My Skills
      </h1>

      {/* floating neon chips grid */}
      <div className="flex flex-wrap justify-center gap-6 max-w-5xl">

        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.15 }}
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 2 + Math.random(),
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="rounded-full px-6 py-3 text-lg font-semibold
            shadow-[0_0_20px_rgba(168,85,247,0.5)]
            border border-purple-500/60
            bg-black/60 text-purple-200"
          >
            {skill}
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Skills;
