import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        m3: '0 1px 2px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
