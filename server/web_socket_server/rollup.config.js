import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

import { optimizeLodashImports } from "@optimize-lodash/rollup-plugin";

const isProd = process.env.NODE_ENV === 'production';

console.log('isProd', isProd);

const devConfig = {
  watch: {
    // build 两秒后才能执行 rebuild
    buildDelay: 2000,
    exclude: [
      'node_modules/**',
    ],
    include: 'src/**'
  }
}

const basePlugins = [
  typescript(),
  optimizeLodashImports(),
  resolve(),
  commonjs(),
  json()
]

const external = [
  'express',
  'socket.io'
]

const devPlugins = [];
const prodPlugins = [];

const config = {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'cjs'
  },
  external
}

export default {
  ...config,
  ...(!isProd ? devConfig : {} ),
  plugins: [
    ...basePlugins,
    isProd ? prodPlugins : devPlugins,
  ],
};
