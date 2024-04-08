/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      customUtilities: {
        "overflow-y-hidden-important": {
          property: "overflow-y",
          value: "hidden !important",
        },
      },
      colors: {
        primaryC: "#f9f9f9",
        secondaryC: "#16161d",
        tertiaryC: "#FF6666",
        bgLight: "#f9f9f9",
        bgPrimary: "#f9f9f9",
        bgSecondary: "#16161d",
        textPrimary: "#16161d",
        textSecondary: "#f9f9f9",
        bgRed: "#FF6666",
      },
      screens: {
        sc0: "0px",
        sc560: "560px",
        maxSc360: { max: "360px" },
        sc600: "600px",
        sc800: "800px",
        sc1200: "1200px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
