module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: '> 0.25%, last 2 versions, not dead'
      }
    ],
    '@babel/preset-typescript'
  ]
};
