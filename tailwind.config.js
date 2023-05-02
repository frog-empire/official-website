/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('/images/hero_bg.png')",
        'blue-bg': "url('/images/blue_bg.svg')",
        'particle-bg': "url('/images/particles.png')",
      },
      fontFamily: {
        pixel: 'pixellife',
        montserrat: 'Montserrat',
      },
      colors: {
        green: '#509136',
      },
    },
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    }
  },
  plugins: [],
};
