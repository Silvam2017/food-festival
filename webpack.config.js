const path = require('path');
const webpack = require('webpack');
const bootstrap = require('bootstrap');

module.exports = {
    entry: './assets/js/script.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
    ],
    mode: 'development'
  };