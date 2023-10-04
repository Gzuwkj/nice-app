import { defineConfig } from "vite";
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(async ()=>{
  return {
    plugins: [react()],
    server: {
      host: '0.0.0.0', // listen on all addresses
      port: 3000,
      hmr: {
        protocol: 'ws',
        host: '172.19.5.32',
        port: 5183,
      },
    },
  }
})
