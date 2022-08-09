const colors = require('tailwindcss/colors')

module.exports = {
  important: false,
  content: ["./frontend/src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
