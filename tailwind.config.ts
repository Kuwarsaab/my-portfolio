import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: "#112240",
        primaryColor: "#64FFDA",
        textColor: "#8892B0",
      },
    },
    animation: {
      backgroundPositionSpin:
        "background-position-spin 3000ms infinite alternate",
        'spin-5s': 'spin 5s linear infinite',
        'ping-1s': 'ping 5s ease-in-out 1.4s',
    },
    keyframes: {
      spin: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
      ping: {
        '75%': {
          transform: 'scale(2)',
          opacity: '0',
        }
      },
      "background-position-spin": {
        "0%": { backgroundPosition: "top center" },
        "100%": { backgroundPosition: "bottom center" },
      },
    },
    screens: {
      'xs': '476px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',

      '2xl-mx': { 'max': '1535px' },
      'xl-mx': { 'max': '1279px' },
      'lg-mx': { 'max': '1023px' },
      'md-mx': { 'max': '767px' },
      'sm-mx': { 'max': '639px' },
      'xs-mx': { 'max': '475px' },
    },
  },
  plugins: [],
};
export default config;
