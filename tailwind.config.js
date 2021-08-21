const typography = require("tailwindcss-typography");
const filters = require("tailwindcss-filters");

module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textShadow: {
      // defaults to {}
      default: "0 2px 5px rgba(0, 0, 0, 0.5)",
      lg: "0 2px 10px rgba(0, 0, 0, 0.5)",
      "text-glow": "0 2px 10px rgba(0, 0, 0, 0.5)",
    },
    fontFamily: {
      roboto: ["Roboto"],
    },
    extend: {
      spacing: {
        22: "5.5rem"
      },
      colors: {
        "action-cyan": "#25B2A6",
        "theme-white": "#E94A44",
        "processing": "#597DA8",
        "processing-light": "#E6F0FD",
        "directed": "#CD9554",
        "directed-light": "#FBEDDC",
        "dark-font": "#212121",
        "warm-gray": "#5C5C5C",
        "cool-gray": "#64677B",
        "cool-gray-ligth": "#EFF2F6",
        "gray": "#E5E5E5",
        "white-hover": "#F4F6F8",
        "secondary": "#64677B",
        "error": "#CE5656",
        "error-ligth": "#FCF5F5",
        "not-active": "#A3A5B1",
        "input-focus":"#F5F8FB",
      },
      fontSize: {
        "h3": ["1rem", {
          lineHeight: "1.25rem"
        }]
      }, 
      boxShadow:
      {
        "inner-fading": "inset 0 0 0 9999px rgba(0,0,0, 0.1)",
        "select": "0px 0px 15px 0px #0000002e"
      },
      height: {
        13: "52px",
        "min": "min-content"
       },
       width:{
         fit: "fit-content"
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    typography({
      // all these options default to the values specified here
      ellipsis: true, // whether to generate ellipsis utilities
      hyphens: true, // whether to generate hyphenation utilities
      kerning: true, // whether to generate kerning utilities
      textUnset: true, // whether to generate utilities to unset text properties
      componentPrefix: "c-", // the prefix to use for text style classes
    }),
    filters,
  ],
};
