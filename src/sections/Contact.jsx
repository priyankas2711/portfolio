export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen -mt-16 flex flex-col items-center justify-center text-white px-6 scroll-smooth"
    >
      {/* Heading */}
      <h1 className="text-5xl font-extrabold italic tracking-wide text-center">
        <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          CONNECT WITH ME
        </span>
      </h1>

      <p className="mt-3 text-gray-300 text-lg text-center">
        Open to opportunities, collaborations, and conversations.
      </p>

      {/* Contact Cards */}
      <div className="mt-10 grid md:grid-cols-3 gap-6 w-full max-w-5xl">

        {/* Email */}
        <div className="bg-white/10 border border-purple-500 rounded-2xl p-6 text-center shadow-[0_0_35px_rgba(168,85,247,0.4)] hover:scale-105 transition">
          <div className="text-3xl mb-2">📧</div>
          <h3 className="uppercase text-sm text-gray-300">Email</h3>
          <p className="mt-1 text-xl text-purple-200">
            priyanka27s11@gmail.com
          </p>
        </div>

        {/* Phone */}
        <div className="bg-white/10 border border-purple-500 rounded-2xl p-6 text-center shadow-[0_0_35px_rgba(168,85,247,0.4)] hover:scale-105 transition">
          <div className="text-3xl mb-2">📞</div>
          <h3 className="uppercase text-sm text-gray-300">Phone</h3>
          <p className="mt-1 text-xl text-purple-200">
            +91 8248422199
          </p>
        </div>

        {/* Location */}
        <div className="bg-white/10 border border-purple-500 rounded-2xl p-6 text-center shadow-[0_0_35px_rgba(168,85,247,0.4)] hover:scale-105 transition">
          <div className="text-3xl mb-2">📍</div>
          <h3 className="uppercase text-sm text-gray-300">Location</h3>
          <p className="mt-1 text-xl text-purple-200">
            India
          </p>
        </div>
      </div>

      {/* Email button */}
      <a
        href="mailto:priyanka27s11@gmail.com"
        className="mt-10 bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full text-lg font-semibold shadow-[0_0_35px_rgba(236,72,153,0.6)] hover:scale-110 transition"
      >
        ✉️ Send me an email
      </a>

      {/* Extra links */}
      <div className="mt-6 text-center text-gray-300 space-y-1">

        <p>
          🔗 LinkedIn:
          <a
            href="https://www.linkedin.com/in/priyanka-s-88809032a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 underline ml-2"
          >
            View Profile
          </a>
        </p>

        <p>
          🐙 GitHub:
          <a
            href="https://github.com/priyankas2711"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 underline ml-2"
          >
            Visit Repos
          </a>
        </p>
      </div>
    </section>
  );
}
