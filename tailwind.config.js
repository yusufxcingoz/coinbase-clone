module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          coinbase: "#B5C6C6",
        },
        blue: {
          hero: "#E9F6FF",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
