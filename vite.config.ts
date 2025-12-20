import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { plugin } from 'postcss';

export default defineConfig({
  plugins: [react()],
  base: "/ruthvik-1411.github.io"
});
