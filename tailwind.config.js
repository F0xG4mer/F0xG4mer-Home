/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: true,
  theme: {
    extend: {
      colors: {
        text_header: '#690C3E',
        text: '#D0207E',
        background: '#070707',
        primary: '#c01122',
        secondary: '#2c103c',
        accent: '#3a3a3a'
      },

      fontSize: {
        sm: '0.707rem',
        base: '1rem',
        xl: '1.414rem',
        '2xl': '1.999rem',
        '3xl': '2.827rem',
        '4xl': '3.997rem',
        '5xl': '5.652rem'
      },
      fontFamily: {
        heading: 'Arimo',
        body: 'Source Code Pro'
      },
      fontWeight: {
        normal: '400',
        bold: '700'
      },
      backgroundImage: {
        parallax: "url('/images/f0x-home-top-cover.webp')",
        logo: "url('/images/f0x-home-logo.svg')"
      }
    }
  },
  plugins: []
}
