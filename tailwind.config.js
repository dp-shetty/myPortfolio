// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      screens: {
        mob: { min: "320px", max: "480px" }, // Custom Mobile screens
        belowTab: { min: "481px", max: "768px" }, // Custom Below Tablet
        tab: { min: "769px", max: "1024px" }, // Custom Tablet screens
        lap: { min: "1025px", max: "1200px" }, // Custom Laptop screens
        lgLap: { min: "1201px", max: "1566px" }, // Custom Large Laptop screens
        hdScreen: { min: "1567px", max: "1920px" }, // Custom HD Screen
      },
      colors: {
        'pfpYellow': '#ffb400',
      },
      borderColor: {
        'pfpYellow': '#ffb400', // Ensure border color is also added
      },
      zIndex: {
        '-1': '-1', // Add custom z-index value
      },
    },
  },
  plugins: [],
};
