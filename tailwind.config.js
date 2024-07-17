/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grayBg: "#F8F8F8",
        grayBgLight: "#F2F2F2",
        grayIcon: "#C4C4C4",
        grayIconLight: "#DCDCDC",
        grayBorder: "#D8D8D8",
        grayFont: "#626262",
        grayFontLight: "#909090",
      },
    },
  },
  plugins: [],
};
