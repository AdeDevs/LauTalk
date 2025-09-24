/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // adjust based on your project structure
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb", // blue-600
          light: "#3b82f6",   // blue-500
          dark: "#1e40af",    // blue-900
        },
        secondary: {
          DEFAULT: "#f97316", // orange-500
          light: "#fb923c",
          dark: "#c2410c",
        },
        neutral: {
          DEFAULT: "#64748b", // slate-500
          light: "#94a3b8",
          dark: "#334155",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        serif: ["Merriweather", "ui-serif", "Georgia"],
        mono: ["Fira Code", "ui-monospace", "SFMono-Regular"],
      },
      boxShadow: {
        soft: "0 4px 12px rgba(0,0,0,0.08)",
        strong: "0 6px 20px rgba(0,0,0,0.15)",
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};