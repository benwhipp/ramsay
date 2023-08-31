/** @type {import('tailwindcss').Config} */
import { type Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

// Exported separately for ease of referencing elsewhere within js
export const colors = {
    'light-blue': '#0073BB',
    'dark-blue': '#0B2F50',
    'blue-grey': '#DBE3EA',
    grey: '#666666',
    'light-grey': '#CCCCCC',
    'lighter-grey': '#E6E6E6',
    'lightest-grey': '#EAEBEA',
    white: '#ffffff',
};

export default {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors,
            screens: {
                xs: '480px',
            },
        },
    },
    plugins: [],
} satisfies Config;
