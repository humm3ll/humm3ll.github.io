/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        black:   '#000000',
        white:   '#f0ede6',
        dim:     '#3a3a3a',
        dimmer:  '#1a1a1a',
        acid:    '#c8ff00',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        serif:   ['"Instrument Serif"', 'serif'],
        mono:    ['"Departure Mono"', 'monospace'],
        body:    ['"Familjen Grotesk"', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter:  '-0.02em',
        widest:   '0.18em',
      },
      transitionTimingFunction: {
        expo: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}


