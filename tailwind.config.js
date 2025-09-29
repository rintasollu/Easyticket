/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple-light': '#F3EFFF',
        'brand-purple': '#8A3FFC',
        'brand-purple-dark': '#4D1D95',
        'brand-pink': '#FF7EB3',
        'brand-yellow': '#FFC700',
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      animation: {
        blob: "blob 7s infinite ease-in-out",
      },
    },
  },
  plugins: [
    function ({addUtilities}){
      const newUtilities = {
".no-scrollbar::-webkit-scrollbar":{
  display : "none",
},
  ".no-scrollbar" :   {
    "-ms-overflow-style" : "none",
    "scrollbar-width": "none",
  },
};

      addUtilities(newUtilities);
    },
  ],
};