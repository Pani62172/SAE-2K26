module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Keeps your existing rules for modern 3D (.mjs) files
      webpackConfig.module.rules.push({
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false,
        },
      });

      // THE FIX: Completely deletes the CSS Minimizer from the build pipeline
      webpackConfig.optimization.minimizer = webpackConfig.optimization.minimizer.filter(
        (plugin) => plugin && plugin.constructor.name !== 'CssMinimizerPlugin'
      );

      return webpackConfig;
    },
  },
};