/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Adjust this path as per your project structure
    theme: {
      extend: {
        fontFamily: {
            // nunito: ["Nunito", "sans-serif"],
          dynalight: ["Dynalight", "cursive"], // Adding custom font
        },
      },
    },
    plugins: [],
  };
  