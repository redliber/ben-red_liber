import type { Config } from "tailwindcss";

module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'blood': '#E23C46',
        'abyss': '#231F1A',
        'beige': '#F4DFC3',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config
