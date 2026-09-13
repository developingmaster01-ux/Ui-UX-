/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0908",
          soft: "#15100D",
          surface: "#1C1512",
          line: "#332821",
        },
        ivory: "#F4E9D8",
        gold: {
          DEFAULT: "#D9A441",
          bright: "#F0C46B",
          dim: "#8A6B2E",
        },
        ember: {
          DEFAULT: "#C4451C",
          bright: "#E5642E",
          deep: "#7A2A10",
        },
      },
      fontFamily: {
        display: ["'Baloo 2'", "sans-serif"],
        body: ["'Hind'", "sans-serif"],
      },
      backgroundImage: {
        grain: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        ember: "0 0 60px -12px rgba(196,69,28,0.45)",
        gold: "0 0 40px -10px rgba(217,164,65,0.35)",
      },
    },
  },
  plugins: [],
};
