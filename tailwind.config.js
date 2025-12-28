/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        // 👉 slide from bottom but stay in place
        slideInPlace: {
          "0%": { opacity: "0", transform: "translateY(60px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },

        // (keeping older animations in case you reuse later)
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-80px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(80px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        },
      },

      animation: {
        slideInPlace: "slideInPlace 0.8s ease-out forwards",
        slideInLeft: "slideInLeft 0.8s ease-out forwards",
        slideInRight: "slideInRight 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
