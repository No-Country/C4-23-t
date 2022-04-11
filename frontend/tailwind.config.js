module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'md': '800px',
        // => @media (min-width: 800px) { ... }
      },
    },
  },
  plugins: [],
};
