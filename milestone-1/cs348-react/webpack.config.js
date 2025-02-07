const webpack = require('webpack');

module.exports = {
  resolve: {
    fallback: {
      crypto: false,
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new webpack.EnvironmentPlugin({
      NODE_OPTIONS: '--openssl-legacy-provider',
    }),
  ],
};
