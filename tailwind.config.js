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
        'pfp-yellow': '#ffb400',
        'toast-success': '#4caf50', // Green for success
        'toast-error': '#f44336',   // Red for error
        'toast-background': '#333', // Dark background for toast
        'toast-text': '#fff',       // White text for toast
      },
      fontSize: {
        'toast': '0.875rem',        // Font size for toast
      },
      borderRadius: {
        'toast': '4px',             // Border radius for toast
      },
      padding: {
        'toast': '10px',            // Padding for toast
      },
      boxShadow: {
        'toast': '0 2px 4px rgba(0, 0, 0, 0.2)', // Box shadow for toast
      },
      zIndex: {
        '-1': '-1', // Add custom z-index value
      },
      borderColor:{
        'defaultYellow':'#ffb400',
      },
    },
  },
  plugins: [],
};
