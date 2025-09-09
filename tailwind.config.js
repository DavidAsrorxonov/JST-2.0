const { heroui } = require("@heroui/theme");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/(accordion|calendar|checkbox|drawer|input-otp|select|toggle|toast|popover|divider|button|ripple|spinner|form|modal|listbox|scroll-shadow).js",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        exo2: ["Exo 2", "sans-serif"],
        michroma: ["Michroma", "sans-serif"],
      },
      keyframes: {
        wiggleX: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-3px)" },
          "75%": { transform: "translateX(3px)" },
        },
      },
      animation: {
        wiggleX: "wiggleX 1s ease-in-out infinite",
      },
    },
  },
  plugins: [heroui()],
};
