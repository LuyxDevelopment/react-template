import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	preview: {
		host: '127.0.0.1',
		port: parseInt(process.env.PORT)
	},
	server: {
		host: '127.0.0.1',
		port: parseInt(process.env.PORT)
	},
})
