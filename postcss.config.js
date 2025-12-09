module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
// This configuration enables the Autoprefixer plugin for PostCSS.

// You write:
// display: flex;
// Autoprefixer automatically converts it into:
// display: -webkit-box;
// display: -ms-flexbox;
// display: flex;
// This ensures older browsers (Safari, IE, old Edge, old Chrome) understand your CSS.

