import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path'; // Node.js 런타임이 기본 제공하는 모듈 (파일 경로)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true,
  },
  resolve: {// 배열 방식
    // alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
    alias: { // 객체방식
      '@': path.resolve(__dirname, './src'),
    },
  },
});