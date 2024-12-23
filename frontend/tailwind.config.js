/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: "8px",
        tile: "1.5rem",
      },
      borderColor: {
        DEFAULT: "rgba(68, 68, 68, 1)", // Customize the default border color (this example uses a blue shade)
      },
      borderWidth: {
        DEFAULT: "1.2px",
      },
      colors: {
        navyblue: "#003057",
        techgold: "#B3A369",
        surface: {
          100: "rgba(28, 28, 28, 1)", // #181818
          200: "rgba(45, 45, 50, 1)", // #2d2d2d
          300: "rgba(50, 50, 55, 1)", // #444444
          400: "rgba(65, 65, 70, 1)",
          500: "rgba(116, 116, 116, 1)",
          600: "rgba(143, 143, 143, 1)",
        },
        primary: {
          100: "rgba(255, 92, 10, 1)",
          200: "rgba(255, 113, 46, 1)",
          300: "rgba(255, 133, 73, 1)",
          400: "rgba(255, 151, 99, 1)",
          500: "rgba(255, 169, 124, 1)",
          600: "rgba(255, 186, 149, 1)",
        },
        text: {
          100: "rgba(255, 255, 255, 1)",
          200: "rgba(230, 230, 230, 1)",
          300: "rgba(204, 204, 204, 1)",
          400: "rgba(179, 179, 179, 1)",
          500: "rgba(153, 153, 153, 1)",
          600: "rgba(128, 128, 128, 1)",
        },
      },
    },
  },
  plugins: [],
};
