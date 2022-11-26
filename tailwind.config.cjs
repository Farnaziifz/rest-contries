/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    './presentation/**/*.{vue,js,ts,jsx,tsx}',
    './presentation/layouts/**/*.vue',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          xl: '0',
        },
        screens: {
          '1580px': '1280px',
        },
      },
      boxShadow: {
        card: '0px 0px 20px rgba(0, 0, 0, 0.05)',
      },
      colors: {
        'dark-mood-elm': '#2b3945',
        'dark-mood-bgc': '#202c37',
        'light-mood-text': '#111517',
        'light-mood-input': '#858585',
        'light-mood-bgc': '#fafafa',
        white: '#ffffff',
      },
      fontSize: {
        sm: ['14px', '16px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },
      screens: {
        laptop: '1440px',
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
}
