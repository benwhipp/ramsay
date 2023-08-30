/** @type {import('tailwindcss').Config} */
import { type Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'light-blue': '#0073BB',
                'dark-blue': '#0B2F50',
                'blue-black': '#0B2F50',
                'blue-grey': '#DBE3EA',
                grey: '#666666',
                'light-grey': '#CCCCCC',
            },
            screens: {
                xs: '480px',
            },
        },
    },
    plugins: [],
} satisfies Config;
