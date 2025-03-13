/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], // Ensures Tailwind scans all relevant files

  theme: {
    extend: {
      fontFamily: {
        doto: ["Doto", "sans-serif"], // ✅ Doto font
        dynalight: ["Dynalight", "cursive"], // ✅ Dynalight font
        spaceGrotesk: ["Space Grotesk", "sans-serif"], // ✅ Space Grotesk font
      },
    },
  },

  plugins: [],
};
