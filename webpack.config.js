const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'production',

  // entry: {
  //   app: path.join(__dirname, 'src', 'index.tsx'),
  // },

  devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.tsx'],
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },


  // The compiler will assume these are globals
  // Browsers can cache these
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
  ],

  // output: {
  //   filename: '[name].js',
  //   path: path.resolve(__dirname, 'dist'),
  // },
};
