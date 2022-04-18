module.exports = {
  presets: [
    ['@babel/preset-env', { useBuiltIns: 'entry', corejs: '2', targets: { node: 'current' } }],
    '@babel/preset-react'
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
          '@config': './src/config',
          '@constants': './src/constants',
          '@pages': './src/pages',
          '@public': './src/public',
          '@store': './src/store',
          '@styles': './src/styles',
          '@utils': './src/utils',
          '@hooks': './src/hooks',
          '@components': './src/view/components',
          '@containers': './src/view/containers',
          '@ui': './src/view/ui'
        }
      }
    ],
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic'
      }
    ],
    function () {
      return {
        visitor: {
          MetaProperty(path) {
            path.replaceWithSourceString('process');
          }
        }
      };
    }
  ]
};
