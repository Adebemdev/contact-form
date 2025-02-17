/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
      },
      fontWeight: {
        normal: 400,
        bold: 700,
      },
      colors: {
        'Green(lighter)': 'hsl(148, 38%, 91%)',
        'Green(medium)': ' hsl(169, 82%, 27%)',
        Red: 'hsl(0, 66%, 54%)',
        White: 'hsl(0, 0%, 100%)',
        'Grey(medium)': 'hsl(186, 15%, 59%)',
        'Grey(darker)': 'hsl(187, 24%, 22%)',
      },
      variants: {
        extend: {
          backgroundColor: ['checked'],
          borderColor: ['checked'],
        },
      },
    },
  },
  plugins: [],
};
