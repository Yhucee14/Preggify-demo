/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "white",
        secondary: "#63b543",
        other: "#347d58",
        dimBlue: "#193e40",
        dimother: "#f0f5f5",
        lightGreen: "#d5f5d6",
        Green: "",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xx: "375px",
      xs: "412px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
