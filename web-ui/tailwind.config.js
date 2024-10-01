/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        newbounce: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-7px)" },
          "100%": { transform: "translateY(0px)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "bounce-one": "newbounce 0.5s",
        spin: "spin 1s linear infinite",
      },
    },
  },
  plugins: [],
};
