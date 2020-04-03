const path = require('path');
/** html-webpack-plugin Автоматически подключает свежие скрипты в html.Параметры передаём в конструктор */
const HTMLWebpackPlugin = require("html-webpack-plugin"); //npm i -D html-webpack-plugin 
const {CleanWebpackPlugin} = require("clean-webpack-plugin"); // плагин ощичает старые сгенерированные скрипты


module.exports = {
  // context: path.resolve(__dirname, "src"), можем указать папку src по умолчанию
  mode: "development",//по умолчанию собирает в минифицированную production
  entry: {
    main: './src/index.js',
    analytics: './src/analytics.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },
  resolve: {
    // extensions: [".js", ".json", ".png"], // можно указать сдесь расширения чтобы потому нигде его неписать
    alias: {
      "@pathToStyleDir": path.resolve(__dirname, "css") // предумываем ключ а значения будет путём 
    }
  },
  optimization: { // оптимизация чтобы библиотека имортировалась только один раз в отдельный файл "в vendors"
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [
    new HTMLWebpackPlugin({
      // title:"My Webpack",
      template: "./src/index.html" // указываем путь к оригенальному файлу чтобы передать вёрстку в body
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"] // npm i -D style-loader css-loader для того чтобы можно было импортировать css
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ["file-loader"] // npm i -D file-loader для того чтобы работал импорт картинок и шрифтов
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/, // для иморта шрифтов в css
        use: ["file-loader"]
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"] // npm i -D xml-loader для возможности импортировать xml формат в js файлы
      },
      {
        test: /\.csv$/,
        use: ["csv-loader"] // npm i -D csv-loader для возможности импортировать csv формат в js файлы
      }
    ]
  }
};