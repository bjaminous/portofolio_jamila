/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6366f1",
          foreground: "#ffffff",
        },
        background: "#030303",
        foreground: "#ffffff",
        card: "#0a0a0a",
        border: "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
