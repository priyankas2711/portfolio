import React from "react";

const Navbar = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-black/60 backdrop-blur-md border-b border-purple-900">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 text-white">

        {/* Logo */}
        <h5 className="text-xl font-semibold tracking-wide">
  PRIYANKA S 
</h5>


        {/* Menu */}
        <nav className="hidden md:flex gap-8">
  <a href="#about">About</a>
  <a href="#internships">Internships</a>
  <a href="#projects">Projects</a>
  <a href="#skills">Skills</a>
  <a href="#contact">Contact</a>
</nav>


        {/* Button */}
        <a
  href="#contact"
  className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
>
  Hire Me
</a>


      </div>
    </header>
  );
};

export default Navbar;
