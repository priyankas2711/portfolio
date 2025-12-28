import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Driven ESG Risk Assessment",
    description: "AI powered system that analyzes sustainability & ESG risk of companies",
    tech: ["Python", "NLP", "Flask", "AI APIs"],
    github: "https://github.com/priyankas2711/AI_Driven_ESG_Risk_Assessment",
  },
  {
    title: "SmartCart – AI Shopping Assistant",
    description: "Real-time smart billing & product detection shopping system",
    tech: ["Python", "OpenCV", "YOLO", "Flask"],
    github: "https://github.com/priyankas2711/Smartcart",
  },
  {
    title: "Career Copilot",
    description: "Real-time job & resume guidance assistant using AI",
    tech: ["React", "Node.js", "Socket.io", "Express"],
    github: "https://github.com/priyankas2711/career-copilot",
  },
  {
    title: "DropSafe",
    description: "Fake delivery & COD scam prevention mobile application",
    tech: ["Flutter", "Firebase", "ML"],
    github: "https://github.com/priyankas2711/Dropsafe",
  },
  {
    title: "Women Safety App",
    description: "Emergency alert + live tracking safety app for women",
    tech: ["Android", "Java", "Google Maps API"],
    github: "https://github.com/priyankas2711/WomenSafetyApp",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen px-6 py-12 flex flex-col items-center">

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-transparent bg-clip-text 
        bg-gradient-to-r from-purple-400 to-pink-500 mb-12 text-center"
      >
        My Projects
      </motion.h1>

      <div className="w-full max-w-5xl space-y-12">
        {projects.map((p, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-purple-700 rounded-2xl p-6 shadow-lg 
            hover:shadow-[0_0_35px_rgba(168,85,247,0.7)] transition-all"
          >
            {/* Title */}
            <h2 className="text-2xl font-bold text-purple-400">{p.title}</h2>

            {/* Description */}
            <p className="text-gray-300 mt-1">{p.description}</p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 mt-3">
              {p.tech.map((t, i) => (
                <span key={i} className="px-3 py-1 text-sm rounded-full bg-purple-800/30 text-purple-200">
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-4 flex gap-4">
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700"
              >
                💻 View GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
