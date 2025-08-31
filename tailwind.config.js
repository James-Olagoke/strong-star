/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up .6s ease-out forwards',
        float: 'float 4s ease-in-out infinite',
        shimmer: 'shimmer 1.5s linear infinite',
      },
      backgroundImage: {
        'grid-radial':
          'radial-gradient(ellipse at top, rgba(79,70,229,.18), transparent 60%), radial-gradient(ellipse at bottom, rgba(236,72,153,.18), transparent 60%)',
      },
    },
  },
  plugins: [],
};
