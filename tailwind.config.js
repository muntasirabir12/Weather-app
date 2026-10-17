/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { ink: "#0f2a3d", sky: "#7cc4e8", mist: "#eaf3f7", sun: "#f2a93b" },
    },
  },
  plugins: [],
};
