export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        black:  '#000000',
        white:  '#e8e8e8',
        red:    '#8b0000',
        dim:    '#333333',
        dimmer: '#1a1a1a',
      },
      fontFamily: {
        mono:    ['"Share Tech Mono"', 'monospace'],
        vt:      ['"VT323"', 'monospace'],
        courier: ['"Courier Prime"', 'monospace'],
      },
    },
  },
  plugins: [],
}
