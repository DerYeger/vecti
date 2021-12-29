/// <reference types="vitest" />
import * as path from 'path'

import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// eslint-disable-next-line no-restricted-imports
import Meta from './package.json'

export default defineConfig({
  plugins: [
    dts({
      include: 'src/**',
      outputDir: 'dist/types',
      staticImport: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      formats: ['es', 'umd'],
      name: Meta.name,
      fileName: (format) => `${Meta.name}.${format}.js`,
    },
  },
  resolve: {
    alias: [
      {
        find: 'src',
        replacement: path.resolve(__dirname, 'src'),
      },
      {
        find: 'test',
        replacement: path.resolve(__dirname, 'test'),
      },
    ],
  },
  test: {
    include: ['test/**/*.test.ts'],
  },
})
