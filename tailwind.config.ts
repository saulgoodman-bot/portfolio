import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#090b10',
        panel: '#11141d',
        muted: '#9ca3af',
        line: '#202634',
        soft: '#151923',
        accent: '#dbe7ff'
      },
      boxShadow: {
        card: '0 20px 60px rgba(0,0,0,.35)'
      }
    }
  },
  plugins: []
};

export default config;
