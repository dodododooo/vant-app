import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
const projectRootDir = path.resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: /^@src/, replacement: path.resolve(projectRootDir, 'src') },
      { find: /^@components/, replacement: path.resolve(projectRootDir, 'src/components') },
      { find: /^@hooks/, replacement: path.resolve(projectRootDir, 'src/hooks') },
      { find: /^@store/, replacement: path.resolve(projectRootDir, 'src/store') },
      { find: /^@router/, replacement: path.resolve(projectRootDir, 'src/router') },
      { find: /^@utils/, replacement: path.resolve(projectRootDir, 'src/plugins/utils.ts') },
    ]
  }
})
