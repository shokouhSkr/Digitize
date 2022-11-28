/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["Vazir"],
        iranyekan: ["iranyekan"],
      },
      fontSize: {
        "2xs": [
          "10px",
          {
            lineHeight: "12px",
          },
        ],
      },
      screens: {
        "2xs": "375px",
        xs: "425px",
        sm: "640px",
        md: "768px",
        lg: "900px",
        xl: "1024px",
        "2xl": "1250px",
        "3xl": "1440px",
      },
    },
  },
  plugins: [],
};
