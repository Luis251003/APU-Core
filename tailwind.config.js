/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        apu: { DEFAULT: 'rgb(25,193,157)', bright: 'rgb(0,242,176)', ink: '#041310' }
      },
      fontFamily: { sans: ['"Plus Jakarta Sans"', 'sans-serif'] }
    }
  },
  // Preflight desactivado para no alterar el diseño existente (estilos inline).
  corePlugins: { preflight: false },
  plugins: []
};
