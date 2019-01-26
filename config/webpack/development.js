process.env.NODE_ENV = process.env.NODE_ENV || "development";

const environment = require("./environment");

module.exports = environment.toWebpackConfig();

// ----------------------------------------------------------------------------------------------
// UNCOMMENT CODE BELOW TO RUN WEBPACKER PACKAGE ANALYSIS IN THE DEVELOPMENT EVIRONMENT
// ----------------------------------------------------------------------------------------------
// The code below should be uncommented after running:
// yarn add webpack-bundle-analyzer --dev
// Doing this will load a visual representation of your packages. To stop in comment out the the code again here

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// module.exports = environment.toWebpackConfig().merge({
//     plugins: [
//       new BundleAnalyzerPlugin({analyzerMode: 'static'})
//     ]
// });

// After uncommenting the code abouve, in the terminal, run:
// bin/webpack-dev-server
// or
// rails s
// or
// hivmind - if you are using hivemind
// to see the package visualization
