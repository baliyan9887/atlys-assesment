/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C6C7CA", // Custom primary color
        secondary: "#7F8084", // Custom secondary color
        btnPrimary: "#4A96FF",
        button: {
          primary: "#4A96FF",
        },
        background: {
          light: "#26292D",
          dark: "#191920",
        },
      },
    },
  },
  // plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
