import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    'vendor': ['react', 'react-dom'],
                    'animation-libs': ['framer-motion', 'gsap'],
                    'three-js': ['three', '@react-three/drei', '@react-three/fiber']
                }
            }
        }
    }
})
