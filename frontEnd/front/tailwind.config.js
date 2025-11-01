/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/app/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}",
        "./src/app/globals.css",
    ],
    theme: {
        extend: {
            fontFamily: {
                pacifico: ['var(--font-pacifico)', 'cursive'],
                quicksand: ['var(--font-quicksand)', 'sans-serif'],
            },
            colors: {
                'bg-primary-custom': '#4f46e5',
                'bg-secondary-custom': '#f59e0b',
            },
            borderRadius: {
                button: '0.375rem',
            },
        },
    },
    plugins: [
        require('tailwindcss-animate'),
    ],
}