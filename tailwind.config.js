/** @type {import('tailwindcss').Config} */ module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    screens: {
      lg2: { max: "1623px" },
      lg: { max: "1023px" },
      tl: { max: "723px" },
    },
    extend: {
      backgroundImage: {
        back: "url('./src/assets/images/bg.jpg')",
        skills: "url('./src/assets/images/banner-bg.png')",
      },
    },
  },
  plugins: [],
};
