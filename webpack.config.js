const path = require('path');
const webpack = require('webpack');

module.exports = {
<<<<<<< HEAD
  mode: 'development',
=======
  mode: NODE_ENV, 
>>>>>>> fe370c9354e631e07c73e82fd3d099baab40f033
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
<<<<<<< HEAD
    //enable importing js jsx files without specifying their extension
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
=======
    // enable importing js jsx files without specifying their extension
    extensions: ['.js', '.jsx'],
  },
  devServer: {
>>>>>>> fe370c9354e631e07c73e82fd3d099baab40f033
    contentBase: path.resolve(__dirname, './client'),
    port: 8080,
    proxy: {
      '/api': 'http://localhost:3000',
    },
    publicPath: '/build/',
  },
<<<<<<< HEAD
=======

>>>>>>> fe370c9354e631e07c73e82fd3d099baab40f033
};
