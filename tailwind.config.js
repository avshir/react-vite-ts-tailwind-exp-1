
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors(theme) {
        return {
          primary: {
            DEFAULT: "hsl(263, 55%, 52%)",
            darkGrayishBlue: "hsl(217, 19%, 35%)",
            darkBlackishBlue: "hsl(219, 29%, 14%)",
          },
          gray: {
            ...theme.colors.gray,
            100: "hsl(0, 0%, 81%)",
            200: "hsl(210, 46%, 95%)",
          },
        };
      },
    },
  },
  plugins: [],
};

// ## Colors

// ### Primary

// Moderate violet: hsl(263, 55%, 52%)
// Very dark grayish blue: hsl(217, 19%, 35%)
// Very dark blackish blue: hsl(219, 29%, 14%)
// White: hsl(0, 0%, 100%)

// ### Neutral

// Light gray: hsl(0, 0%, 81%)
// Light grayish blue: hsl(210, 46%, 95%)