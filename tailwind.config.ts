import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        paper: '#FAF8F5',
        surface: '#FFFFFF',
        ink: '#151210',
        muted: '#6F6862',
        line: '#E4DED6',
        accent: {
          DEFAULT: '#C2410C',
          soft: '#FBEFE7'
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      maxWidth: {
        content: '72rem'
      },
      letterSpacing: {
        tightest: '-0.045em'
      }
    }
  },
  plugins: []
};

export default config;
