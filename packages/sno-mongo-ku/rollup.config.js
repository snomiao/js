import pkg from './package.json';

export default {
  input: pkg.lib,
  output: [
    {
      file: pkg.cjs,
      format: 'cjs',
    },
    {
      file: pkg.main,
      format: 'es',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [],
};
