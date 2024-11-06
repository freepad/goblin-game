const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/js/game.js',  // Это точка входа вашего проекта
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',  // Название файла, который Webpack создаст
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader', // Для транспиляции JS, если используете ES6/JSX
      },
      {
        test: /\.html$/,
        use: 'html-loader', // Для обработки HTML
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'], // Для работы с CSS
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource', // Для работы с изображениями
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html', // Используем ваш index.html как шаблон
      filename: 'index.html',  // Он будет скомпилирован в dist/index.html
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css', // Скомпилированный CSS файл
      chunkFilename: '[id].css',
    }),
  ],
  resolve: {
    extensions: ['.js'],  // Поддержка расширений для JS
  },
};
