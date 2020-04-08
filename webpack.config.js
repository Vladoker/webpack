const path = require('path');
/** html-webpack-plugin Автоматически подключает свежие скрипты в html.Параметры передаём в конструктор */
const HTMLWebpackPlugin = require("html-webpack-plugin"); //npm i -D html-webpack-plugin 
const {CleanWebpackPlugin} = require("clean-webpack-plugin"); // плагин ощичает старые сгенерированные скрипты
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // вместо style-loader позволяет выносить стили в одельный файл
const TerserWebpackPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");

const isDev = process.env.NODE_ENV === "development"; // определяет в каком режиме сборки мы находится
const isProd = !isDev;
console.log(`webpack mode = ${isDev?'development':'production'}`);

const optimization = () => {
  const config = {
    splitChunks: { // оптимизация чтобы библиотека имортировалась только один раз в отдельный файл "в vendors"
      chunks: "all" 
    }
  }

  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetsWebpackPlugin(),
      new TerserWebpackPlugin()
    ]
  }

  return config;
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

const cssLoaders = extra => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: isDev,
        reloadAll: true
      },
    },
    "css-loader"
  ];

  if(extra) {
    loaders.push(extra);
  }
    
    return loaders;
}

module.exports = {
  // context: path.resolve(__dirname, "src"), можем указать папку src по умолчанию
  mode: "development",//по умолчанию собирает в минифицированную production
  entry: {
    main: "./src/index.js", //или для babel ["@babel/polyfill", "./src/index.js"]
    analytics: "./src/analytics.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: filename("js")
  },
  resolve: {
    // extensions: [".js", ".json", ".png"], // можно указать сдесь расширения чтобы потому нигде его неписать
    alias: {
      "@pathToStyleDir": path.resolve(__dirname, "css") // предумываем ключ а значения будет путём 
    }
  },
  optimization: optimization(), 
  devServer: {
    port: 80,
    hot: isDev 
  },
  plugins: [
    new HTMLWebpackPlugin({
      // title:"My Webpack",
      template: "./src/index.html" // указываем путь к оригенальному файлу чтобы передать вёрстку в body
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: filename("css")
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,// npm i -D style-loader css-loader для того чтобы можно было импортировать css
        use: cssLoaders()
      },
      {
        test: /\.less$/,// npm i -D less-loader для работы с less
        use: cssLoaders("less-loader")
      },
      {
        test: /\.s[ac]ss$/,// npm i -D less-loader для работы с less
        use: cssLoaders("sass-loader")
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
      },
      // { 
      //   test: /\.js$/, // настройка для babel
      //   exclude: /node_modules/,
      //   loader: {
      //     loader: "babel-loader",
      //     options: {
      //       presets: [
      //         "@babel/preset-env"
      //       ]
      //     }
      //   }
      // }
    ]
  }
};