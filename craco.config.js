module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Keep your existing mjs rule (if you had one)
      webpackConfig.module.rules.push({
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false,
        },
      });

      // ←←← THE FIX: modify the existing minimizer (this always works)
      const cssMinimizer = webpackConfig.optimization.minimizer.find(
        (plugin) => plugin && plugin.constructor.name === 'CssMinimizerPlugin'
      );

      if (cssMinimizer) {
        cssMinimizer.options.minimizerOptions = {
          preset: [
            'default',
            {
              calc: false,   // stops the "Unexpected '/'" error on Tailwind arbitrary values
            },
          ],
        };
      }

      return webpackConfig;
    },
  },
};