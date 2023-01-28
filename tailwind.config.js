/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js,css}", "./src/views/*.ejs"],
  theme: {
    extend: {
      colors: {
        main: "#4A4147",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
