const path = require('path');

// for not jsx users
module.exports = {
  mode: "production",
  entry: {
    main: './demo.tsx'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      loader: 'ts-loader',
      options: {
        transpileOnly: true
      }
    }]
  },
};