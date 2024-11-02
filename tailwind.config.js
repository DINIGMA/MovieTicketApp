/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#1b1e25',
        'gray-100': '#AFAFAF',
        'gray-200': '#BABFC9',
        lak: '#696d744d',
        button: '#696D74',
        buttonActive: '#54A8E5',
        'lak-100': '#696d74',
        bgButton: '#383C43',
        bgDark: '#252932',
        textLight: '#B2B5BB',
        accent: '#F14763',
        accentRed: '#EB5757',
        graySlate: 'rgba(178, 181, 187, 0.7);',
        darkSlate: 'rgba(27, 30, 37, 0.5);'
      }
    }
  },
  plugins: []
}
