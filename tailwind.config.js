/** @type {import('tailwindcss').Config} */
const { Fonts } = require("./src/constants");

module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        blue: "#1A96F0",
        "greyscale-100": "#F5F5F5",
        "greyscale-200": "#EEEEEE",
        "greyscale-300": "#E0E0E0",
        "greyscale-500": "#9E9E9E",
        "greyscale-700": "#616161",
        "dark-10": "#1A1B22",
        "dark-20": "#23252F",
        "dark-30": "#2A2B39",
        "primary-100": "#FFEDF0",
        "primary-500": "#FF4D67",
      },
      fontFamily: {
        "urbanist-bold": [Fonts.UrbanistBold, "sans-serif"],
        "urbanist-medium": [Fonts.UrbanistMedium, "sans-serif"],
        "urbanist-regular": [Fonts.UrbanistRegular, "sans-serif"],
        "urbanist-semibold": [Fonts.UrbanistSemibold, "sans-serif"],
      },
    },
  },
  plugins: [],
};
