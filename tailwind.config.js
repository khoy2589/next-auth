/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        waveRGB: {
          "0%, 100%": { color: "red" },
          "33%": { color: "green" },
          "66%": { color: "blue" },
        },
      },
      animation: {
        waveRGB: "waveRGB 2s infinite",
      },
    },
  },
  plugins: [],
};
