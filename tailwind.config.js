module.exports = {
  content: ["*.html", "./src/**/*.{html,js}"],
  mode: "jit",
  purge: ["./**/*.html", "*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      miller: ["miller-display", "sans-serif"],
    },
  },

  plugins: [],
};
