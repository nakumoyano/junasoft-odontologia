/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      // sans: ["Helvetica", "Arial", "sans-serif"],
      sans: ["Lato,sans-serif"],
      monserrat: ["Montserrat"],
      nunito: ["Nunito,sans-serif"],
      dancing: ["Dancing Script"],
      kanit: ["Kanit"],
    },
    extend: {
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      animation: {
        bounce: "bounce 3s ease-in-out infinite",
      },
    },
    screens: {
      sm: "300px",
      // => @media (min-width: 640px) { ... }

      md: "700px",
      // => @media (min-width: 768px) { ... }

      lg: "1100px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
