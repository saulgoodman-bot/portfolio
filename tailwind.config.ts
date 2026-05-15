import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base:    '#111111',
        surface: '#1a1a1a',
        border:  'rgba(255,255,255,0.08)',
        muted:   '#888888',
        pill:    '#222222',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
};

export default config;