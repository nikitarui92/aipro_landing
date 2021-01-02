
module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['css-loader', 'sass-loader']
      }
    ]
  },
});
