module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@src': './src',
        },
        extensions: ['.tsx', '.ts'],
      },
    ],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
  ],
}
