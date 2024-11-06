const path = require('path');

module.exports = {
  entry: './src/js/game.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      // Обработка CSS файлов
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // Обработка изображений
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
      // Обработка JavaScript с использованием Babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // Поддержка современных JavaScript фич
          },
        },
      },
    ],
  },
  devServer: {
    static: './dist',
  },
};
