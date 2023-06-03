/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      darkBlue: "hsl(209, 23%, 22%)",
      veryDarkBlue: "hsl(207, 26%, 17%)",
      veryLightBlue: "hsl(200, 15%, 8%)",
      darkGray: "hsl(0, 0%, 52%)",
      veryLightGray: "hsl(0, 0%, 98%)",
      white: "hsl(0, 0%, 100%)",
    },
    extend: {
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
