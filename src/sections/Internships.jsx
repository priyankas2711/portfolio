import React, { useEffect, useRef, useState } from "react";

const Internships = () => {

  const cardRefs = useRef([]);
  const [visible, setVisible] = useState([]);

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => [...prev, entry.target]);
          }
        });
      },
      { threshold: 0.3 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="internships"
      className="min-h-screen px-6 py-6 mt-[-120px] flex flex-col items-center"
    >
      {/* Heading */}
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-6">
        My Internships
      </h1>

      <div className="w-full max-w-4xl space-y-16 mt-4">

        {/* Internship 1 */}
        <div className="flex justify-start">
          <div
            ref={(el) => (cardRefs.current[0] = el)}
            className={`bg-white/5 border border-purple-700 rounded-2xl p-6 w-[85%]
              shadow-lg hover:scale-[1.02] transition-all duration-700
              hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]
              ${visible.includes(cardRefs.current[0])
                ? "opacity-100 animate-slideInLeft"
                : "opacity-0 translate-x-[-60px]"
              }`}
          >
            <h2 className="text-2xl font-bold text-purple-400">
              VaultofCodes — Java Developer Intern
            </h2>
            <p className="text-gray-400 text-sm mb-2">July 2025 – Aug 2025</p>

            <ul className="text-gray-200 list-disc ml-5 space-y-1">
              <li>Developed Java applications using OOP, collections & exception handling</li>
              <li>Solved coding problems and optimized logic</li>
              <li>Improved performance & code quality</li>
            </ul>
          </div>
        </div>

        {/* Internship 2 */}
        <div className="flex justify-end">
          <div
            ref={(el) => (cardRefs.current[1] = el)}
            className={`bg-white/5 border border-pink-600 rounded-2xl p-6 w-[85%]
              shadow-lg hover:scale-[1.02] transition-all duration-700
              hover:shadow-[0_0_40px_rgba(236,72,153,0.6)]
              ${visible.includes(cardRefs.current[1])
                ? "opacity-100 animate-slideInRight"
                : "opacity-0 translate-x-[60px]"
              }`}
          >
            <h2 className="text-2xl font-bold text-pink-400">
              Green Skill Intern — 1M1B Foundation
            </h2>
            <p className="text-gray-400 text-sm mb-2">Aug 2025 – Sep 2025</p>

            <ul className="text-gray-200 list-disc ml-5 space-y-1">
              <li>Research on renewable energy systems</li>
              <li>Analyzed sustainable technology trends</li>
              <li>Supported environmental solution projects</li>
            </ul>
          </div>
        </div>

        {/* Internship 3 */}
        <div className="flex justify-start">
          <div
            ref={(el) => (cardRefs.current[2] = el)}
            className={`bg-white/5 border border-purple-700 rounded-2xl p-6 w-[85%]
              shadow-lg hover:scale-[1.02] transition-all duration-700
              hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]
              ${visible.includes(cardRefs.current[2])
                ? "opacity-100 animate-slideInLeft"
                : "opacity-0 translate-x-[-60px]"
              }`}
          >
            <h2 className="text-2xl font-bold text-purple-400">
              Campus Ambassador — E-Cell IIT Bombay
            </h2>
            <p className="text-gray-400 text-sm mb-2">June 2025 – Nov 2025</p>

            <ul className="text-gray-200 list-disc ml-5 space-y-1">
              <li>Promoted events & entrepreneurship programs</li>
              <li>Organized outreach & engagement activities</li>
              <li>Increased participation & event visibility</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Internships;
