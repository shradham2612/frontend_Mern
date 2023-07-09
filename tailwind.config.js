/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#ff6700",
        white: "#ebebeb",
        dblue: "#004e98",
        gblue: "#3a6ea5",
        gwhite: "#c0c0c0",
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
};
