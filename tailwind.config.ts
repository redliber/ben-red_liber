import type { Config } from "tailwindcss";
import { constColors } from "./src/lib/const.ts";

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
        'blood': constColors.blood,
        'bloodDark': constColors.bloodDark,
        'dirtyYellow': constColors.dirtyYellow,
        'abyss': constColors.abyss,
        'beige': constColors.beige,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config
