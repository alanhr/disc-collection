module.exports = {
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        ssr: true,
        displayName: true,
        fileName: false,
        pure: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
      },
    ],
  ],
  env: {
    development: {
      presets: ['next/babel'],
    },
    production: {
      presets: [
        'next/babel',
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
      ],
    },
    test: {
      presets: [
        [
          'next/babel',
          {
            '@babel/preset-env': {
              modules: 'commonjs',
            },
          },
        ],
      ],
    },
  },
}
