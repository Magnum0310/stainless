/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orangeColor: "#f5a81e",
        bgPrimary: "#32353a",
        bgSecondary: "#232532",
        bgCard: "#323444",
        darkGray: "#737373",
        lightGray: "#D9D9D9",
      },
      fontFamily: {
        Alfa: ["Alfa Slab One", "serif"],
        Belgrano: ["Belgrano", "serif"],
      },
      screens: {
        desktop: "1600px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
