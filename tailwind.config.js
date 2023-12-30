/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        very_dark_gray: "hsl(0,0%,17%)",
        Dark_Gray: "hsl(0, 0%, 59%)",
      },
      backgroundImage: {
        "hero-desktop": "url('./src/images/pattern-bg-desktop.png')",
        "hero-mobile": "url('./src/images/pattern-bg-desktop.png')",
      },
      fontFamily: {
        "font-family": ["Rubik", "sans-serif"],
      },
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
    },
  },
  plugins: [],
};

