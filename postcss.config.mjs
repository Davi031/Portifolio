module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        twinkle: 'twinkle 3s infinite',
        comet: 'comet 15s linear infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: 0.3 },
          '50%': { opacity: 1 },
        },
        comet: {
          '0%': {
            transform: 'rotate(var(--comet-angle)) translateX(0)',
            opacity: 0,
          },
          '1%': {
            opacity: 1,
          },
          '10%': {
            transform: 'rotate(var(--comet-angle)) translateX(-100vw)',
            opacity: 0,
          },
          '100%': {
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}