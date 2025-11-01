import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D4AF37',
        secondary: 'oklch(0.967 0.001 286.375)',
        background: 'oklch(0.141 0.005 285.823)',
        foreground: 'oklch(0.985 0 0)',
        card: 'oklch(1 0 0)',
        'card-foreground': 'oklch(0.141 0.005 285.823)',
      },
      borderRadius: {
        DEFAULT: '0.625rem',
      },
    },
  },
  plugins: [],
};

export default config;