module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      screens: {
        mob: { min: "320px", max: "480px" },
        "tab-p": { min: "481px", max: "768px" },
        "tab-l": { min: "769px", max: "1024px" },
        lap: { min: "1025px", max: "1200px" },
        "lap-lg": { min: "1201px", max: "1566px" },
        desktop: { min: "1567px", max: "1920px" },
      },
      colors: {
        "pfp-yellow": "#ffb400",
        "toast-success": "#4caf50",
        "toast-error": "#f44336",
        "toast-background": "#333",
        "toast-text": "#fff",
      },
      fontSize: {
        toast: "0.875rem",
        "0.85em": "0.85em",
      },
      borderRadius: {
        toast: "4px",
        "1.7rem": "1.7rem",
        "3rem": "3rem",
      },
      padding: {
        toast: "10px",
        "1.5rem": "1.5rem",
        "0.8rem": "0.8rem",
        "0.1rem": "0.1rem",
      },
      boxShadow: {
        toast: "0 2px 4px rgba(0, 0, 0, 0.2)",
        "about-cards": "0rem 0rem 0.05rem 0.05rem #4b4b4b",
      },
      zIndex: {
        "-1": "-1",
      },
      borderColor: {
        defaultYellow: "#ffb400",
        boulder: "#777777",
      },
      width: {
        "8%": "8%",
        "92%": "92%",
        "95%": "95%",
        "98%": "98%",
        "99%": "99%",
        "80%": "80%",
        "40%": "40%",
        "45%": "45%",
        "48%": "48%",
        "60%": "60%",
        "3%": "3%",
        "78%": "78%",
      },
      height: {
        h100vh: "100vh",
        "69vh": "69vh",
        "80%": "80%",
        "0.35vh": "0.35vh",
        "40%": "40%",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      margin: {
        "10%": "10%",
        "1.2rem": "1.2rem",
        "1.5rem": "1.5rem",
      },
      backgroundColor: {
        "Midnight-Moss": "#040404",
        "bgpfp-yellow": "#ffb400",
      },
      backgroundImage: {
        "image-gradient":
          "linear-gradient(75deg, #ffb400 43%, transparent 43.5%)",
      },
      gap: {
        "1.3rem": "1.3rem",
        "1.8rem": "1.8rem",
      },
      letterSpacing: {
        long: "0.5rem",
      },
    },
  },
  plugins: [],
};
