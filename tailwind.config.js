/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void:    '#050505',
        'void-2':'#0a0a0a',
        'void-3':'#111111',
        silver:  '#d4d4d4',
        'silver-dim': '#666666',
        'silver-dimmer': '#2a2a2a',
        acid:    '#c8ff00',
      },
      fontFamily: {
        syne:  ['"Syne"', 'sans-serif'],
        mono:  ['"JetBrains Mono"', 'monospace'],
        body:  ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
