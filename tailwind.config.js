/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    fontFamily: {
      body: ['"Josefin Sans"', "ui-sans-serif"],
    },
    letterSpacing: {
      widest: "0.2em",
    },
    extend: {
      colors: {
        "dark-grayish-red": "hsl(0, 6%, 24%)",
        "desaturated-red": "hsl(0, 26%, 70%)",
        "soft-red": "hsl(0, 93%, 68%)",
        "grad-1": "hsl(0, 80%, 86%)",
        "grad-2": "hsl(0, 74%, 74%)",
        "grad-h1": "hsl(0,0%,100%)",
        "grad-h2": "hsl(0, 100%, 98%)",
      },
      backgroundImage: {
        "hero-mobile": "url('../images/hero-mobile.jpg')",
        "hero-desktop": "url('../images/hero-desktop.jpg')",
        "bg-pattern-desktop": "url('../images/bg-pattern-desktop.svg')",
      },
    },
  },
  plugins: [],
};
