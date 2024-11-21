/* eslint-disable no-undef */
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./src/**/*.{html,jsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-rtl'), 
  ],
  
};
