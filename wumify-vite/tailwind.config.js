/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        'hero-sub': 'hsl(var(--hero-sub))',
        'wumify-black': '#080810',
        'wumify-purple': '#7B2FBE',
        'wumify-blue': '#2563EB',
        'wumify-cyan': '#06B6D4',
      },
      fontFamily: {
        geist: ['"Geist Sans"', 'sans-serif'],
        general: ['"General Sans"', 'sans-serif'],
      },
      animation: {
        'marquee-scroll': 'marquee-scroll 20s linear infinite',
        'shimmer': 'shimmer 1.5s ease-in-out infinite',
      },
      keyframes: {
        'marquee-scroll': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'shimmer': {
          '100%': { transform: 'translateX(100%)' }
        }
      }
    },
  },
  plugins: [],
}
