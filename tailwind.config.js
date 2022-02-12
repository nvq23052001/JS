module.exports = {
  content: ["*.html", "./src/**/*.{html,js}"],
  mode: "jit",
  purge: ["./**/*.html", "*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },

  plugins: [],
};
