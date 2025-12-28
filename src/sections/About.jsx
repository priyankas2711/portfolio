import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen mt-[-60px] flex items-center justify-center px-6 py-8 bg-gradient-to-b from-black via-[#070015] to-black"
    >
      <div className="max-w-4xl text-center">

        {/* Section heading */}
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 animate-pulse">
          About Me
        </h1>

        {/* Animated card */}
        <div className="mt-8 p-8 rounded-3xl bg-white/5 border border-purple-700 shadow-[0_0_30px_rgba(168,85,247,0.3)] 
                        hover:scale-[1.02] hover:shadow-[0_0_45px_rgba(168,85,247,0.6)] transition-all duration-500">

          <p className="text-gray-300 text-lg leading-relaxed">

            I’m <span className="text-purple-400 font-semibold">Priyanka S</span>,  
            a passionate <span className="text-purple-400 font-semibold">Full-Stack Developer</span> with a strong interest in
            <span className="text-purple-400"> technology, design, and problem-solving</span>.

            <br /><br />

            I love converting ideas into <span className="text-purple-400">interactive applications</span>
            using modern frameworks and tools. My interests include:

            <br /><br />

            <span className="text-pink-400 font-semibold">
              • UI/UX Design  
              • APIs  
              • Real-time Applications  
              • AI-Integrated Solutions
            </span>

            <br /><br />

            I believe in <span className="text-purple-400">continuous learning, teamwork,</span>  
            and building projects that create a <span className="text-purple-400">positive impact</span>.
          </p>

        </div>
        {/* Animated Quote Line */}
<div className="mt-10">

  <p className="text-2xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400
                animate-pulse">
    “Learning every day. Improving every day. Building every day.”
  </p>

  {/* Typewriter underline */}
  <div className="mx-auto mt-2 w-72 border-b-2 border-purple-500 animate-[pulse_2s_ease-in-out_infinite]"></div>

</div>


        {/* subtle glow animation circle */}
        <div className="w-40 h-40 bg-purple-600/30 blur-3xl rounded-full mx-auto mt-10 animate-ping"></div>

      </div>
    </section>
  );
};

export default About;
