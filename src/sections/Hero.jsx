import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen pt-28 pb-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">

        {/* Left Text */}
        <div>
          <p className="text-purple-400"></p>

          <h1 className="text-5xl font-bold mt-3 leading-tight">
            PRIYANKA S  <br /> FULL STACK DEVELOPER
          </h1>

          <p className="text-gray-400 mt-5">
            I break down complex user experience problems to create
            integrity-focused solutions that connect and convert.
          </p>

          <div className="flex gap-6 mt-6">
  <a
          href="/priyanka final resume1.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 px-6 py-3 rounded-xl hover:bg-purple-700"
  >
    Download CV
  </a>


            <a
  href="#contact"
  className="border border-purple-500 px-6 py-3 rounded-xl hover:bg-purple-700 transition"
>
  Contact Me
</a>

          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">

  <div className="bg-white/5 border border-purple-700 rounded-2xl p-4">
    <h2 className="text-2xl font-bold text-purple-400">🎓 Student</h2>
    <p className="text-gray-300 mt-1">B.E Computer Science and Design</p>
  </div>

  <div className="bg-white/5 border border-purple-700 rounded-2xl p-4">
    <h2 className="text-2xl font-bold text-purple-400">💻 5+</h2>
    <p className="text-gray-300 mt-1">Personal & Academic Projects</p>
  </div>

  <div className="bg-white/5 border border-purple-700 rounded-2xl p-4">
    <h2 className="text-2xl font-bold text-purple-400">🚀</h2>
    <p className="text-gray-300 mt-1">Actively Seeking Internships</p>
  </div>

</div>

        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="w-80 h-96 rounded-3xl bg-gradient-to-br from-purple-700 to-black p-1 shadow-xl">
  <img
  src="/profile.jpeg"
  alt="Priyanka S"
  className="w-full h-full rounded-3xl object-cover object-top px-0"
/>

</div>


        </div>

      </div>
    </section>
  );
};

export default Hero;
