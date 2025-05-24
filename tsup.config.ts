import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index/index.ts', 'src/cli/cli.ts', 'src/playground.ts'],
  format: ['cjs', 'esm'], // Build for both CommonJS and ES Modules
  dts: true, // Generate .d.ts type definitions
  splitting: false, // Disable code splitting (optional)
  clean: true, // Clean the output directory before building
  outDir: 'dist', // Output directory
  target: 'node18', // Target Node.js instead of browser
  platform: 'node', // Explicitly set platform to node
  external: [
    // Node.js built-ins that antlr4ts might use
    'assert',
    'util',
    'fs',
    'path',
    'stream',
    'buffer',
    'events',
    'crypto',
    'os',
    'url'
  ],
  // Alternative: Mark all Node.js built-ins as external
  // external: (id) => !id.startsWith('.') && !id.startsWith('/'),

  // Ensure proper module resolution
  treeshake: false, // Disable tree shaking to avoid issues with dynamic requires

  // Additional options for better Node.js compatibility
  shims: false, // Don't add shims for Node.js globals
});