import { type Config } from 'tailwindcss';

export default {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'light-blue': '#0073BB',
                'dark-blue': '#0B2F50',
                'blue-black': '#0B2F50',
                'blue-grey': '#DBE3EA',
                grey: '#666666',
            },
        },
    },
    plugins: [],
} satisfies Config;
