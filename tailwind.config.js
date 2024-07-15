/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EDB33C",
        secondary: "#286F6C",
        secHover : "rgb(62 132 129)"
      },
      fontFamily: {
        poppins: ["poppins"],
        bubbleGum : ['Bubblegum Sans']
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
