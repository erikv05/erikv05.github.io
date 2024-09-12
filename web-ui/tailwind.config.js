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
      },
    },
    animation: {
      "bounce-one": "newbounce 0.5s",
    },
  },
  plugins: [],
};
