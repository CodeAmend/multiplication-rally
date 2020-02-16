module.exports = {
  presets: [
    [
      '@babel/presets-env',
      '@babel/preset-react',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
