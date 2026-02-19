/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0f172a', // deep navy
                    light: '#1e293b',
                },
                accent: {
                    blue: '#3b82f6', // bright blue
                    purple: '#8b5cf6', // neon purple
                    neon: '#00f2ff', // cyber neon
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
}
