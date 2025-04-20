/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#5f6FFF",
      text_white: "#ffffff",
      gray: "#ecf0f1",
      black: "#000000",
      green: "#2ecc71",
      red: "#e74c3c",
    },
    gridTemplateColumns: {
      "auto": "repeat(auto-fill, minmax(200px, 1fr))",
    }
  },
  plugins: [],
}

