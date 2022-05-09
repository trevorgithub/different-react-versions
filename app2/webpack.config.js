const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const deps = require('./package.json').dependencies;

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3002,
  },
  output: {
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app2',
      library: { type: 'var', name: 'app2' },
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/Button',
        './react': require.resolve('react'),
        './reactDOM': require.resolve('react-dom'),
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
          shareScope: "react17"

          // import: 'react', // the "react" package will be used a provided and fallback module
          // shareKey: 'newReact', // under this name the shared module will be placed in the share scope
          // shareScope: 'default', // share scope with this name will be used
          // singleton: true, // only a single version of the shared module is allowed
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
          shareScope: "react17"
        },
         // reactNew: {
         //   import: "react", // the "react" package will be used a provided and fallback module
         //   shareKey: "reactNew", // under this name the shared module will be placed in the share scope
         //   shareScope: "modern", // share scope with this name will be used
         //   singleton: true, // only a single version of the shared module is allowed
         // },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
