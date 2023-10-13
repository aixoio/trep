import typescript from '@rollup/plugin-typescript';
import { minify } from 'rollup-plugin-esbuild';

export default {
  input: 'src/main.ts',
  output: {
    file: 'dist/main.js',
    format: 'cjs',
  },
  plugins: [
    typescript(),
    minify()
  ],
};
